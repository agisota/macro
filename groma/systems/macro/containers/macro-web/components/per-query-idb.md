---
type: C4 Component
title: Web module
status: stable
groma:
  id: per-query-idb
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/persistence/per-query-idb.ts
  technology: SolidJS
description: Part of the signed-in client
---

Clear durable entries and fence pending/in-flight writes.
