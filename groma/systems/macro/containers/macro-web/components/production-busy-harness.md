---
type: C4 Component
title: Production busy harness
status: stable
groma:
  id: production-busy-harness
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-busy-harness.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-cache.file-holder-worker.ts
  technology: SolidJS
description: Production busy harness inside the signed-in client.
---

A page that leaves while it owns the cache terminates its engine worker. The browser can hand the owner Web Lock to the next engine before that worker lets go of the database files. This harness recreates that gap with a worker that keeps the files open without the lock.
