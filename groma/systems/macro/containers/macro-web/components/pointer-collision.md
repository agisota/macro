---
type: C4 Component
title: Pointer collision
status: stable
groma:
  id: pointer-collision
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/pointer-collision.ts
      symbol: createPointerCollisionDetector
  technology: SolidJS
  group: App shell
description: Hit-test visible DOM nodes so scrolling, clipping and layout changes are honored
---

Hit-test visible DOM nodes so scrolling, clipping and layout changes are honored.
