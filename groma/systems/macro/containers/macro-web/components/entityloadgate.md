---
type: C4 Component
title: Web module
status: stable
groma:
  id: entityloadgate
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/EntityLoadGate.tsx
  technology: SolidJS
description: Part of the signed-in client
---

`LOAD_FAILED` is any non-structural failure — a transport error or an offline load with nothing cached. Unlike the structural codes it is retryable, so the gate renders it with a Retry action when the consumer provides `onRetry` — and loaded content outranks it: when `data` is av
