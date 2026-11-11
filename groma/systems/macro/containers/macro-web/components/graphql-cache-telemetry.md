---
type: C4 Component
title: Telemetry
status: stable
groma:
  id: graphql-cache-telemetry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/telemetry.ts
  technology: SolidJS
description: Telemetry inside the signed-in client.
---

Fixed cache telemetry names. Dashboards must not accept ad-hoc names.
