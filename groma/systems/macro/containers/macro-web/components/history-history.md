---
type: C4 Component
title: Web module
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
description: Part of the signed-in client
---

re-export history item type from this file
