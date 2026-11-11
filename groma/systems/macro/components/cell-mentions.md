---
type: C4 Component
title: Cell mentions
status: stable
groma:
  id: cell-mentions
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/cell-mentions.ts
  technology: TypeScript
  group: Spreadsheet engine
description: Shared package spreadsheet
---

The existing Macro mention encoding; ordinary cell text is never Markdown.
