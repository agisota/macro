---
type: C4 Component
title: Agent connection prompt
status: stable
groma:
  id: agent-connection-prompt
  parent: macro
  code:
    - scanner: typescript
      file: packages/lexical-core/utils/agent-connection-prompt.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
