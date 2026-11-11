---
type: C4 Component
title: View shell layout
status: stable
groma:
  id: view-shell-layout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/view-shell-layout.ts
  technology: SolidJS
  group: View shell
description: Whether automatic container resizing should preserve the user-resized width (or `width` before resizing)
---

Whether automatic container resizing should preserve the user-resized width (or `width` before resizing). Set to false with a main `preferredWidth` to let the aside yield first.
