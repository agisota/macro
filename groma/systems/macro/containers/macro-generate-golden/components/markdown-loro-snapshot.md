---
type: C4 Component
title: Markdown loro snapshot
status: stable
groma:
  id: markdown-loro-snapshot
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/markdown-loro-snapshot.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
