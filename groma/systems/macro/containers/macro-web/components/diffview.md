---
type: C4 Component
title: DiffView
status: stable
groma:
  id: diffview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/DiffView.tsx
      symbol: DiffView
  technology: SolidJS
  group: Diffs
description: A stack of file diffs from one patch
---

A stack of file diffs from one patch. `Root` pairs the host's files with the patch and holds the view's state; a list renderer (`Stack`) draws the files, and the host composes each file's header and whatever hangs under its lines. Toolbar parts (`CollapseAll`, `StyleToggle`) go wherever the host puts them inside `Root`.
