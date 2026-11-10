---
type: C4 Component
title: Block spreadsheet
status: stable
groma:
  id: generate-office-2016-charts
  parent: macro-web
  code:
    - scanner: python
      file: apps/web/src/features/block-spreadsheet/core/xlsx-fixtures/generate-office-2016-charts.py
  technology: SolidJS
description: Spreadsheet block and IronCalc evaluation.
---

The readme lists Excel-style formulas, selection, fill, tables, CSV/XLSX import, and collaboration. Calculation uses IronCalc, including a worker. Existing uploaded `.xlsx` files are not auto-converted; import is explicit. `drive-view` imports `useSpreadsheetAccess` from this feature (`drive-view/drive-view.tsx:2`). Drive routes expose spreadsheet comment params (`routes/routes.ts:340-341`).
