---
type: C4 Component
title: Create infinite queries
status: stable
groma:
  id: create-infinite-queries
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/create-infinite-queries.ts
      symbol: createInfiniteQueries
  technology: SolidJS
  group: Data queries
description: Cached callbacks outlive the per-key root. They wrap only the caller's function values, never the config lookup or this helper's scope.
---

Cached callbacks outlive the per-key root. They wrap only the caller's function values, never the config lookup or this helper's scope.
