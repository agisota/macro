---
type: C4 Component
title: Web module
status: stable
groma:
  id: cache-coordinator-shared-worker
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/cache.coordinator.shared-worker.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/coordinator-handoff.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/cache.engine-worker.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/stale-databases.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/coordinator-protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/worker-core.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/effect-worker-transport.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/cache-coordinator-runtime.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/coordinator-takeover.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/cache-change-batch.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/startup.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/coordinator-core.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/coordinator-page-adapter.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/cache-engine-runtime.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/coordinator-router.ts
  technology: SolidJS
description: Part of the signed-in client
---

<reference lib="webworker" />
