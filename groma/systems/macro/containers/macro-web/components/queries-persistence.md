---
type: C4 Component
title: Persistence
status: stable
groma:
  id: queries-persistence
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/persistence.ts
  technology: SolidJS
description: Persistence inside the signed-in client.
---

Builds a versioned persistence key for IDB database naming.
