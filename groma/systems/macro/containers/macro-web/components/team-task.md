---
type: C4 Component
title: Team task
status: stable
groma:
  id: team-task
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/team-task.ts
      symbol: useTeamTaskQuery
  technology: SolidJS
  group: Data queries
description: Cached callbacks outlive the caller; only the resolved slug enters them
---

Cached callbacks outlive the caller; only the resolved slug enters them.
