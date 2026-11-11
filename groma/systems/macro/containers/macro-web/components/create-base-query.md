---
type: C4 Component
title: Create base query
status: stable
groma:
  id: create-base-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/create-base-query.ts
      symbol: createBaseQuery
  technology: SolidJS
description: Create base query inside the signed-in client.
---

Bridges a framework-neutral urql observer into one reactive Solid store.
