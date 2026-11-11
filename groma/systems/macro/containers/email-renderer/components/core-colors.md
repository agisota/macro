---
type: C4 Component
title: Core colors
status: stable
groma:
  id: core-colors
  parent: email-renderer
  code:
    - scanner: typescript
      file: packages/email-renderer/src/core/colors.ts
    - scanner: typescript
      file: packages/email-renderer/src/core/css.ts
    - scanner: typescript
      file: packages/email-renderer/src/core/html.ts
    - scanner: typescript
      file: packages/email-renderer/src/core/index.ts
    - scanner: typescript
      file: packages/email-renderer/src/core/resource-policy.ts
  technology: TypeScript
description: Prepares one HTML or plaintext mail body
---

Sanitizes and trims quoted mail, including Gmail signature classes, with parse5 and css-tree. It does not fetch.
