---
type: C4 Component
title: Push registry
status: stable
groma:
  id: push-registry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/activity/push-registry.ts
  technology: SolidJS
  group: Data queries
description: Null means every mounted activity query needs a fresh authorized read
---

Null means every mounted activity query needs a fresh authorized read.
