---
type: C4 Component
title: Fold.worker
status: stable
groma:
  id: fold-worker
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/agent-fold/fold.worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-fold/client.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-fold/message-id.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-fold/protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-fold/wasm-module.ts
  technology: SolidJS
  group: Workspace core
description: Fold.worker in Workspace core.
---

File apps/web/src/lib/core/agent-fold/fold.worker.ts. It belongs to Workspace core, not a separate application.

<reference lib="webworker" />
