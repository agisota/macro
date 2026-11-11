---
type: C4 Component
title: Projection
status: stable
groma:
  id: projection
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/ai/projection.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/ai/createHomeRecommendations.ts
      symbol: createHomeRecommendations
    - scanner: typescript
      file: apps/web/src/lib/queries/ai/homeRecommendations.ts
  technology: SolidJS
  group: Data queries
description: Gateway push sent when a projection materialization finishes (or errors)
---

Gateway push sent when a projection materialization finishes (or errors). Mirrors `ProjectionStateResponse` plus the routing discriminators.
