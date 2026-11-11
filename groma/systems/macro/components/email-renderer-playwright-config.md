---
type: C4 Component
title: Email renderer
status: stable
groma:
  id: email-renderer-playwright-config
  parent: macro
  code:
    - scanner: typescript
      file: packages/email-renderer/playwright.config.ts
  technology: TypeScript
  group: Email renderer library
description: Prepares one HTML or plaintext mail body
---

Sanitizes and trims quoted mail, including Gmail signature classes, with parse5 and css-tree. It does not fetch.
