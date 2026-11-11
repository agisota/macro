---
type: C4 Component
title: Xml index
status: stable
groma:
  id: xml-index
  parent: macro
  code:
    - scanner: typescript
      file: packages/lexical-core/transformers/xml/index.ts
    - scanner: typescript
      file: packages/lexical-core/transformers/xml/nodes.ts
    - scanner: typescript
      file: packages/lexical-core/transformers/xml/codecs.ts
  technology: Lexical
  group: Lexical nodes
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
