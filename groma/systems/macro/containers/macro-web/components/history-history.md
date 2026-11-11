---
type: C4 Component
title: History
status: stable
groma:
  id: history-history
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/history/history.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/history/types.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/history/transforms.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/history/keys.ts
      symbol: historyKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/history/graphql.ts
  technology: SolidJS
  group: Data queries
description: History in Data queries.
---

File apps/web/src/lib/queries/history/history.ts. It belongs to Data queries, not a separate application.
