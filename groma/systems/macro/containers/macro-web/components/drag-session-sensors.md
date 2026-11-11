---
type: C4 Component
title: Drag session sensors
status: stable
groma:
  id: drag-session-sensors
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/drag-session-sensors.tsx
      symbol: DragSessionSensors
  technology: SolidJS
description: Drag session sensors inside the signed-in client.
---

Pointer sensors plus what every drag surface needs around them: auto-scroll near the viewport's edges, Escape and window blur cancel, and drop targets measured again as the viewport scrolls.
