---
type: C4 Component
title: Transformers auto link
status: stable
groma:
  id: transformers-auto-link
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/transformers/auto-link.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
