---
type: C4 Component
title: App build
status: stable
groma:
  id: graphql-cache-app-build
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/app-build.ts
      symbol: APP_BUILD_TIME
  technology: SolidJS
description: App build inside the signed-in client.
---

When this app build was made, in ms since the epoch, or 0 where the bundler did not stamp it (tests and harnesses). A newer build takes the local cache database over from tabs of an older one.
