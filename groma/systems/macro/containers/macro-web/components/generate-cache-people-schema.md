---
type: C4 Component
title: Web module
status: stable
groma:
  id: generate-cache-people-schema
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-cache-people-schema.ts
  technology: SolidJS
description: Part of the signed-in client
---

The generic generator erases oneOf to z.any(). Our Rust enums have disjoint literal tags, so a typed union has identical validation.
