---
type: C4 Component
title: Web module
status: stable
groma:
  id: test-support
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/people/test-support.ts
  technology: SolidJS
description: Part of the signed-in client
---

Explicit older-host capability for fixtures that do not exercise backfill.
