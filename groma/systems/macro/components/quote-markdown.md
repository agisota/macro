---
type: C4 Component
title: Quote markdown
status: stable
groma:
  id: quote-markdown
  parent: macro
  code:
    - scanner: typescript
      file: packages/lexical-core/utils/quote-markdown.ts
      symbol: quoteMarkdown
  technology: Lexical
  group: Lexical nodes
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
