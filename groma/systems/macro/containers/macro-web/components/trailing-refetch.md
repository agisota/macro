---
type: C4 Component
title: Trailing refetch
status: stable
groma:
  id: trailing-refetch
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/trailing-refetch.ts
      symbol: createTrailingRefetch
  technology: SolidJS
description: Trailing refetch inside the signed-in client.
---

Coalesce a burst, then repeat if another invalidation arrives during the read.
