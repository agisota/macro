---
type: C4 Component
title: Markdown mentions
status: stable
groma:
  id: utils-markdown-mentions
  parent: macro
  code:
    - scanner: typescript
      file: packages/lexical-core/utils/markdown-mentions.ts
      symbol: extractChannelMentionsFromMarkdown
  technology: Lexical
  group: Lexical nodes
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
