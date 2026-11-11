---
type: C4 Component
title: Undo
status: stable
groma:
  id: queries-undo
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/undo.ts
  technology: SolidJS
description: Undo inside the signed-in client.
---

Undo/redo support for mutations.  @example 1. Wrap your app with the provider <MutationUndoProvider> <App /> </MutationUndoProvider>  2. Push an entry directly and bind side effects (toast, highlight, etc.) to its lifecycle hooks. const { pushUndo } = useMutationUndoContext(); co
