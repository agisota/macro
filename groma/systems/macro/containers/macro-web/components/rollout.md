---
type: C4 Component
title: Web module
status: stable
groma:
  id: rollout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/rollout.ts
      symbol: getBrowserTursoCacheRolloutDecision
  technology: SolidJS
description: Part of the signed-in client
---

Resolves the current gate without constructing a browser cache resource.
