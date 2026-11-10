---
type: C4 Component
title: Web module
status: stable
groma:
  id: pierre-theme
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/pierre/theme.ts
    - scanner: typescript
      file: apps/web/src/components/diff-view/pierre/PierreFileDiff.tsx
      symbol: PierreFileDiff
  technology: SolidJS
description: Part of the signed-in client
---

What every Pierre diff in the app shares: Macro's light/dark state as a signal, and the CSS variables Pierre reads inside its shadow DOM.
