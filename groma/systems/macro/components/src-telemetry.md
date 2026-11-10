---
type: C4 Component
title: observability
status: stable
groma:
  id: src-telemetry
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/telemetry.ts
      symbol: Telemetry
  technology: TypeScript
description: Shared package observability
---

Initialize providers once, with an optional buffer while enablement resolves.
