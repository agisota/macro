---
type: C4 Component
title: Create size breakpoints
status: stable
groma:
  id: create-size-breakpoints
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/utils/create-size-breakpoints.ts
  technology: SolidJS
  group: Workspace core
description: Inclusive size range
---

Inclusive size range. At least one bound is required. - `max` alone — size ≤ max (same as the number shorthand) - `min` alone — size ≥ min - both — min ≤ size ≤ max
