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
  group: GraphQL cache
description: Resolves the current gate without constructing a browser cache resource
---

Resolves the current gate without constructing a browser cache resource.
