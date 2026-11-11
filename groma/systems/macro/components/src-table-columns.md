---
type: C4 Component
title: Table columns
status: stable
groma:
  id: src-table-columns
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/table-columns.ts
  technology: TypeScript
  group: Spreadsheet engine
description: Shared package spreadsheet
---

Library code in packages/spreadsheet. Not a separately deployed service.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/spreadsheet/src/table-columns.ts](../../../../packages/spreadsheet/src/table-columns.ts) | [apps/web/src/features/block-spreadsheet/primitives/create-table-actions.ts](../../../../apps/web/src/features/block-spreadsheet/primitives/create-table-actions.ts) | Invokes supplied callback: display | typescript |
