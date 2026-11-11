---
type: C4 Component
title: Ndjson parts
status: stable
groma:
  id: ndjson-parts
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/workers/slack-import/ndjson-parts.ts
    - scanner: typescript
      file: apps/web/src/lib/workers/slack-import/unzip-worker.ts
      symbol: installArchiveWorker
    - scanner: typescript
      file: apps/web/src/lib/workers/slack-import/worker-client.ts
    - scanner: typescript
      file: apps/web/src/lib/workers/slack-import/message-store.ts
    - scanner: typescript
      file: apps/web/src/lib/workers/slack-import/archive-reader.ts
  technology: SolidJS
description: Ndjson parts inside the signed-in client.
---

One bounded part plus the cursor's bounded page, never an array of parts/descriptors. Resuming the iterator is the consumer's acknowledgement; no prefetch runs during yield. The incremental manifest hash follows ConversationSeal::from_descriptors in Rust.
