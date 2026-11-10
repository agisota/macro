---
type: C4 Component
title: Web module
status: stable
groma:
  id: normalized-cache-exchange
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/normalized-cache-exchange.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/generated-selection.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/optimistic-authoring.typecheck.ts
      symbol: checkOptimisticMutationTypes
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/inspection.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/document-query-reader.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/optimistic-resolvers.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/subscription-cache-trace.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/external-writes.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/record-selection.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/mutation-queue-runner.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/network-revalidation-exchange.ts
      symbol: networkRevalidationExchange
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/query-patches.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/entity-resolvers.typecheck.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/mutation-queue-telemetry.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/prepare-optimistic.ts
      symbol: prepareOptimisticExchange
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/live-query.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/entity-resolvers.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/optimistic.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/query-shape.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/exchange/deferred-query-rereads.ts
      symbol: createDeferredQueryRereads
  technology: SolidJS
description: Part of the signed-in client
---

urql exchange backed by the normalized wasm cache (via a `CacheHost`).  Differences from `@urql/exchange-graphcache`: - cache reads are **async** (the cache is disk-backed, possibly in another worker/process). Cache-first misses enter the network queue after reading; cache-and-ne
