---
type: C4 Component
title: Web module
status: stable
groma:
  id: list-data-source
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/list-data-source.ts
  technology: SolidJS
description: Part of the signed-in client
---

Reactive data and loading controls consumed by a list independently of its query implementation.
