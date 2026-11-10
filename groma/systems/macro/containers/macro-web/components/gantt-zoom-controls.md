---
type: C4 Component
title: Web module
status: stable
groma:
  id: gantt-zoom-controls
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-zoom-controls.tsx
      symbol: GanttZoomControls
  technology: SolidJS
description: Part of the signed-in client
---

Compose beside Gantt.Chart so the controls stay fixed while the calendar scrolls.
