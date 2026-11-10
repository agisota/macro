---
type: C4 Component
title: Web module
status: stable
groma:
  id: stickyvirtualizer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/StickyVirtualizer.tsx
      symbol: StickyVirtualizer
  technology: SolidJS
description: Part of the signed-in client
---

Persistent viewport chrome, distinct from the in-flow startMargin.
