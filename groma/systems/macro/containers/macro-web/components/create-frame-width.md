---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-frame-width
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/create-frame-width.ts
      symbol: createFrameWidth
  technology: SolidJS
description: Part of the signed-in client
---

Tracks an element's border-box width for layout decisions.  The first width is read when the element mounts so the initial layout is right. Later observer-reported widths apply in the next animation frame: they switch breakpoints that resize observed descendants, and doing that d
