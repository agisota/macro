---
type: C4 Component
title: Span noop
status: stable
groma:
  id: span-noop
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/span-noop.ts
      symbol: NOOP_SPAN
  technology: TypeScript
  group: Observability
description: Shared package observability
---

A span that records nothing, for code that runs outside any trace.
