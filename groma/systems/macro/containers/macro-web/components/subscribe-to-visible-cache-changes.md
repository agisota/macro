---
type: C4 Component
title: Subscribe to visible cache changes
status: stable
groma:
  id: subscribe-to-visible-cache-changes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/subscribe-to-visible-cache-changes.ts
      symbol: subscribeToVisibleCacheChanges
  technology: SolidJS
description: Subscribe to visible cache changes inside the signed-in client.
---

Refreshes after cache changes on `createVisibleRefresh`'s terms. This does not pause cache ingestion, mutations, or explicit/initial requests.  The caller must unsubscribe on disposal.
