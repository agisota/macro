---
type: C4 Component
title: Web module
status: stable
groma:
  id: queries-persistence
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/persistence.ts
  technology: SolidJS
description: Part of the signed-in client
---

Builds a versioned persistence key for IDB database naming.
