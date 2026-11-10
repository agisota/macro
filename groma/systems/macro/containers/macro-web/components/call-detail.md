---
type: C4 Component
title: Calls view
status: stable
groma:
  id: call-detail
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/calls-view/views/call-detail.tsx
      symbol: CallsCallDetail
  technology: SolidJS
  group: Calls
description: Call detail content and hosted Calls navigation.
---

`callsHostedContent` turns a `call` content id into a `view-calls` / `calls-call` pane route. `CallsCallDetail` lazy-loads from `calls-view/views/call-detail` (`lazy-route-views.ts:22-24`). The Calls list route does not: `CallsRouteView` lazy-loads from `next-soup/route-views` (`lazy-route-views.ts:86-88`). `next-soup/utils.ts` imports `callsHostedContent` (`next-soup/utils.ts:16`).
