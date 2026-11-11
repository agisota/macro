---
type: C4 Component
title: Create distance pointer sensor
status: stable
groma:
  id: create-distance-pointer-sensor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-distance-pointer-sensor.ts
      symbol: createDistancePointerSensor
  technology: SolidJS
description: Create distance pointer sensor inside the signed-in client.
---

The stock pointer sensor activates after 250ms or 10px. This one has no timer.
