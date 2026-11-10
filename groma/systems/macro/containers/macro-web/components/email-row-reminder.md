---
type: C4 Component
title: Reminders
status: stable
groma:
  id: email-row-reminder
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/reminders/core/email-row-reminder.ts
      symbol: EmailRowReminder
    - scanner: typescript
      file: apps/web/src/features/reminders/components/email-reminder-form.tsx
      symbol: EmailReminderForm
    - scanner: typescript
      file: apps/web/src/features/reminders/core/row-schedule.ts
      symbol: emailReminderScheduleLabel
    - scanner: typescript
      file: apps/web/src/features/reminders/views/email-reminder-menu.tsx
      symbol: EmailReminderMenu
    - scanner: typescript
      file: apps/web/src/features/reminders/primitives/reminder-clock.ts
      symbol: useReminderClock
    - scanner: typescript
      file: apps/web/src/features/reminders/core/reminder-phrase.ts
    - scanner: typescript
      file: apps/web/src/features/reminders/core/schedule-instant.ts
      symbol: formatReminderOccurrence
    - scanner: typescript
      file: apps/web/src/features/reminders/views/email-row-schedule.tsx
      symbol: EmailRowSchedule
    - scanner: typescript
      file: apps/web/src/features/reminders/components/reminder-schedule-indicator.tsx
      symbol: ReminderScheduleIndicator
    - scanner: typescript
      file: apps/web/src/features/reminders/reminder-schedule.ts
    - scanner: typescript
      file: apps/web/src/features/reminders/views/email-reminder-composer.tsx
      symbol: EmailReminderComposer
    - scanner: typescript
      file: apps/web/src/features/reminders/primitives/create-reminder-time-options.ts
    - scanner: typescript
      file: apps/web/src/features/reminders/reminder-composer.ts
      symbol: openReminderComposer
    - scanner: typescript
      file: apps/web/src/features/reminders/core/email-reminder.ts
  technology: SolidJS
  group: Email
description: Email reminder schedule and composer dialog.
---

`openReminderComposer` takes an email entity id, name, and type and opens `EmailReminderComposer` through the UI dialog helper. The same command is what list actions are expected to call. Schedule helpers live beside it; this pass did not open those files beyond the composer entry.
