//! Concrete outbound adapters for fresh model discovery.

mod access;
mod cursor;
mod in_memory;
mod known;
mod roxd;

pub use access::VisibleHarnessAccess;
pub use cursor::CursorModels;
pub use in_memory::InMemoryModels;
pub use known::PgKnownModels;
pub use roxd::RoxdModels;
pub(crate) use roxd::ModelProbeEvent;
