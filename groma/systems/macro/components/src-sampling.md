---
type: C4 Component
title: Sampling
status: stable
groma:
  id: src-sampling
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/sampling.ts
  technology: TypeScript
  group: Observability
description: Shared package observability
---

Applications name their sampling classes by augmenting this interface:  ```ts declare module '@macro-inc/observability' { interface TelemetryRegister { samplingClass: 'always' | 'perf'; } } ```  biome-ignore lint/suspicious/noEmptyInterface: augmented by applications.
