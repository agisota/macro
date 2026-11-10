---
type: C4 Component
title: Web module
status: stable
groma:
  id: reactive-selection
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/reactive-selection.ts
  technology: SolidJS
description: Part of the signed-in client
---

Selectors also observe field updates that retain the query's object identity.
