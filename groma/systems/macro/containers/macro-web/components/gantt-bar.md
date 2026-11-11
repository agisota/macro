---
type: C4 Component
title: Gantt bar
status: stable
groma:
  id: gantt-bar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-bar.tsx
      symbol: GanttBar
  technology: SolidJS
  group: Gantt
description: Draws `start` and `end` as exact instants rather than whole days
---

Draws `start` and `end` as exact instants rather than whole days. A
