---
type: C4 Component
title: Utils mentions
status: stable
groma:
  id: utils-mentions
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/utils/mentions.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
