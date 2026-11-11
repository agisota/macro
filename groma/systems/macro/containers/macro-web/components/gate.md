---
type: C4 Component
title: Gate
status: stable
groma:
  id: gate
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/gate.ts
      symbol: queryReadyGate
  technology: SolidJS
description: Gate inside the signed-in client.
---

A query surface built on a TanStack query, such as a feature contract.
