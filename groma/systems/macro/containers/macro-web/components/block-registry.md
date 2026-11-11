---
type: C4 Component
title: Block registry
status: stable
groma:
  id: block-registry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/constants/block-registry.ts
  technology: SolidJS
  group: Workspace core
description: Block types accepted by the application
---

Block types accepted by the application. Keep this module free of BlockLoader imports.
