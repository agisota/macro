---
type: C4 Component
title: Block database
status: stable
groma:
  id: browser-test-webhooks
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/webhooks.tsx
  technology: SolidJS
description: '`database` block; 404 when the rollout is off.'
---

The comment says an off rollout makes a database link a 404 and skips the bundle. Live tracking is on because gateway fan-out is keyed on the tracked `database` entity. Open tracking is off because a database is not a soup entity or a cloud-storage item. `database-query` links an answer row by opening `{ type: 'database', id }` (`database-query/answer-display.tsx:31-33`).
