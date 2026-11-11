---
type: C4 Component
title: Views calls view
status: stable
groma:
  id: calls-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/calls-view/views/calls-view.tsx
      symbol: CallsView
    - scanner: typescript
      file: apps/web/src/features/calls-view/components/calls-header.tsx
      symbol: CallsHeader
    - scanner: typescript
      file: apps/web/src/features/calls-view/components/calls-sidebar.tsx
      symbol: CallsSidebar
    - scanner: typescript
      file: apps/web/src/features/calls-view/calls-hosted-content.ts
      symbol: callsHostedContent
    - scanner: typescript
      file: apps/web/src/features/calls-view/core/call-filters.ts
  technology: SolidJS
  group: Calls
description: Call detail content and hosted Calls navigation.
---

`callsHostedContent` turns a `call` content id into a `view-calls` / `calls-call` pane route. `CallsCallDetail` lazy-loads from `calls-view/views/call-detail` (`lazy-route-views.ts:22-24`). The Calls list route does not: `CallsRouteView` lazy-loads from `next-soup/route-views` (`lazy-route-views.ts:86-88`). `next-soup/utils.ts` imports `callsHostedContent` (`next-soup/utils.ts:16`).
