---
type: C4 Component
title: Src simulate
status: stable
groma:
  id: simulate
  parent: macro
  code:
    - scanner: typescript
      file: packages/machine/src/simulate.ts
  technology: TypeScript
  group: State machine
description: Pure helpers for exercising a `MachineDef` as values
---

Pure helpers for exercising a `MachineDef` as values. No Solid, no owner, no timers — importable from any test or from `domain/` code.  These do not run scopes or `execute`. Events that a command would have produced in the runner (e.g. a restore succeeding) must be supplied explicitly in the event list; that is the point — the reducer is tested against what it would be told, not against how the world tells it.
