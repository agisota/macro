---
type: C4 Component
title: Authorization
status: stable
groma:
  id: queries-authorization
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/authorization.ts
      symbol: createQueryAuthorization
  technology: SolidJS
  group: Data queries
description: A cache hit cannot restore access after the server has denied this read
---

A cache hit cannot restore access after the server has denied this read.
