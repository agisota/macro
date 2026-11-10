---
type: C4 Component
title: Web module
status: stable
groma:
  id: sticky-header
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/sticky-header.ts
  technology: SolidJS
description: Part of the signed-in client
---

Find the last header at or before an offset without scanning every row.
