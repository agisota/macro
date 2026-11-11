---
type: C4 Component
title: Rollout policy
status: stable
groma:
  id: rollout-policy
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/rollout-policy.ts
  technology: SolidJS
  group: GraphQL cache
description: Whether the caller must retain the existing native cache path
---

Whether the caller must retain the existing native cache path.
