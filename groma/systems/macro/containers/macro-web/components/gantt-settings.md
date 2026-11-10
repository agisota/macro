---
type: C4 Component
title: Web module
status: stable
groma:
  id: gantt-settings
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-settings.tsx
      symbol: GanttSettings
  technology: SolidJS
description: Part of the signed-in client
---

Period changes zoom; grid settings only change calendar decoration, and hours zoom draws its own.
