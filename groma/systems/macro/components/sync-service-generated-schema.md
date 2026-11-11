---
type: C4 Component
title: Schema
status: stable
groma:
  id: sync-service-generated-schema
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/sync-service/generated/schema.ts
    - scanner: typescript
      file: packages/collaboration/src/sync-service/source.ts
    - scanner: typescript
      file: packages/collaboration/src/sync-service/router.ts
      symbol: SyncRouterTransport
    - scanner: typescript
      file: packages/collaboration/src/sync-service/socket.ts
  technology: TypeScript, Loro
  group: Collaboration runtime
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
