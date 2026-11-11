---
type: C4 Component
title: EntityLoadGate
status: stable
groma:
  id: entityloadgate
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/EntityLoadGate.tsx
  technology: SolidJS
  group: Workspace core
description: '`LOAD_FAILED` is any non-structural failure — a transport error or an offline load with nothing cached'
---

`LOAD_FAILED` is any non-structural failure — a transport error or an offline load with nothing cached. Unlike the structural codes it is retryable, so the gate renders it with a Retry action when the consumer provides `onRetry` — and loaded content outranks it: when `data` is available the gate renders the content instead, so consumers can pass the
