# Single local quality gate: format + lint + code rules, scoped to files you
# changed vs origin/main (merge-base, plus uncommitted and untracked work) so
# the output is exactly what is wrong with YOUR changes — legacy findings in
# untouched files never appear. Findings print as file:line with the rule id;
# ast-grep rule ids map to docs/development/style-guide.md (its `severity: error` rules fail
# the run, warnings/hints only print). oxlint's only error rule is
# typescript/no-floating-promises, so apps/web files are linted --type-aware.
#
#   just check        fast: rustfmt + cargo shear + biome + oxlint + ast-grep + PII   (~seconds)
#   just check full   also runs tsc + clippy                      (~minutes)
#
# Override the diff base with CHECK_BASE=<ref> (useful in shallow clones,
# where no origin/main merge-base exists and the scope silently narrows to
# uncommitted work only).
check *ARGS:
    #!/usr/bin/env bash
    set -uo pipefail
    cd {{ justfile_directory() }}

    base="${CHECK_BASE:-$(git merge-base HEAD origin/main 2>/dev/null || true)}"
    if [ -z "$base" ]; then
      echo "note: no merge-base with origin/main (shallow clone?); checking uncommitted changes only."
      echo "      Set CHECK_BASE=<ref> to widen."
    fi
    changed=$({ [ -n "$base" ] && git diff --name-only "$base"; \
                git diff --name-only HEAD; \
                git ls-files --others --exclude-standard; } | sort -u \
              | while IFS= read -r f; do [ -f "$f" ] && printf '%s\n' "$f"; done)
    if [ -z "$changed" ]; then echo "no changed files — nothing to check"; exit 0; fi

    rs=$(grep -E '^(crates|services|tooling)/.*\.rs$' <<<"$changed" || true)
    manifests=$(grep -E '(^|/)Cargo\.toml$' <<<"$changed" || true)
    # Match the SDK and collaboration Biome configs: preserve generator output verbatim.
    js=$(grep -E '^(apps/(web|marketing)|packages|services/(analytics-proxy|ai-editing-worker|lexical-service|websocket-service))/.*\.(ts|tsx)$' <<<"$changed" | grep -Ev '^packages/(sdk/generated|collaboration/src/sync-service/generated)/' || true)
    sg=$(grep -E '^(apps|crates|packages|services|tooling)/.*\.(rs|ts|tsx|plist)$' <<<"$changed" || true)

    fail=0
    if [ -n "$rs" ]; then
      echo "── cargo fmt (root workspace)"
      cargo fmt --check \
        || { echo "   fix: cargo fmt"; fail=1; }
    fi
    if [ -n "$rs$manifests" ]; then
      echo "── cargo shear (unused dependencies)"
      cargo shear \
        || { echo "   fix: cargo shear --fix, or list a side-effect dependency in [package.metadata.cargo-shear] ignored"; fail=1; }
    fi
    if [ -n "$js" ]; then
      # The SDK has its own Biome config and version. Running its files from
      # apps/web applies web formatting rules that contradict the SDK's formatter.
      # Absolute paths preserve literal path characters across both roots.
      js_paths=()
      web_paths=()
      sdk_paths=()
      while IFS= read -r f; do
        js_paths+=("$PWD/$f")
        if [[ "$f" == packages/sdk/* ]]; then
          sdk_paths+=("$PWD/$f")
        else
          web_paths+=("$PWD/$f")
        fi
      done <<<"$js"
      echo "── biome (changed JS/TS format + lint, same flags as CI)"
      if [ "${#web_paths[@]}" -gt 0 ]; then
        (\cd apps/web && bunx --bun @biomejs/biome ci --colors=off --no-errors-on-unmatched \
            --error-on-warnings "${web_paths[@]}") \
          || { echo "   fix: bun run fix, then re-check"; fail=1; }
      fi
      if [ "${#sdk_paths[@]}" -gt 0 ]; then
        if [ ! -x packages/sdk/node_modules/.bin/biome ]; then
          echo "   install SDK tooling: (\cd packages/sdk && bun install --frozen-lockfile)"
          fail=1
        else
          (\cd packages/sdk && ./node_modules/.bin/biome ci --colors=off --no-errors-on-unmatched \
              --error-on-warnings "${sdk_paths[@]}") \
            || { echo "   fix: (\cd packages/sdk && bun run format && bun run lint), then re-check"; fail=1; }
        fi
      fi
      # Only apps/web is linted --type-aware: tsgolint rejects apps/marketing's
      # tsconfig.
      ox_web_paths=()
      ox_other_paths=()
      while IFS= read -r f; do
        if [[ "$f" == apps/web/* ]]; then
          ox_web_paths+=("$PWD/$f")
        else
          ox_other_paths+=("$PWD/$f")
        fi
      done <<<"$js"
      # A generated-client-only web diff can be entirely ignored by oxlint.
      echo "── oxlint (docs/development/style-guide.md FE-12, FE-13)"
      if [ "${#ox_web_paths[@]}" -gt 0 ]; then
        (\cd apps/web && ../../node_modules/.bin/oxlint --type-aware --no-error-on-unmatched-pattern "${ox_web_paths[@]}") \
          || { echo "   fix: await, return, or .catch the promise; void only if it cannot reject (FE-13)"; fail=1; }
      fi
      if [ "${#ox_other_paths[@]}" -gt 0 ]; then
        (\cd apps/web && ../../node_modules/.bin/oxlint --no-error-on-unmatched-pattern "${ox_other_paths[@]}") || fail=1
      fi
    fi
    if grep -qx 'static_assets/schema.graphql' <<<"$changed"; then
      echo "── GraphQL schema compatibility (docs/guides/add-graphql-field.md step 8)"
      cargo x graphql-schema-compat --base "${base:-origin/main}" || fail=1
    fi
    if [ -n "$sg" ]; then
      echo "── ast-grep code rules (rule ids map to docs/development/style-guide.md)"
      bunx --yes @ast-grep/cli@0.44.1 scan --report-style=short $sg || fail=1
    fi
    echo "── PII scan (added lines vs merge-base)"
    python3 tooling/pii/scan.py --changed --skip-gitleaks || fail=1
    if grep -q '^tooling/pii/' <<<"$changed"; then
      echo "── PII scanner tests"
      ( \cd tooling/pii && python3 -m unittest test_scan.py ) || fail=1
    fi
    if [ "{{ ARGS }}" = "full" ]; then
      if [ -n "$js" ]; then
        echo "── tsc (apps/web)"
        # apps/web is large enough that Node's default heap aborts tsc with
        # SIGABRT (exit 134). 16 GiB is the smallest value verified to finish.
        NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=16384}" bun run check || fail=1
      fi
      if [ -n "$rs" ]; then
        echo "── clippy (root workspace)"
        (RUSTFLAGS="-Dwarnings -Dclippy::disallowed_methods" \
            RUSTDOCFLAGS=-Dwarnings SQLX_OFFLINE=true cargo clippy --workspace --all-features \
            --exclude sync_service && \
         RUSTFLAGS="-Dwarnings -Dclippy::disallowed_methods" \
            RUSTDOCFLAGS=-Dwarnings SQLX_OFFLINE=true cargo clippy -p sync_service -- \
            -A clippy::unnecessary_map_or -A clippy::collapsible_if) || fail=1
      fi
    fi

    echo
    if [ "$fail" -ne 0 ]; then echo "FAIL"; exit 1; fi
    echo "OK"

# Reproduces the required PR checks locally, in CI's order, stopping at the
# first failure. Use it before pushing anything broad or mechanical (dependency
# bumps, upstream merges, renames): `just check` is diff-scoped, so a green
# `just check full` still says nothing about crates and files you did not touch,
# while CI lints the whole workspace.
#
#   just ci          check + clippy matrix + cargo deny + generated workflows + ast-grep
#   just ci tests    also the Rust test suite (needs the test databases:
#                    `just setup_test_envs && just initialize_dbs && just setup_test_template`)
#
# Unlike `check`, this does not accumulate failures: the first red step is the
# one CI would report, and stopping there keeps the log readable.
#
# Re-run CI's required PR checks locally; the first failure stops the run.
ci *ARGS:
    #!/usr/bin/env bash
    set -euo pipefail
    cd {{ justfile_directory() }}

    case "{{ ARGS }}" in
      ""|tests) ;;
      *) echo "usage: just ci [tests]" >&2; exit 2 ;;
    esac

    echo "── check full (fmt, shear, biome, oxlint, ast-grep, PII, tsc, clippy)"
    # Still worth running first: it covers the non-Rust gates CI runs as separate
    # jobs (biome/oxlint/tsc/PII) and fails faster on a trivial formatting miss.
    just check full

    echo "── clippy matrix (workspace, sync_service, soup without outbound)"
    # The four invocations CI's clippy job runs for the `all` package selection
    # live in tooling/just/rust.just, so local and CI flags cannot drift.
    just clippy

    echo "── cargo deny check"
    cargo deny check

    echo "── generated workflows and kafka topics are up to date"
    cargo run --manifest-path tooling/xtask/Cargo.toml -- workflows --check

    echo "── ast-grep (whole repo, no diff filter — same as CI)"
    bunx --yes @ast-grep/cli@0.44.1 scan

    if [ "{{ ARGS }}" = "tests" ]; then
      echo "── cargo nextest (workspace, sync_service excluded)"
      # CI's own test script, so the flags cannot drift: --all-features,
      # --no-tests=pass, 32 test threads, no debug info. RUST_PACKAGES=all is the
      # whole-workspace selection. Unlike the clippy job, CI compiles queries
      # against live Postgres here, so SQLX_OFFLINE must stay unset.
      # `-C link-arg=-fuse-ld=mold` from CI is Linux-only and is dropped.
      RUST_PACKAGES=all \
        NEXTEST_TEST_THREADS="${NEXTEST_TEST_THREADS:-32}" \
        CARGO_PROFILE_DEV_DEBUG=0 CARGO_PROFILE_TEST_DEBUG=0 \
        bash tooling/xtask/crates/xtask_workflows/src/workflows/scripts/run_tests.sh
    fi

    echo
    if [ "{{ ARGS }}" = "tests" ]; then
      echo "CI checks OK (including the Rust test suite)"
    else
      echo "CI checks OK (Rust test suite skipped — run 'just ci tests')"
    fi

#   just pr-privacy                                  commits since origin/main
#   PR_TITLE="fix(x): ..." just pr-privacy body.md   plus the PR title and body
#
# The same script CI's PR Privacy Check runs; the rule is the Privacy section
# of .agents/skills/git/SKILL.md.
# Scan branch commits (and a PR title and body) for personal or support details.
pr-privacy BODY="":
    @cd {{ justfile_directory() }} && PR_BODY_FILE="{{ BODY }}" \
      bash tooling/xtask/crates/xtask_workflows/src/workflows/scripts/pr_privacy_check.sh
