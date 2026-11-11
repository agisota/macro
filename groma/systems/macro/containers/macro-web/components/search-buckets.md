---
type: C4 Component
title: Search buckets
status: stable
groma:
  id: search-buckets
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/search-buckets.ts
  technology: SolidJS
description: Search buckets inside the signed-in client.
---

Real production host/WASM/OPFS. Synthetic data only: no hosted data or auth.
