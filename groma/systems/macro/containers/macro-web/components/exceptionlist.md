---
type: C4 Component
title: ExceptionList
status: stable
groma:
  id: exceptionlist
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/exceptionList.ts
  technology: SolidJS
description: ExceptionList inside the signed-in client.
---

PostHog's `$exception_list`: the thrown error first, then its causes.
