---
type: C4 Component
title: Message references
status: stable
groma:
  id: message-references
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/utils/message-references.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
