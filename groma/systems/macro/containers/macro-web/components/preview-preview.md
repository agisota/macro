---
type: C4 Component
title: Preview preview
status: stable
groma:
  id: preview-preview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/preview.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/live-batcher.ts
      symbol: createLivePreviewBatcher
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/keys.ts
      symbol: previewKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/graphql.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/dataloader.ts
      symbol: previewDataLoader
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/fetchers.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/failed-read.ts
      symbol: failedReadAccess
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/wakeup.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/types.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/active-queries.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/preview/index.ts
  technology: SolidJS
description: Preview inside the signed-in client.
---

DEBUG VARS

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/preview/live-batcher.ts](../../../../../../apps/web/src/lib/queries/preview/live-batcher.ts) | [apps/web/src/lib/queries/agent-session/graphql-mentions.ts](../../../../../../apps/web/src/lib/queries/agent-session/graphql-mentions.ts) | Invokes supplied callback: start | typescript |
