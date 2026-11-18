// `run()`'s future type is deep enough to need the library's recursion limit
// wherever it is awaited.
#![recursion_limit = "256"]

use macro_entrypoint::MacroEntrypoint;

/// Unoptimized builds of this service compile `run()` and its handlers into
/// futures deep enough to overflow a default 2 MiB worker stack while polling
/// (observed as `thread 'tokio-rt-worker' has overflowed its stack` on the
/// home feed and history endpoints). Worker threads get a stack that leaves
/// room for them; the pages are lazily committed, so the larger reservation
/// costs nothing at rest.
const TOKIO_WORKER_STACK_SIZE: usize = 32 * 1024 * 1024;

fn main() -> anyhow::Result<()> {
    tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .thread_stack_size(TOKIO_WORKER_STACK_SIZE)
        .build()?
        .block_on(async {
            let entrypoint = MacroEntrypoint::default().init();
            let result = document_storage_service::run().await;
            entrypoint.shutdown();
            result
        })
}
