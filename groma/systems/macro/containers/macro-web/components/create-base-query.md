---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-base-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-base-query.ts
      symbol: createBaseQuery
  technology: SolidJS
description: Part of the signed-in client
---

Bridges a framework-neutral urql observer into one reactive Solid store.
