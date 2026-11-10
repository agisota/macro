---
type: C4 Component
title: Web module
status: stable
groma:
  id: flow-trace
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/flow-trace.ts
      symbol: traceQueriesToFlows
  technology: SolidJS
description: Part of the signed-in client
---

Runs each query function in the trace of the view that created the query, so its requests join that view's load (see `Flow.run`). Observers default their options during component setup, where the flow is in scope; options defaulted elsewhere, and refetches after the view settled,
