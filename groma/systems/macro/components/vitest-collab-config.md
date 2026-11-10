---
type: C4 Component
title: Collaboration runtime
status: stable
groma:
  id: vitest-collab-config
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/vitest.collab.config.ts
  technology: TypeScript, Loro
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
