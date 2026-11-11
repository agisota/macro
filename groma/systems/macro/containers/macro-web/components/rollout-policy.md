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
description: Rollout policy inside the signed-in client.
---

Whether the caller must retain the existing native cache path.
