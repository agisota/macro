---
type: C4 Component
title: Sheet rules
status: stable
groma:
  id: sheet-rules
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/sheet-rules.ts
  technology: TypeScript
  group: Spreadsheet engine
description: 'Sheet rules imported from Excel and kept in sheet metadata: notes, data validation and conditional formatting'
---

Sheet rules imported from Excel and kept in sheet metadata: notes, data validation and conditional formatting. They use Excel's own vocabulary so that they export back unchanged.
