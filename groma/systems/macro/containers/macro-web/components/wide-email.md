---
type: C4 Component
title: Wide email
status: stable
groma:
  id: wide-email
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/icon/wide-email.tsx
      symbol: AnimatedEmailIcon
  technology: SolidJS
description: Wide email inside the signed-in client.
---

All coordinates are stroke-centers (inset from the visual edges by half the stroke). The body is two C-shaped strokes that meet at the left/right edge midpoints: BODY_A = upper half (rounds the top-left + top-right corners) BODY_B = lower half (rounds the bottom-left + bottom-rig
