---
type: C4 Component
title: Checkboxes
status: stable
groma:
  id: checkboxes
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/checkboxes.ts
  technology: TypeScript
  group: Spreadsheet engine
description: Shared package spreadsheet
---

Whether a checkbox cell showing this text is checked: TRUE is, FALSE and blank are not. Any other value is shown as text, as Excel shows it.
