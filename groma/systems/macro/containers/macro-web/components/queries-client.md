---
type: C4 Component
title: Queries client
status: stable
groma:
  id: queries-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/client.ts
  technology: SolidJS
description: Client inside the signed-in client.
---

Auth failures are terminal within a session — fetchWithToken already refreshes and retries the token internally, so a query-level retry just repeats the doomed request.
