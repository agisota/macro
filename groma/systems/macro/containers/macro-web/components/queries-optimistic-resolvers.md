---
type: C4 Component
title: Optimistic resolvers
status: stable
groma:
  id: queries-optimistic-resolvers
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/optimistic-resolvers.ts
      symbol: soupOptimisticResolvers
  technology: SolidJS
  group: Data queries
description: Local mutation semantics
---

Local mutation semantics. Only predicted fields enter the optimistic layer.
