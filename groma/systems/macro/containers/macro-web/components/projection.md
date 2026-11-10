---
type: C4 Component
title: Web module
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
description: Part of the signed-in client
---

Gateway push sent when a projection materialization finishes (or errors). Mirrors `ProjectionStateResponse` plus the routing discriminators.
