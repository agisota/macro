---
type: C4 Component
title: Reminders keys
status: stable
groma:
  id: reminders-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/reminders/keys.ts
      symbol: reminderKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/reminders/email-refresh.ts
      symbol: refreshEmailFollowup
    - scanner: typescript
      file: apps/web/src/lib/queries/reminders/email-collection.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/reminders/email-followup.ts
  technology: SolidJS
description: Scheduling and delivery both change reminder membership and inbox position.
---

Scheduling and delivery both change reminder membership and inbox position.
