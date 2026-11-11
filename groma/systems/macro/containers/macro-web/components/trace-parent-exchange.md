---
type: C4 Component
title: Trace parent exchange
status: stable
groma:
  id: trace-parent-exchange
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/trace-parent-exchange.ts
  technology: SolidJS
description: Trace parent exchange inside the signed-in client.
---

Operation context key for the trace a query's request should join.
