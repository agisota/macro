---
type: C4 Component
title: Per query idb
status: stable
groma:
  id: per-query-idb
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/persistence/per-query-idb.ts
  technology: SolidJS
  group: Data queries
description: Clear durable entries and fence pending/in-flight writes
---

Clear durable entries and fence pending/in-flight writes.
