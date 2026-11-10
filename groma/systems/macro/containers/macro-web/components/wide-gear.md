---
type: C4 Component
title: Web module
status: stable
groma:
  id: wide-gear
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/icon/wide-gear.tsx
      symbol: AnimatedGearIcon
  technology: SolidJS
description: Part of the signed-in client
---

Gear icon from Asset 181.svg. On hover: rotates 45° with spring easing, snaps back instantly on mouse leave.
