---
type: C4 Component
title: Deferred span processor
status: stable
groma:
  id: deferred-span-processor
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/deferred-span-processor.ts
      symbol: DeferredSpanProcessor
  technology: TypeScript
description: Shared package observability
---

Keep early spans in memory; never construct an exporter before consent.
