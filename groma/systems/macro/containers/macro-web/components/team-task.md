---
type: C4 Component
title: Web module
status: stable
groma:
  id: team-task
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/team-task.ts
      symbol: useTeamTaskQuery
  technology: SolidJS
description: Part of the signed-in client
---

Cached callbacks outlive the caller; only the resolved slug enters them.
