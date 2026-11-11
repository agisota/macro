---
type: C4 Component
title: Scope
status: stable
groma:
  id: scope
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/scope.ts
  technology: SolidJS
description: Scope inside the signed-in client.
---

Cache scope: an anonymous, client-generated token naming the local Turso cache in OPFS. Deliberately NOT derived from user identity:  - construction is synchronous and works offline (no identity waterfall); - no PII leaks into enumerable storage metadata (OPFS filenames); - user↔
