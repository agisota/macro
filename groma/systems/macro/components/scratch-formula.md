---
type: C4 Component
title: Scratch formula
status: stable
groma:
  id: scratch-formula
  parent: macro
  code:
    - scanner: typescript
      file: packages/spreadsheet/src/scratch-formula.ts
      symbol: qualifyScratchFormula
  technology: TypeScript
description: Shared package spreadsheet
---

Evaluate on a private sheet without occupying or overwriting a source cell. Token positions are Unicode scalar offsets, and may include leading space.
