---
type: C4 Component
title: Telemetry relay
status: stable
groma:
  id: telemetry-relay
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/telemetry-relay.ts
  technology: SolidJS
description: Telemetry relay inside the signed-in client.
---

Relays typed worker observations through exactly one live browser page. Leadership is a fixed, scope-free Web Lock; no cache or identity key crosses the telemetry channel.
