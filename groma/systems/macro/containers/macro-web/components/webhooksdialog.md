---
type: C4 Component
title: WebhooksDialog
status: stable
groma:
  id: webhooksdialog
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-database/component/WebhooksDialog.tsx
      symbol: WebhooksDialog
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/webhooks.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/core/webhook-example.ts
  technology: SolidJS
  group: Files
description: '`database` block; 404 when the rollout is off.'
---

The comment says an off rollout makes a database link a 404 and skips the bundle. Live tracking is on because gateway fan-out is keyed on the tracked `database` entity. Open tracking is off because a database is not a soup entity or a cloud-storage item. `database-query` links an answer row by opening `{ type: 'database', id }` (`database-query/answer-display.tsx:31-33`).
