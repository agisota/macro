---
type: C4 Component
title: Web module
status: stable
groma:
  id: gate
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/gate.ts
      symbol: queryReadyGate
  technology: SolidJS
description: Part of the signed-in client
---

A query surface built on a TanStack query, such as a feature contract.
