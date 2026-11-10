---
type: C4 Component
title: Web module
status: stable
groma:
  id: queries-optimistic-resolvers
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/optimistic-resolvers.ts
      symbol: soupOptimisticResolvers
  technology: SolidJS
description: Part of the signed-in client
---

Local mutation semantics. Only predicted fields enter the optimistic layer.
