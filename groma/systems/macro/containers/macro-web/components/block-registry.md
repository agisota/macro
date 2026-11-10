---
type: C4 Component
title: Web module
status: stable
groma:
  id: block-registry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/constants/block-registry.ts
  technology: SolidJS
description: Part of the signed-in client
---

Block types accepted by the application. Keep this module free of BlockLoader imports.
