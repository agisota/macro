---
type: C4 Component
title: Spreadsheet schema
status: stable
groma:
  id: src-spreadsheet-schema
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/spreadsheet-schema.ts
      symbol: SPREADSHEET_LORO_SCHEMA
  technology: TypeScript
  group: Spreadsheet engine
description: Shared package spreadsheet
---

Root maps have stable identities even when two peers first edit an empty cell concurrently. Separate properties also let formatting and value edits merge independently. Calculated values are deliberately never persisted.
