---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-urql-mutation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-urql-mutation.ts
      symbol: createUrqlMutation
  technology: SolidJS
description: Part of the signed-in client
---

Creates reactive state for imperative urql mutation executions.
