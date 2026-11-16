//! Concrete outbound adapters for fresh model discovery.

mod access;
mod cursor;
mod in_memory;
mod known;
mod roxd;
// Present, not re-exported. `lib.rs` still builds Cursor, roxd, and the
// in-memory catalog only, so a running app does not gain an OMP row.
#[allow(dead_code)]
mod omp;

pub use access::VisibleHarnessAccess;
pub use cursor::CursorModels;
pub use in_memory::InMemoryModels;
pub use known::PgKnownModels;
pub use roxd::RoxdModels;
pub(crate) use roxd::ModelProbeEvent;
