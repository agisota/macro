---
type: C4 Component
title: Web module
status: stable
groma:
  id: invalidate-on-reconnect
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/invalidate-on-reconnect.ts
      symbol: useInvalidateQueriesOnReconnect
  technology: SolidJS
description: Part of the signed-in client
---

Marks cached queries as stale and automatically refetches active queries in the background
