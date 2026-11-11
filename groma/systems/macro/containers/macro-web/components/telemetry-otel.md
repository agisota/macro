---
type: C4 Component
title: Telemetry otel
status: stable
groma:
  id: telemetry-otel
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/telemetry-otel.ts
      symbol: createOtelCacheTelemetrySink
  technology: SolidJS
  group: GraphQL cache
description: Privacy-safe OpenTelemetry adapter
---

Privacy-safe OpenTelemetry adapter. It uses the anonymous span API so the browser provider cannot enrich cache metrics with `usr.id`.
