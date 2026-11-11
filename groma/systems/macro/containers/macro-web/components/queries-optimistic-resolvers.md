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
description: Optimistic resolvers inside the signed-in client.
---

Local mutation semantics. Only predicted fields enter the optimistic layer.
