---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-distance-pointer-sensor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-distance-pointer-sensor.ts
      symbol: createDistancePointerSensor
  technology: SolidJS
description: Part of the signed-in client
---

The stock pointer sensor activates after 250ms or 10px. This one has no timer.
