---
type: C4 Component
title: Lexical core
status: stable
groma:
  id: reply-target
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/transformers/reply-target.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
