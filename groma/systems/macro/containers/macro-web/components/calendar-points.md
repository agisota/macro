---
type: C4 Component
title: Web module
status: stable
groma:
  id: calendar-points
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/calendar-points.ts
  technology: SolidJS
description: Part of the signed-in client
---

Real production worker/WASM/OPFS with synthetic calendar records only.
