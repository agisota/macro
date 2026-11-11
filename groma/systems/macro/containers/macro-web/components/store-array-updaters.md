---
type: C4 Component
title: Store array updaters
status: stable
groma:
  id: store-array-updaters
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/signals/store-array-updaters.ts
  technology: SolidJS
  group: Workspace state
description: Creates an updater that appends a value only when it is not already present
---

Creates an updater that appends a value only when it is not already present. Pass it directly to a Solid signal setter or store path setter.  @example setState('items', addUnique(item));
