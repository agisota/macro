---
type: C4 Component
title: session websocket telemetry.ts
status: stable
groma:
  id: session-websocket-telemetry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/session-websocket-telemetry.ts
      symbol: createSessionWebsocketTelemetry
  technology: TypeScript
description: Client for the session websocket telemetry.ts host
---

Bounded connection phases share one session trace; credentials and URLs are never recorded.
