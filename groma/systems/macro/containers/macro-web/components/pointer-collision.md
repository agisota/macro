---
type: C4 Component
title: Web module
status: stable
groma:
  id: pointer-collision
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/pointer-collision.ts
      symbol: createPointerCollisionDetector
  technology: SolidJS
description: Part of the signed-in client
---

Hit-test visible DOM nodes so scrolling, clipping and layout changes are honored.
