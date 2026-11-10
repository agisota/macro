---
type: C4 Component
title: Block call
status: stable
groma:
  id: block-call-route-views
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-call/route-views.tsx
      symbol: CallDetailRouteView
  technology: SolidJS
description: '`call` block; description string is empty.'
---

Load returns missing when `ENABLE_CALLS` is off or the source is not DSS. It fetches the record through the call service client and primes the record query cache. `CallDetailRouteView` lazy-loads this feature's route views (`lazy-route-views.ts:17-19`). `Root.tsx` mounts `IncomingCallEvents` from `block-call/sidebar/incoming-calls` (`Root.tsx:13`, `Root.tsx:241`).
