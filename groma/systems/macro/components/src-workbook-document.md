---
type: C4 Component
title: Workbook document
status: stable
groma:
  id: src-workbook-document
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/workbook-document.ts
  technology: TypeScript
  group: Spreadsheet engine
description: Workbook document in Spreadsheet engine.
---

File packages/spreadsheet/src/workbook-document.ts. It belongs to Spreadsheet engine, not a separate application.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/spreadsheet/src/workbook-document.ts](../../../../packages/spreadsheet/src/workbook-document.ts) | [apps/web/src/features/block-spreadsheet/core/yield-to-page.ts](../../../../apps/web/src/features/block-spreadsheet/core/yield-to-page.ts) | Invokes supplied callback: pause | typescript |
| [packages/spreadsheet/src/workbook-document.ts](../../../../packages/spreadsheet/src/workbook-document.ts) | [apps/web/src/features/block-spreadsheet/views/UploadedWorkbook.tsx](../../../../apps/web/src/features/block-spreadsheet/views/UploadedWorkbook.tsx) | Invokes supplied callback: check | typescript |
