---
type: C4 Component
title: Workbook structure
status: stable
groma:
  id: workbook-structure
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/workbook-structure.ts
  technology: TypeScript
  group: Spreadsheet engine
description: Shared package spreadsheet
---

Trim partially deleted ranges before IronCalc turns a deleted endpoint into #REF.
