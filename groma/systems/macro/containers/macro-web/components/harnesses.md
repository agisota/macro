---
type: C4 Component
title: Harnesses
status: stable
groma:
  id: harnesses
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/harnesses/harnesses.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/harnesses/keys.ts
      symbol: harnessKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/harnesses/connections.ts
      symbol: useHarnessConnectionStatus
  technology: SolidJS
  group: Data queries
description: Harnesses in Data queries.
---

File apps/web/src/lib/queries/harnesses/harnesses.ts. It belongs to Data queries, not a separate application.
