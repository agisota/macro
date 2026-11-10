---
type: C4 Component
title: Web module
status: stable
groma:
  id: prioritycollapseoverflowsensor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/priority-collapse/PriorityCollapseOverflowSensor.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Collapses only after every real collapse item has already given up its space.
