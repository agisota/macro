---
type: C4 Component
title: Legacy idb cleanup
status: stable
groma:
  id: legacy-idb-cleanup
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/legacy-idb-cleanup.ts
      symbol: deleteLegacyNormalizedCacheIdb
  technology: SolidJS
  group: GraphQL cache
description: Best-effort removal of the normalized cache's former IndexedDB database
---

Best-effort removal of the normalized cache's former IndexedDB database.  Cutover never opens, enumerates, or migrates the old database. A blocked deletion settles immediately for callers while the browser remains free to complete the same request after an old tab releases its connection.
