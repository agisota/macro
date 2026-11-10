---
type: C4 Component
title: Web module
status: stable
groma:
  id: rollout-observability
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/rollout-observability.ts
      symbol: recordBrowserTursoCacheNavigation
  technology: SolidJS
description: Part of the signed-in client
---

Records the navigation control/treatment point without starting cache I/O.
