---
type: C4 Component
title: Web module
status: stable
groma:
  id: diffcounts
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/DiffCounts.tsx
      symbol: DiffCounts
  technology: SolidJS
description: Part of the signed-in client
---

Added and deleted line totals, hidden when both are zero.
