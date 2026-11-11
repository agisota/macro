---
type: C4 Component
title: UnknownMention
status: stable
groma:
  id: transformers-unknownmention
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/transformers/unknownMention.ts
      symbol: UNKNOWN_MENTION
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
