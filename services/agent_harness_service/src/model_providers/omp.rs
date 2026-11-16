//! OMP execution environment, beside Cursor (`cursor.rs`) and macrod (`macrod.rs`).
//!
//! The junction is this directory. The module is not constructed from `main.rs`,
//! so the process's live environment list stays Cursor, macrod, and the
//! in-memory catalog. Nothing here embeds the `omp` binary: a machine launches
//! the `omp` already on its `PATH`, the same way macrod launches other external
//! ACP agents (`crates/coding_agent_worker/src/tui/agent_catalog/omp.rs`).

/// Command a person already installed. Not a path inside this crate.
pub const COMMAND: &str = "omp";

/// ACP arguments. Matches the macrod catalog preset, not a bundled payload.
pub const ARGS: &[&str] = &["acp"];

/// Second bot: the in-process agent, not the sandbox bot `@coder`.
///
/// Handle `macro-new`, mention `@macro`, id `MACRO_NEW_BOT_ID`. Display name
/// is already `Rox` (`PRODUCT_DISPLAY_NAME`). The handle is the rebrand entry.
/// Not applied in this crate.
pub const REBRAND_SECOND_BOT: (&str, &str) = ("macro-new", "rox");

/// Plan only. `DEFAULT_LOCAL_TAG` and `AGENT_HARNESS_GHCR_IMAGE` stay as they are.
pub const ROX_SNAPSHOT_PLAN: &str = "rox-agent-harness";
pub const ROX_GHCR_PLAN: &str = "ghcr.io/rox-one/rox-agent-harness";

/// What macrod no longer reads. The file itself is not deleted here.
///
/// The daemon loads `~/.macrod/macrod.toml`. A file that still has `[identity]`
/// (or `scope` under `[credentials]`) fails to load. Name, access, and
/// permission bypass are set on Settings → Agents → Runtimes. `~/.macro/macrod.toml`
/// is not that file.
pub const STALE_MACROD_SECTION: &str = "[identity]";

/// External OMP launch. No model catalog and no copied binary.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct OmpRuntime;

impl OmpRuntime {
    /// Build the adapter. It does not open a socket or spawn a process.
    pub const fn new() -> Self {
        Self
    }

    /// Program name looked up on `PATH`.
    pub const fn command(self) -> &'static str {
        COMMAND
    }

    /// Arguments passed to that program.
    pub const fn args(self) -> &'static [&'static str] {
        ARGS
    }
}
