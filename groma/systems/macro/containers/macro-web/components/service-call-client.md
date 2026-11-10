---
type: C4 Component
title: Call client
status: stable
groma:
  id: service-call-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-call/client.ts
  technology: HTTP
description: Fetches a call token from document storage
---

Joins a meeting by reading CallTokenResponse from the storage host. LiveKit connect happens in the SDK, not here.
