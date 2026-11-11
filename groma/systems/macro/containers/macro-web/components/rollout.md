---
type: C4 Component
title: Rollout
status: stable
groma:
  id: rollout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/rollout.ts
      symbol: getBrowserTursoCacheRolloutDecision
  technology: SolidJS
description: Rollout inside the signed-in client.
---

Resolves the current gate without constructing a browser cache resource.
