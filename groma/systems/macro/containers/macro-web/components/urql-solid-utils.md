---
type: C4 Component
title: Web module
status: stable
groma:
  id: urql-solid-utils
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/utils.ts
  technology: SolidJS
description: Part of the signed-in client
---

Normalizes observer and selector failures to urql's public error type.
