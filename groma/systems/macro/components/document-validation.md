---
type: C4 Component
title: spreadsheet
status: stable
groma:
  id: document-validation
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/document-validation.ts
      symbol: validateSpreadsheetDocument
  technology: TypeScript
description: Shared package spreadsheet
---

Library code in packages/spreadsheet. Not a separately deployed service.
