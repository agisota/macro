---
type: C4 Component
title: Create natural time
status: stable
groma:
  id: create-natural-time
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/natural-time/create-natural-time.ts
    - scanner: typescript
      file: apps/web/src/lib/core/natural-time/wall-clock.ts
    - scanner: typescript
      file: apps/web/src/lib/core/natural-time/wasm-module.ts
  technology: SolidJS
description: Create natural time inside the signed-in client.
---

The natural_time reader as it loads. A failed load is tried again by the next caller.
