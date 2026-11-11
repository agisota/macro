---
type: C4 Component
title: Panes
status: stable
groma:
  id: panes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/split-router/panes/panes.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/panes/diff.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/panes/layout-tree.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/panes/memory-store.ts
      symbol: createMemoryPaneStore
    - scanner: typescript
      file: apps/web/src/lib/split-router/panes/types.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/panes/history.ts
  technology: SolidJS
  group: Split layout
description: 'Where a pane placed at `insertAt` among `decided` goes in `current`: after the same pane as before, behind panes opened since, so concurrent opens keep their or'
---

Where a pane placed at `insertAt` among `decided` goes in `current`: after the same pane as before, behind panes opened since, so concurrent opens keep their order.
