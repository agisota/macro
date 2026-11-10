---
type: C4 Component
title: Web module
status: stable
groma:
  id: diffview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/DiffView.tsx
      symbol: DiffView
  technology: SolidJS
description: Part of the signed-in client
---

A stack of file diffs from one patch. `Root` pairs the host's files with the patch and holds the view's state; a list renderer (`Stack`) draws the files, and the host composes each file's header and whatever hangs under its lines. Toolbar parts (`CollapseAll`, `StyleToggle`) go w
