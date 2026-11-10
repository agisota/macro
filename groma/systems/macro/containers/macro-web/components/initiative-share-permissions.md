---
type: C4 Component
title: Web module
status: stable
groma:
  id: initiative-share-permissions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/initiative/share-permissions.ts
  technology: SolidJS
description: Part of the signed-in client
---

The shared share dialog owns loading and refreshing these permissions.
