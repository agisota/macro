---
type: C4 Component
title: Web module
status: stable
groma:
  id: trace-parent-exchange
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/trace-parent-exchange.ts
  technology: SolidJS
description: Part of the signed-in client
---

Operation context key for the trace a query's request should join.
