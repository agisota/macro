---
type: C4 Component
title: Node list
status: stable
groma:
  id: node-list
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/node-list.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
