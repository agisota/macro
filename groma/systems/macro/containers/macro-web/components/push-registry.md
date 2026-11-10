---
type: C4 Component
title: Web module
status: stable
groma:
  id: push-registry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/activity/push-registry.ts
  technology: SolidJS
description: Part of the signed-in client
---

Null means every mounted activity query needs a fresh authorized read.
