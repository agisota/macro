---
type: C4 Component
title: Noop host
status: stable
groma:
  id: noop-host
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/noop-host.ts
      symbol: createNoopCacheHost
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/read-availability.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/navigation-error.ts
      symbol: CacheNavigationError
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/worker-host.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/tauri-host.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/types.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/worker-host.integration-helpers.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/host/retirable-host.ts
  technology: SolidJS
  group: GraphQL cache
description: CacheHost used when the platform cannot run the shared cache engine, or after a page stops using it
---

CacheHost used when the platform cannot run the shared cache engine, or after a page stops using it. It never stores data. Its disabled marker makes the exchange bypass optimistic persistence and forward mutations directly.
