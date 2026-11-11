---
type: C4 Component
title: Vertical insertion
status: stable
groma:
  id: vertical-insertion
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/vertical-insertion.ts
      symbol: verticalInsertion
  technology: SolidJS
description: Vertical insertion inside the signed-in client.
---

`horizontalInsertion` turned on its side: where a dragged item lands in a top-to-bottom column, `boundary` being the y coordinate it lands on.
