---
type: C4 Component
title: Create frame width
status: stable
groma:
  id: create-frame-width
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/create-frame-width.ts
      symbol: createFrameWidth
  technology: SolidJS
description: Create frame width inside the signed-in client.
---

Tracks an element's border-box width for layout decisions.  The first width is read when the element mounts so the initial layout is right. Later observer-reported widths apply in the next animation frame: they switch breakpoints that resize observed descendants, and doing that d
