---
type: C4 Component
title: Web module
status: stable
groma:
  id: graphql-cache-telemetry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/telemetry.ts
  technology: SolidJS
description: Part of the signed-in client
---

Fixed cache telemetry names. Dashboards must not accept ad-hoc names.
