---
type: C4 Component
title: Tracing
status: stable
groma:
  id: tracing
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/tracing.ts
  technology: TypeScript
description: Shared package observability
---

The class whose sampling decision keeps this span when it starts outside an exported trace. Without one it is always kept.
