---
type: C4 Component
title: Web module
status: stable
groma:
  id: rollout-policy
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/rollout-policy.ts
  technology: SolidJS
description: Part of the signed-in client
---

Whether the caller must retain the existing native cache path.
