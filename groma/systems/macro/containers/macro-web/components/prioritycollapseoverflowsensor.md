---
type: C4 Component
title: PriorityCollapseOverflowSensor
status: stable
groma:
  id: prioritycollapseoverflowsensor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/priority-collapse/PriorityCollapseOverflowSensor.tsx
  technology: SolidJS
description: PriorityCollapseOverflowSensor inside the signed-in client.
---

Collapses only after every real collapse item has already given up its space.
