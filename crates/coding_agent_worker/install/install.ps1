# Install roxd, Macro's agent daemon, on Windows:
#
#   irm https://raw.githubusercontent.com/macro-inc/macro/main/crates/coding_agent_worker/install/install.ps1 | iex
#
# A running roxd downloads updates itself and uses them from its next
# launch; run this again to update right away.
#
# The install folder holds roxd.exe, a launcher that runs the newest
# versions\<tag>\roxd-core.exe. The folder is added to the user PATH once.
#
#   ROXD_VERSION       a release tag to install (v2026.10.18.0); default latest
#   ROXD_INSTALL_DIR   the install folder; default %LOCALAPPDATA%\Programs\roxd
#   ROXD_UPDATE_SOURCE a mirror (URL or folder) holding latest.json and the
#                        release archives, instead of GitHub releases

# A script block, so `irm | iex` leaves no variables behind in the caller's
# session and a failure does not close it.
& {
    $ErrorActionPreference = 'Stop'
    $ProgressPreference = 'SilentlyContinue'
    # Windows PowerShell 5.1 may still default to TLS 1.0, which GitHub refuses.
    [Net.ServicePointManager]::SecurityProtocol =
        [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

    $repo = 'macro-inc/macro'
    $installDir = if ($env:ROXD_INSTALL_DIR) { $env:ROXD_INSTALL_DIR }
        else { Join-Path $env:LOCALAPPDATA 'Programs\roxd' }
    $version = if ($env:ROXD_VERSION) { $env:ROXD_VERSION } else { 'latest' }
    $source = if ($env:ROXD_UPDATE_SOURCE) { $env:ROXD_UPDATE_SOURCE.TrimEnd('/', '\') } else { $null }

    if (-not [Environment]::Is64BitOperatingSystem) {
        throw 'roxd install: 64-bit Windows is required'
    }

    # A URL, or a file in a folder mirror.
    function Get-File($from, $to) {
        if ($from -match '^https?://') {
            Invoke-WebRequest -UseBasicParsing -Uri $from -OutFile $to
        } else {
            Copy-Item -LiteralPath $from -Destination $to
        }
    }

    $work = Join-Path ([IO.Path]::GetTempPath()) ([Guid]::NewGuid())
    New-Item -ItemType Directory -Path $work | Out-Null
    try {
        # The x86_64 build also runs on Windows on Arm, under emulation.
        if ($source) {
            if ($version -eq 'latest') {
                $manifest = Join-Path $work 'latest.json'
                Get-File "$source/latest.json" $manifest
                $version = (Get-Content $manifest -Raw | ConvertFrom-Json).tag_name
                if (-not $version) { throw "roxd install: $source/latest.json names no tag_name" }
            }
            $asset = "roxd-$version-windows-x86_64.zip"
            $url = "$source/$asset"
        } elseif ($version -eq 'latest') {
            $asset = 'roxd-windows-x86_64.zip'
            $url = "https://github.com/$repo/releases/latest/download/$asset"
        } else {
            $asset = "roxd-$version-windows-x86_64.zip"
            $url = "https://github.com/$repo/releases/download/$version/$asset"
        }

        Write-Host "Downloading $url"
        $archive = Join-Path $work $asset
        Get-File $url $archive
        Get-File "$url.sha256" "$archive.sha256"

        $expected = ((Get-Content "$archive.sha256" -Raw).Trim() -split '\s+')[0]
        $actual = (Get-FileHash $archive -Algorithm SHA256).Hash
        if ($actual -ne $expected) { throw "roxd install: checksum mismatch for $asset" }

        Expand-Archive -Path $archive -DestinationPath $work -Force
        $binary = Join-Path $work 'roxd.exe'
        # The binary names its own release: `roxd v2026.10.18.0`.
        $tag = ((& $binary --version) -split '\s+')[-1]
        if ($tag -notmatch '^v\d') { throw "roxd install: unexpected version '$tag'" }

        $versionDir = Join-Path $installDir "versions\$tag"
        New-Item -ItemType Directory -Path $versionDir -Force | Out-Null
        Copy-Item $binary (Join-Path $versionDir 'roxd-core.exe') -Force

        # The launcher is the same binary. A running launcher cannot be
        # overwritten, but it can be renamed aside; the next install removes it.
        $launcher = Join-Path $installDir 'roxd.exe'
        Remove-Item "$launcher.old" -Force -ErrorAction SilentlyContinue
        if (Test-Path $launcher) {
            Move-Item $launcher "$launcher.old" -Force
        }
        Copy-Item $binary $launcher

        $userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
        $entries = if ($userPath) { $userPath -split ';' | Where-Object { $_ } } else { @() }
        if ($entries -notcontains $installDir) {
            [Environment]::SetEnvironmentVariable('Path', (@($entries) + $installDir) -join ';', 'User')
            Write-Host "Added $installDir to your user PATH; open a new terminal to use it there."
        } else {
            Write-Host "$installDir is already on your user PATH."
        }
        if (($env:Path -split ';') -notcontains $installDir) {
            $env:Path = "$env:Path;$installDir"
        }
        Write-Host "Installed $(& $launcher --version) to $launcher"
        Write-Host 'Run: roxd'
    } finally {
        Remove-Item $work -Recurse -Force -ErrorAction SilentlyContinue
    }
}
