---
type: C4 Component
title: Web module
status: stable
groma:
  id: gantt-header
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-header.tsx
      symbol: GanttHeader
  technology: SolidJS
description: Part of the signed-in client
---

The drawer starts below the header; reserve only its toggle in the timeline band.
