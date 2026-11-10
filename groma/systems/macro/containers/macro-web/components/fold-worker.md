---
type: C4 Component
title: Web module
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
description: Part of the signed-in client
---

<reference lib="webworker" />
