---
type: C4 Component
title: Call
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
  group: Data queries
description: Call in Data queries.
---

File apps/web/src/lib/queries/call/call.ts. It belongs to Data queries, not a separate application.
