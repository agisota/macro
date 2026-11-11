---
type: C4 Component
title: Make persisted state
status: stable
groma:
  id: make-persisted-state
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/persistence/make-persisted-state.ts
  technology: SolidJS
description: Make persisted state inside the signed-in client.
---

One persistence projection over a canonical state value.  `restore` merges this storage's owned fields onto the state restored so far. `write` receives the final canonical state and selects what to retain.
