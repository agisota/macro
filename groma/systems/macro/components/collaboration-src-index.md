---
type: C4 Component
title: Collaboration src index
status: stable
groma:
  id: collaboration-src-index
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/index.ts
  technology: TypeScript, Loro
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
