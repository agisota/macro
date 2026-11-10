---
type: C4 Component
title: Email renderer
status: stable
groma:
  id: email-renderer-vitest-config
  parent: macro
  code:
    - scanner: typescript
      file: packages/email-renderer/vitest.config.ts
  technology: TypeScript
description: Prepares one HTML or plaintext mail body
---

Sanitizes and trims quoted mail, including Gmail signature classes, with parse5 and css-tree. It does not fetch.
