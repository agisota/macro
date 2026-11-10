---
type: C4 Component
title: Block calendar
status: stable
groma:
  id: block-calendar-types
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-calendar/types.ts
    - scanner: typescript
      file: apps/web/src/features/block-calendar/CalendarBlockAdapter.tsx
      symbol: CalendarBlockAdapter
    - scanner: typescript
      file: apps/web/src/features/block-calendar/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-calendar/components/EventComposerSplit.tsx
      symbol: EventComposerSplit
  technology: SolidJS
  group: Calendar
description: Legacy calendar block that redirects or embeds `calendar-view`.
---

When the calendar UI flag is off, the adapter replaces the split with the home component. Otherwise it builds a focus target and renders `Workspace` from `calendar-view`. The definition file was not opened; the adapter is the file that was.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-calendar/CalendarBlockAdapter.tsx](../../../../../../apps/web/src/features/block-calendar/CalendarBlockAdapter.tsx) | [apps/web/src/features/calendar-view/components/Workspace.tsx](../../../../../../apps/web/src/features/calendar-view/components/Workspace.tsx) | embeds calendar workspace | component import |
