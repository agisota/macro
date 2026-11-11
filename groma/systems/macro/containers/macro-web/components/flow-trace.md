---
type: C4 Component
title: Flow trace
status: stable
groma:
  id: flow-trace
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/flow-trace.ts
      symbol: traceQueriesToFlows
  technology: SolidJS
  group: Data queries
description: Runs each query function in the trace of the view that created the query, so its requests join that view's load (see `Flow
---

Runs each query function in the trace of the view that created the query, so its requests join that view's load (see `Flow.run`). Observers default their options during component setup, where the flow is in scope; options defaulted elsewhere, and refetches after the view settled, are untouched.
