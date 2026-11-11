---
type: C4 Component
title: Table storage
status: stable
groma:
  id: table-storage
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/table-storage.ts
  technology: TypeScript
  group: Spreadsheet engine
description: 'A stored table entry: its key holds the sheet and table ids, its value the table without its id'
---

A stored table entry: its key holds the sheet and table ids, its value the table without its id.
