---
type: C4 Component
title: Large undo
status: stable
groma:
  id: large-undo
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/browser-test/large-undo.tsx
  technology: SolidJS
description: Large undo inside the signed-in client.
---

The collaborative markdown editor (`CollabProvider`, sync engine, Loro undo manager) over a large document and a sync source that accepts every update locally, so undo can be timed without a backend.
