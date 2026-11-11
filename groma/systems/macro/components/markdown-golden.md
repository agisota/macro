---
type: C4 Component
title: Markdown golden
status: stable
groma:
  id: markdown-golden
  parent: macro
  code:
    - scanner: typescript
      file: packages/lexical-core/markdown-golden.ts
      symbol: getMarkdownGoldenBytes
  technology: Lexical
  group: Lexical nodes
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
