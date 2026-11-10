---
type: C4 Component
title: service preview
status: stable
groma:
  id: service-preview-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-preview/client.ts
  technology: TypeScript
description: Client for the service preview host
---

Wire contract with agent_preview::domain::Preview. No credentials in snapshots.
