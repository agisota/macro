---
type: C4 Component
title: Reminders
status: stable
groma:
  id: reminder-menu
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/reminders/browser-test/reminder-menu.tsx
  technology: SolidJS
description: Email reminder schedule and composer dialog.
---

`openReminderComposer` takes an email entity id, name, and type and opens `EmailReminderComposer` through the UI dialog helper. The same command is what list actions are expected to call. Schedule helpers live beside it; this pass did not open those files beyond the composer entry.
