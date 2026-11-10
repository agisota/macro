---
type: C4 Component
title: Web module
status: stable
groma:
  id: performance-harness
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/performance-harness.ts
      symbol: CacheWasmPerformanceSample
  technology: SolidJS
description: Part of the signed-in client
---

Source under apps/web/src/lib/graphql-cache/worker/browser-test/performance-harness.ts.
