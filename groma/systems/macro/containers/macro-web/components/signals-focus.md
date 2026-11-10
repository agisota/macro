---
type: C4 Component
title: Web module
status: stable
groma:
  id: signals-focus
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/signals/focus.ts
  technology: SolidJS
description: Part of the signed-in client
---

A listener passed `setDirty` itself would store the event, whose target keeps a removed view alive until the next focus change.
