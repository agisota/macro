---
type: C4 Component
title: Focus
status: stable
groma:
  id: signals-focus
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/signals/focus.ts
  technology: SolidJS
  group: Workspace state
description: A listener passed `setDirty` itself would store the event, whose target keeps a removed view alive until the next focus change
---

A listener passed `setDirty` itself would store the event, whose target keeps a removed view alive until the next focus change.
