---
type: C4 Component
title: Create urql infinite query
status: stable
groma:
  id: create-urql-infinite-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-urql-infinite-query.ts
      symbol: createUrqlInfiniteQuery
  technology: SolidJS
description: Create urql infinite query inside the signed-in client.
---

Creates a live, paginated Solid binding over an urql infinite observer.
