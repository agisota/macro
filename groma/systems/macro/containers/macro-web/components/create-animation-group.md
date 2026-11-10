---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-animation-group
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/utils/create-animation-group.ts
  technology: SolidJS
description: Part of the signed-in client
---

One interruptible WAAPI group. Callers capture keyframes before starting a replacement and own presence, geometry, and disposal policy.
