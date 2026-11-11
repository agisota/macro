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
description: Invalidate on reconnect inside the signed-in client.
---

Marks cached queries as stale and automatically refetches active queries in the background
