---
type: C4 Component
title: Web module
status: stable
groma:
  id: lib-graphql-cache-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/index.ts
  technology: SolidJS
description: Part of the signed-in client
---

Normalized GraphQL cache — JS glue. Design doc: apps/web/docs/graphql-normalized-cache-plan.md  The reactive document query, `createLiveQuery`, is imported from `./solid/create-live-query`; it is not re-exported here.
