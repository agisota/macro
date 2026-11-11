---
type: C4 Component
title: Cache recovery harness
status: stable
groma:
  id: cache-recovery-harness
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/cache-recovery-harness.ts
      symbol: CACHE_MUTATING_REQUEST_KINDS
  technology: SolidJS
description: Cache recovery harness inside the signed-in client.
---

Source under apps/web/src/lib/graphql-cache/worker/browser-test/cache-recovery-harness.ts.
