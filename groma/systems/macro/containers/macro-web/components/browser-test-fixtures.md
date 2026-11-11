---
type: C4 Component
title: Browser test fixtures
status: stable
groma:
  id: browser-test-fixtures
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/browser-test/fixtures.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/browser-test/harness.tsx
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/browser-test/runtime.ts
  technology: SolidJS
description: 'Only application composition is replaced: the query source, exchange, fragments, worker and persisted cache all run their production implementations.'
---

Only application composition is replaced: the query source, exchange, fragments, worker and persisted cache all run their production implementations.
