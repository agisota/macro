---
type: C4 Component
title: Document
status: stable
groma:
  id: utils-document
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/utils/document.ts
      symbol: $sanitizeLexicalTree
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
