---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-live-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/solid/create-live-query.ts
  technology: SolidJS
description: Part of the signed-in client
---

Reactive GraphQL reads have one default per data shape:  - A GraphQL document: `createLiveQuery` (this module). Cursor-paginated documents use `createUrqlInfiniteQuery` from `@app/lib/urql-solid`. - A Soup list: `createSoupLiveQuery` is the GraphQL source. Feature code reads it t
