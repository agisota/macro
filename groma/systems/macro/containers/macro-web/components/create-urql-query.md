---
type: C4 Component
title: Create urql query
status: stable
groma:
  id: create-urql-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-urql-query.ts
      symbol: createUrqlQuery
  technology: SolidJS
description: Create urql query inside the signed-in client.
---

Creates a live Solid binding over one urql query observer.  New single-document reads use `createLiveQuery`, a document-first wrapper over this binding. Existing callers are already live and need no migration.
