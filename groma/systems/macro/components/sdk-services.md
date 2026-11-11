---
type: C4 Component
title: Services
status: stable
groma:
  id: sdk-services
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/services.ts
  technology: TypeScript
description: Shared package sdk
---

The backend services the SDK is generated against. Shared by orval.config.ts (which reads ./specs/<service>.json) and scripts/sync-specs.ts (which refreshes those specs from the monorepo's service-clients package).
