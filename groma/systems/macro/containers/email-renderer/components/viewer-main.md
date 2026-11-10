---
type: C4 Component
title: Email renderer
status: stable
groma:
  id: viewer-main
  parent: email-renderer
  code:
    - scanner: typescript
      file: packages/email-renderer/viewer/main.ts
      symbol: themes
  technology: TypeScript
description: Prepares one HTML or plaintext mail body
---

Sanitizes and trims quoted mail, including Gmail signature classes, with parse5 and css-tree. It does not fetch.
