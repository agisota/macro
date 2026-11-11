---
type: C4 Component
title: Markdown golden.1
status: stable
groma:
  id: markdown-golden-1
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/markdown-golden.1.ts
      symbol: MARKDOWN_GOLDEN
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
