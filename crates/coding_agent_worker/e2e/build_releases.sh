#!/usr/bin/env bash
# Build roxd twice from this checkout, as two release tags, and package each
# the way the release workflow does: roxd-<tag>-<os>-<arch>.tar.gz plus its
# .sha256 (a .zip on Windows). A debug build is enough to exercise the
# updater.
#
#   build_releases.sh OUT_DIR V1_TAG V2_TAG
#
# TARGET builds for that triple (CI builds musl like the release workflow);
# CARGO_BUILD defaults to `cargo build`, e.g. `cargo zigbuild` for musl.
set -euo pipefail

out=$1
shift
mkdir -p "$out"
executable=roxd
case "$(uname -s)" in
  Linux) os=linux ;;
  Darwin) os=macos ;;
  MINGW* | MSYS* | CYGWIN*) os=windows executable=roxd.exe ;;
  *) echo "unsupported OS" >&2; exit 1 ;;
esac
case "$(uname -m)" in
  x86_64 | amd64) arch=x86_64 ;;
  arm64 | aarch64) arch=aarch64 ;;
esac
target_dir=${CARGO_TARGET_DIR:-target}

binary_dir="$target_dir/debug"
target_args=()
if [ -n "${TARGET:-}" ]; then
  target_args=(--target "$TARGET")
  binary_dir="$target_dir/$TARGET/debug"
fi
# shellcheck disable=SC2206 # a command and its subcommand, split on purpose
cargo_build=(${CARGO_BUILD:-cargo build})

for tag in "$@"; do
  ROXD_RELEASE_TAG="$tag" "${cargo_build[@]}" -p coding_agent_worker --bin roxd "${target_args[@]}"
  stage=$(mktemp -d)
  install -m 755 "$binary_dir/$executable" "$stage/$executable"
  "$stage/$executable" --version | grep -qF "$tag"
  if [ "$os" = windows ]; then
    archive="roxd-$tag-$os-$arch.zip"
    powershell.exe -NoProfile -NonInteractive -Command \
      "Compress-Archive -Path '$(cygpath -w "$stage/$executable")' -DestinationPath '$(cygpath -w "$out/$archive")' -Force"
  else
    archive="roxd-$tag-$os-$arch.tar.gz"
    tar -czf "$out/$archive" -C "$stage" "$executable"
  fi
  (
    cd "$out"
    if command -v sha256sum >/dev/null 2>&1; then sha256sum "$archive"; else shasum -a 256 "$archive"; fi >"$archive.sha256"
  )
  rm -rf "$stage"
  echo "packaged $out/$archive"
done
