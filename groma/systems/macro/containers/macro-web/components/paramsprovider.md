---
type: C4 Component
title: Web module
status: stable
groma:
  id: paramsprovider
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ParamsProvider.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Use a version-bumping pattern to trigger successive reactive updates when calling goToLocationFromParams multiple times even with same values.
