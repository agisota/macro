---
type: C4 Component
title: Block pr
status: stable
groma:
  id: block-pr-route-views
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-pr/route-views.tsx
      symbol: PrDetailRouteView
  technology: SolidJS
description: '`pr` block; diff stack stays lazy.'
---

The component is lazy so the Pierre/shiki diff stack stays out of the main chunk. Load requires a non-empty DSS id. Live tracking is off. `PrDetailRouteView` lazy-loads this feature's route views (`lazy-route-views.ts:34-36`). `agent-work` imports `parseGithubPrUrl` from here (`agent-work/core/work-item.ts:1`).
