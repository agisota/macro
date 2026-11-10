---
type: C4 Component
title: Web module
status: stable
groma:
  id: gantt-bar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-bar.tsx
      symbol: GanttBar
  technology: SolidJS
description: Part of the signed-in client
---

Draws `start` and `end` as exact instants rather than whole days. A timed bar moves by whole days at week and month zoom, by hours at day zoom and by quarter hours at hours zoom.
