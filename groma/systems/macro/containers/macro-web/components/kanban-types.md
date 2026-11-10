---
type: C4 Component
title: Web module
status: stable
groma:
  id: kanban-types
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/kanban/kanban-types.ts
  technology: SolidJS
description: Part of the signed-in client
---

A column change leaves card order to the caller (for example, a sorted view).
