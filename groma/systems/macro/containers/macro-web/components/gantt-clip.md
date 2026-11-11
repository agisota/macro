---
type: C4 Component
title: Gantt clip
status: stable
groma:
  id: gantt-clip
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-clip.tsx
  technology: SolidJS
description: Gantt clip inside the signed-in client.
---

The transformed parent owns positioning; native sticky clipping excludes the label column.
