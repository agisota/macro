# The Windows install layout end to end: install.ps1 from a folder mirror,
# the launcher in fresh PowerShell and cmd sessions, an update staged the way
# the running roxd stages one, the launcher starting it next time and
# pruning the old version, and exit codes passing through the launcher.
#
#   pwsh windows_test.ps1 -Releases DIR -V1 TAG -V2 TAG
param(
    [Parameter(Mandatory)] [string] $Releases,
    [Parameter(Mandatory)] [string] $V1,
    [Parameter(Mandatory)] [string] $V2
)
$ErrorActionPreference = 'Stop'
$installer = Join-Path $PSScriptRoot '..\install\install.ps1'
$work = Join-Path ([IO.Path]::GetTempPath()) ([Guid]::NewGuid())
$mirror = Join-Path $work 'mirror'
$installDir = Join-Path $work 'roxd'
New-Item -ItemType Directory -Path $mirror | Out-Null

function Publish($tag) {
    Copy-Item (Join-Path $Releases "roxd-$tag-windows-x86_64.zip*") $mirror
    @{ tag_name = $tag; assets = @() } | ConvertTo-Json | Set-Content (Join-Path $mirror 'latest.json')
}
function Check($condition, $message) {
    if (-not $condition) { throw "FAIL: $message" }
    Write-Host "ok: $message"
}
# What a brand-new terminal sees: the machine and user PATH as stored.
function Fresh-Path {
    [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User')
}
function Version-In-New-Shells {
    $path = Fresh-Path
    $ps = & powershell.exe -NoProfile -Command "`$env:Path = '$path'; (roxd --version)"
    $cmd = & cmd.exe /d /c "set `"PATH=$path`" && roxd --version"
    return @($ps.Trim(), $cmd.Trim())
}

$userPathBefore = [Environment]::GetEnvironmentVariable('Path', 'User')
try {
    Publish $V1
    $env:ROXD_UPDATE_SOURCE = $mirror
    $env:ROXD_INSTALL_DIR = $installDir
    & $installer
    $launcher = Join-Path $installDir 'roxd.exe'
    Check (Test-Path (Join-Path $installDir "versions\$V1\roxd-core.exe")) "install.ps1 lays out versions\$V1"
    $shells = Version-In-New-Shells
    Check ($shells[0] -eq "roxd $V1") "a new PowerShell runs $V1 ($($shells[0]))"
    Check ($shells[1] -eq "roxd $V1") "a new cmd runs $V1 ($($shells[1]))"

    & $installer
    $entries = ([Environment]::GetEnvironmentVariable('Path', 'User') -split ';') | Where-Object { $_ -eq $installDir }
    Check (@($entries).Count -eq 1) 'a second install adds no second PATH entry'

    # Stage v2 the way the running roxd does: verified core into
    # versions\<tag>.partial, then renamed into place.
    $launcherHash = (Get-FileHash $launcher).Hash
    $unpacked = Join-Path $work 'v2'
    Expand-Archive (Join-Path $Releases "roxd-$V2-windows-x86_64.zip") $unpacked
    $partial = Join-Path $installDir "versions\$V2.partial"
    New-Item -ItemType Directory -Path $partial | Out-Null
    Copy-Item (Join-Path $unpacked 'roxd.exe') (Join-Path $partial 'roxd-core.exe')
    Check ((& $launcher --version) -eq "roxd $V1") 'a partial version is never launched'
    Rename-Item $partial $V2

    $shells = Version-In-New-Shells
    Check ($shells[0] -eq "roxd $V2") "after the update a new PowerShell runs $V2"
    Check ($shells[1] -eq "roxd $V2") "after the update a new cmd runs $V2"
    Check ((Get-FileHash $launcher).Hash -eq $launcherHash) 'the launcher itself is unchanged'
    Check (-not (Test-Path (Join-Path $installDir "versions\$V1"))) "the launcher pruned $V1"

    # clap rejects an unknown flag with exit code 2.
    & $launcher --not-a-roxd-flag 2>$null | Out-Null
    Check ($LASTEXITCODE -eq 2) "the launcher passes the core's exit code through ($LASTEXITCODE)"
    Write-Host 'all Windows checks passed'
} finally {
    [Environment]::SetEnvironmentVariable('Path', $userPathBefore, 'User')
    Remove-Item $work -Recurse -Force -ErrorAction SilentlyContinue
}
# The deliberate failure above leaves $LASTEXITCODE at 2, which pwsh would
# report as the step's exit code.
exit 0
