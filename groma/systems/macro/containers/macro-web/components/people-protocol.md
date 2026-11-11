---
type: C4 Component
title: People protocol
status: stable
groma:
  id: people-protocol
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/worker.ts
      symbol: executePeopleRequest
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/generated.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/sync-protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/sync.ts
      symbol: captureContactWriteScope
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/sql-protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/host.ts
  technology: SolidJS
  group: GraphQL cache
description: Protocol in GraphQL cache.
---

File apps/web/src/lib/graphql-cache/people/protocol.ts. It belongs to GraphQL cache, not a separate application.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/graphql-cache/people/host.ts](../../../../../../apps/web/src/lib/graphql-cache/people/host.ts) | [apps/web/src/lib/graphql-cache/host/tauri-host.ts](../../../../../../apps/web/src/lib/graphql-cache/host/tauri-host.ts) | Invokes supplied callbacks: context, readSql, reconcile, resolveReferences, search, snapshot, update | typescript |
| [apps/web/src/lib/graphql-cache/people/host.ts](../../../../../../apps/web/src/lib/graphql-cache/people/host.ts) | [apps/web/src/lib/graphql-cache/host/worker-host.ts](../../../../../../apps/web/src/lib/graphql-cache/host/worker-host.ts) | Invokes supplied callbacks: context, readSql, reconcile, resolveReferences, search, snapshot, update | typescript |
