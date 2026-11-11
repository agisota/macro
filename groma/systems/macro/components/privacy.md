---
type: C4 Component
title: Privacy
status: stable
groma:
  id: privacy
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/privacy.ts
  technology: TypeScript
  group: Observability
description: Marks telemetry whose contract forbids user identity enrichment
---

Marks telemetry whose contract forbids user identity enrichment.
