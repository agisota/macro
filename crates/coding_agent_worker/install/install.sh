#!/bin/sh
# Install roxd, Rox's agent daemon, on macOS or Linux:
#
#   curl -fsSL https://raw.githubusercontent.com/macro-inc/macro/main/crates/coding_agent_worker/install/install.sh | sh
#
# A running roxd updates itself; run this again to update right away.
#
# Options (flags after `sh -s --` when piped, or environment variables):
#   --no-modify-path / ROXD_NO_MODIFY_PATH=1  leave shell startup files alone
#   ROXD_VERSION       a release tag to install (v2026.10.18.0); default latest
#   ROXD_INSTALL_DIR   where the binary goes; default ~/.local/bin
#   ROXD_UPDATE_SOURCE a mirror (URL or directory) holding latest.json and
#                        the release archives, instead of GitHub releases

set -eu

repo="macro-inc/macro"
install_dir="${ROXD_INSTALL_DIR:-$HOME/.local/bin}"
version="${ROXD_VERSION:-latest}"
source="${ROXD_UPDATE_SOURCE:-}"
modify_path=1
case "${ROXD_NO_MODIFY_PATH:-}" in
  "" | 0 | false) ;;
  *) modify_path=0 ;;
esac
for arg in "$@"; do
  case "$arg" in
    --no-modify-path) modify_path=0 ;;
    *)
      echo "roxd install: unknown option $arg" >&2
      exit 2
      ;;
  esac
done

# The line every startup file gets, and the comment that marks it as ours so
# a re-run never adds it twice.
marker="# Added by the roxd installer"

fail() {
  echo "roxd install: $*" >&2
  exit 1
}

command -v curl >/dev/null 2>&1 || [ -n "$source" ] || fail "curl is required"

case "$(uname -s)" in
  Linux) os=linux ;;
  Darwin) os=macos ;;
  *) fail "unsupported OS $(uname -s); on Windows use install.ps1" ;;
esac

case "$(uname -m)" in
  x86_64 | amd64) arch=x86_64 ;;
  arm64 | aarch64) arch=aarch64 ;;
  *) fail "unsupported CPU $(uname -m)" ;;
esac
# A shell running under Rosetta reports x86_64 on Apple Silicon.
if [ "$os" = macos ] && [ "$arch" = x86_64 ] && [ "$(sysctl -n hw.optional.arm64 2>/dev/null || true)" = 1 ]; then
  arch=aarch64
fi

# Fetch $1 (a URL, or a path inside a directory mirror) to the file $2.
fetch() {
  case "$1" in
    https://*) curl -fsSL --proto '=https' --tlsv1.2 -o "$2" "$1" ;;
    # Mirrors are for testing; a local one may be plain http.
    http://*) curl -fsSL -o "$2" "$1" ;;
    *) cp "$1" "$2" ;;
  esac
}

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

if [ -n "$source" ]; then
  source="${source%/}"
  if [ "$version" = latest ]; then
    fetch "$source/latest.json" "$work/latest.json" || fail "could not read $source/latest.json"
    version=$(sed -n 's/.*"tag_name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$work/latest.json" | head -n 1)
    [ -n "$version" ] || fail "$source/latest.json names no tag_name"
  fi
  asset="roxd-$version-$os-$arch.tar.gz"
  url="$source/$asset"
elif [ "$version" = latest ]; then
  asset="roxd-$os-$arch.tar.gz"
  url="https://github.com/$repo/releases/latest/download/$asset"
else
  asset="roxd-$version-$os-$arch.tar.gz"
  url="https://github.com/$repo/releases/download/$version/$asset"
fi

echo "Downloading $url"
fetch "$url" "$work/$asset" ||
  fail "download failed; is $os-$arch published for $version?"
fetch "$url.sha256" "$work/$asset.sha256" ||
  fail "checksum download failed"

(
  cd "$work"
  # The checksum file names the archive it was made from; check the digest
  # against the file downloaded here, whatever it was called upstream.
  expected=$(cut -d ' ' -f 1 "$asset.sha256")
  if command -v sha256sum >/dev/null 2>&1; then
    actual=$(sha256sum "$asset" | cut -d ' ' -f 1)
  else
    actual=$(shasum -a 256 "$asset" | cut -d ' ' -f 1)
  fi
  [ -n "$expected" ] && [ "$expected" = "$actual" ]
) || fail "checksum mismatch for $asset"

tar -xzf "$work/$asset" -C "$work" roxd
mkdir -p "$install_dir"
# Rename into place: a running roxd keeps its old binary until it restarts.
install -m 755 "$work/roxd" "$install_dir/.roxd.new"
mv -f "$install_dir/.roxd.new" "$install_dir/roxd"

echo "Installed $("$install_dir/roxd" --version) to $install_dir/roxd"

# Append $2 to the startup file $1 once; say what changed.
add_to_startup_file() {
  if [ -f "$1" ] && grep -qF "$marker" "$1"; then
    echo "$1 already adds $install_dir to PATH"
    return
  fi
  mkdir -p "$(dirname "$1")"
  printf '\n%s\n%s\n' "$marker" "$2" >>"$1"
  echo "Added $install_dir to PATH in $1"
  changed=1
}

changed=0
if [ "$modify_path" = 1 ]; then
  posix_line="export PATH=\"$install_dir:\$PATH\""
  case "$(basename "${SHELL:-sh}")" in
    zsh) add_to_startup_file "${ZDOTDIR:-$HOME}/.zshrc" "$posix_line" ;;
    bash)
      add_to_startup_file "$HOME/.bashrc" "$posix_line"
      # Login shells (every macOS Terminal window) read .bash_profile, which
      # does not always source .bashrc.
      if [ "$os" = macos ] || [ -f "$HOME/.bash_profile" ]; then
        add_to_startup_file "$HOME/.bash_profile" "$posix_line"
      fi
      ;;
    fish)
      add_to_startup_file "${XDG_CONFIG_HOME:-$HOME/.config}/fish/conf.d/roxd.fish" \
        "fish_add_path --path \"$install_dir\""
      ;;
    *) add_to_startup_file "$HOME/.profile" "$posix_line" ;;
  esac
fi

case ":$PATH:" in
  *":$install_dir:"*) echo "Run: roxd" ;;
  *)
    if [ "$changed" = 1 ] || [ "$modify_path" = 1 ]; then
      echo "Open a new terminal, then run: roxd"
    else
      echo "$install_dir is not on your PATH; run: $install_dir/roxd"
    fi
    ;;
esac
