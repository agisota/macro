---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-urql-infinite-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-urql-infinite-query.ts
      symbol: createUrqlInfiniteQuery
  technology: SolidJS
description: Part of the signed-in client
---

Creates a live, paginated Solid binding over an urql infinite observer.
