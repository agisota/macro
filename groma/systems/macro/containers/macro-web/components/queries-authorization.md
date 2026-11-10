---
type: C4 Component
title: Web module
status: stable
groma:
  id: queries-authorization
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/authorization.ts
      symbol: createQueryAuthorization
  technology: SolidJS
description: Part of the signed-in client
---

A cache hit cannot restore access after the server has denied this read.
