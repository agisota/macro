---
type: C4 Component
title: Sheet references
status: stable
groma:
  id: src-sheet-references
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/sheet-references.ts
  technology: TypeScript
  group: Spreadsheet engine
description: Lowercase sheet names a formula qualifies references with
---

Lowercase sheet names a formula qualifies references with. A 3-D range such as `Jan:Dec!A1` may include any sheet, so it reports `any`. Names in string literals are ordinary text, never sheet references.
