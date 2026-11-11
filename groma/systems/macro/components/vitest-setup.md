---
type: C4 Component
title: Vitest.setup
status: stable
groma:
  id: vitest-setup
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/vitest.setup.ts
  technology: TypeScript, Loro
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
