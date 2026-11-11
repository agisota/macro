---
type: C4 Component
title: DiffNode
status: stable
groma:
  id: diffnode
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/nodes/DiffNode.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
