---
type: C4 Component
title: Use query sync
status: stable
groma:
  id: use-query-sync
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/sync/use-query-sync.ts
      symbol: useQuerySync
    - scanner: typescript
      file: apps/web/src/lib/queries/sync/keys.ts
      symbol: syncKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/sync/document-peers.ts
      symbol: useDocumentPeersQuery
  technology: SolidJS
  group: Data queries
description: 'Side-effect import: registers the scheduled-action live-update websocket listener. Must be imported somewhere that always loads on app start — this provider is '
---

Side-effect import: registers the scheduled-action live-update websocket listener. Must be imported somewhere that always loads on app start — this provider is guaranteed to mount alongside the other sync handlers.
