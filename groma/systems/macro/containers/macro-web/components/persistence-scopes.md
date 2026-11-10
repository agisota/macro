---
type: C4 Component
title: Web module
status: stable
groma:
  id: persistence-scopes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/persistence-scopes.ts
  technology: SolidJS
description: Part of the signed-in client
---

Legacy unscoped payloads and disabled (unknown-account) queries cannot establish ownership, so neither is eligible for persistence.
