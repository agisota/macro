---
type: C4 Component
title: Span
status: stable
groma:
  id: span
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/span.ts
  technology: TypeScript
  group: Observability
description: An explicit context retained across a queue/authentication boundary; owns no span
---

An explicit context retained across a queue/authentication boundary; owns no span.
