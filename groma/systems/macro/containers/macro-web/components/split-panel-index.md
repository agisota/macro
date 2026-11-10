---
type: C4 Component
title: Index
status: stable
groma:
  id: split-panel-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/split-panel/index.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-panel/SplitPanel.tsx
  technology: SolidJS
description: Presentation-only frame for one split.  Children stay in the consumer's DOM order. The root provides only the vertical panel boundary; consumers decide which ch
---

Presentation-only frame for one split.  Children stay in the consumer's DOM order. The root provides only the vertical panel boundary; consumers decide which chrome exists and how each header or toolbar lays out its contents.
