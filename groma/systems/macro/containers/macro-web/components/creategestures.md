---
type: C4 Component
title: CreateGestures
status: stable
groma:
  id: creategestures
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/createGestures.ts
      symbol: createGestures
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/createMomentum.ts
      symbol: createMomentum
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/Lightbox.tsx
      symbol: Lightbox
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/createZoomModel.ts
      symbol: createZoomModel
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/LightboxChrome.tsx
      symbol: LightboxChrome
    - scanner: typescript
      file: apps/web/src/lib/core/component/Lightbox/LightboxToolbar.tsx
      symbol: LightboxToolbar
  technology: SolidJS
description: CreateGestures inside the signed-in client.
---

Routes pointer input across the lightbox's three gesture systems: the zoompinch engine (pan/pinch while zoomed in), single-finger swipes (gallery nav + swipe-to-dismiss while zoomed out), and the inertial fling on release. Also wires desktop keyboard nav and mouse drag / click-to
