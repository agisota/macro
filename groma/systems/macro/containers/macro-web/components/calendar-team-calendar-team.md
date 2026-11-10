---
type: C4 Component
title: Calendar team
status: stable
groma:
  id: calendar-team-calendar-team
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/calendar-team/calendar-team.tsx
      symbol: CalendarTeamSettings
    - scanner: typescript
      file: apps/web/src/features/calendar-team/core/model.ts
      symbol: CalendarSharing
    - scanner: typescript
      file: apps/web/src/features/calendar-team/core/availability.ts
      symbol: availabilitySources
    - scanner: typescript
      file: apps/web/src/features/calendar-team/components/team-event-details.tsx
      symbol: TeamEventDetails
    - scanner: typescript
      file: apps/web/src/features/calendar-team/components/team-sharing-settings.tsx
      symbol: TeamSharingSettings
    - scanner: typescript
      file: apps/web/src/features/calendar-team/core/merge.ts
      symbol: mergeCalendarOverlays
  technology: SolidJS
  group: Calendar
description: Team calendar identity and sharing settings.
---

Identity is returned only when the current user is a member of the queried team. The settings content is gated by `useCalendarTeamSharingFlag`. `calendar-settings.tsx` mounts `CalendarTeamSettings` (`calendar/calendar-settings.tsx:10`). Queries come from `@queries/calendar/team`.
