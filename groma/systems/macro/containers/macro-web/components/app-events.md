---
type: C4 Component
title: Web module
status: stable
groma:
  id: app-events
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/app-events.ts
  technology: SolidJS
description: Part of the signed-in client
---

Payload shared by the generic entity lifecycle events (`create_entity`, `update_entity`, `delete_entity`, `share_entity`).  Only the identifying fields are structured; any event-specific context (e.g. `hasDueDate` on task creation, `newProjectId` on a move) rides along as unstruc
