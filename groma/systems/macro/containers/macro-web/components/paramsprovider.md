---
type: C4 Component
title: ParamsProvider
status: stable
groma:
  id: paramsprovider
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ParamsProvider.tsx
  technology: SolidJS
  group: Workspace core
description: Use a version-bumping pattern to trigger successive reactive updates when calling goToLocationFromParams multiple times even with same value
---

Use a version-bumping pattern to trigger successive reactive updates when calling goToLocationFromParams multiple times even with same values.
