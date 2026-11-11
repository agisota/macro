---
type: C4 Component
title: Cross tab bus
status: stable
groma:
  id: cross-tab-bus
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/cross-tab/cross-tab-bus.ts
    - scanner: typescript
      file: apps/web/src/lib/core/cross-tab/tab-leader.ts
      symbol: createTabLeaderSignal
  technology: SolidJS
description: Cross tab bus inside the signed-in client.
---

Minimal cross-tab message bus: BroadcastChannel is the primary transport, with a localStorage `storage` event as fallback for embedded browsers where BroadcastChannel is missing or unreliable.  This is fan-out only — every subscribing tab sees every message. For a long-lived "exa
