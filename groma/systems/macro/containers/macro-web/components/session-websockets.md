---
type: C4 Component
title: Session websockets
status: stable
groma:
  id: session-websockets
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/auth/session-websockets.ts
      symbol: useSessionWebsockets
    - scanner: typescript
      file: apps/web/src/lib/core/auth/email.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/login-events.ts
      symbol: publishLoginSuccess
  technology: SolidJS
description: Session websockets inside the signed-in client.
---

Macro IDs can contain email addresses. Keep only an opaque identifier, and suppress the runtime's raw user-ID enrichment for this entire trace.
