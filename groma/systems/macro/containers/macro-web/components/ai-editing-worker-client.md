---
type: C4 Component
title: AI edit client
status: stable
groma:
  id: ai-editing-worker-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/ai-editing-worker/client.ts
  technology: HTTP
description: Browser client for the editing worker
---

POSTs document edits to the Cloudflare worker with a document permission token and a model map. The worker, not this file, calls the model provider.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/ai-editing-worker/client.ts](../../../../../../apps/web/src/lib/service-clients/ai-editing-worker/client.ts) | [apps/web/src/features/block-md/component/MarkdownPopup.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownPopup.tsx) | Invokes supplied callback: onOps | typescript |

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/ai-editing-worker/client.ts](../../../../../../apps/web/src/lib/service-clients/ai-editing-worker/client.ts) | [services/ai-editing-worker/src/index.ts](../../../../../../services/ai-editing-worker/src/index.ts) | Requests a document edit | HTTPS |
