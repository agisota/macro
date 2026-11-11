---
type: C4 Component
title: Invalidate on reconnect
status: stable
groma:
  id: invalidate-on-reconnect
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/invalidate-on-reconnect.ts
      symbol: useInvalidateQueriesOnReconnect
  technology: SolidJS
  group: Data queries
description: Marks cached queries as stale and automatically refetches active queries in the background
---

Marks cached queries as stale and automatically refetches active queries in the background
