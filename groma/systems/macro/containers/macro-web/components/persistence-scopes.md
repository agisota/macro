---
type: C4 Component
title: Persistence scopes
status: stable
groma:
  id: persistence-scopes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/persistence-scopes.ts
  technology: SolidJS
  group: Data queries
description: Legacy unscoped payloads and disabled (unknown-account) queries cannot establish ownership, so neither is eligible for persistence
---

Legacy unscoped payloads and disabled (unknown-account) queries cannot establish ownership, so neither is eligible for persistence.
