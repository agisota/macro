---
type: C4 Component
title: Generate graphql cache entity resolver schema
status: stable
groma:
  id: generate-graphql-cache-entity-resolver-schema
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-graphql-cache-entity-resolver-schema.ts
  technology: SolidJS
  group: Development tooling
description: Input recursion is bounded so an SDL cycle or unexpectedly deep input shape fails generation instead of silently producing incomplete argume
---

Input recursion is bounded so an SDL cycle or unexpectedly deep input shape fails generation instead of silently producing incomplete argument paths.
