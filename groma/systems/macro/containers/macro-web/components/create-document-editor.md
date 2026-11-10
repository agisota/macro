---
type: C4 Component
title: Document composer
status: stable
groma:
  id: create-document-editor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/document-composer/primitives/create-document-editor.ts
    - scanner: typescript
      file: apps/web/src/features/document-composer/components/document-fields.tsx
      symbol: DocumentFields
  technology: SolidJS
  group: Docs
description: Lexical markdown config, mentions, and tags for composers.
---

`createDocumentEditor` builds a markdown config, optionally resolves app links, and wires tag apply/create. It does not own routing or draft persistence. Callers pass an `onChange` string. No route in the opened router file mounts this directory directly.
