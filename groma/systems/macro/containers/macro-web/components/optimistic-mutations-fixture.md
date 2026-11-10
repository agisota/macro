---
type: C4 Component
title: Web module
status: stable
groma:
  id: optimistic-mutations-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/tests/functional/optimistic-mutations/fixture.tsx
    - scanner: typescript
      file: apps/web/tests/functional/optimistic-mutations/data.ts
  technology: SolidJS
description: Part of the signed-in client
---

Another document for the renameEntities field: it reaches the field resolver through its own variables, response alias, and narrower selection.
