---
type: C4 Component
title: Web module
status: stable
groma:
  id: people-references
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/people-references.ts
  technology: SolidJS
description: Part of the signed-in client
---

Real app host wrapper, coordinator and WASM/OPFS. Only server data is synthetic.
