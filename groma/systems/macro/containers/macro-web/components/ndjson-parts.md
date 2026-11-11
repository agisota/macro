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
  group: Workspace core
description: Ndjson parts in Workspace core.
---

File apps/web/src/lib/workers/slack-import/ndjson-parts.ts. It belongs to Workspace core, not a separate application.
