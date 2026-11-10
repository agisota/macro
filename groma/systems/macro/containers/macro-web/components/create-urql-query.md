---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-urql-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-urql-query.ts
      symbol: createUrqlQuery
  technology: SolidJS
description: Part of the signed-in client
---

Creates a live Solid binding over one urql query observer.  New single-document reads use `createLiveQuery`, a document-first wrapper over this binding. Existing callers are already live and need no migration.
