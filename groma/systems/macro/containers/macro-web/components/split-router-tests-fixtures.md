---
type: C4 Component
title: Tests fixtures
status: stable
groma:
  id: split-router-tests-fixtures
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/split-router/tests/fixtures.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/browser-test/fixture.tsx
  technology: SolidJS
description: 'Declared out of order on purpose: matching must rank by specificity.'
---

Declared out of order on purpose: matching must rank by specificity.
