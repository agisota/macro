---
type: C4 Component
title: Web module
status: stable
groma:
  id: generate-graphql-cache-entity-resolver-schema
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-graphql-cache-entity-resolver-schema.ts
  technology: SolidJS
description: Part of the signed-in client
---

Input recursion is bounded so an SDL cycle or unexpectedly deep input shape fails generation instead of silently producing incomplete argument paths.
