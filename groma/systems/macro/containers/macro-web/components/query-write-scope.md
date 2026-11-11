---
type: C4 Component
title: Query write scope
status: stable
groma:
  id: query-write-scope
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/query-write-scope.ts
  technology: SolidJS
  group: Development tooling
description: Production host + WASM/OPFS, with synthetic responses only
---

Production host + WASM/OPFS, with synthetic responses only. No auth or hosted data is required. Exercise the same scoped subscriber used by Quick Access.
