---
type: C4 Component
title: Web module
status: stable
groma:
  id: call-call
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/call/call.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/call/keys.ts
      symbol: callKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/call/meetings.ts
  technology: SolidJS
description: Part of the signed-in client
---

Fresh lookups keep recovery from re-creating a call that already ended.
