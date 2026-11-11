---
type: C4 Component
title: AgentContext
status: stable
groma:
  id: transformers-agentcontext
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/transformers/agentContext.ts
      symbol: I_AGENT_CONTEXT
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.
