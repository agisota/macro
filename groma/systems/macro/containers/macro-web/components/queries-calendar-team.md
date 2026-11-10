---
type: C4 Component
title: Team
status: stable
groma:
  id: queries-calendar-team
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/team.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/team-ooo.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/use-calendar-cache.ts
      symbol: useCalendarCache
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/forward.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/map.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/calendars.ts
      symbol: useVisibleCalendarsQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/invitations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/mutations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/backfill.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/flag.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/ics.ts
      symbol: fetchCalendarEventIcs
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/occurrences.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/team-keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/readiness.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/network.ts
      symbol: fetchCached
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/mention-preview.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/mutations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/optimistic.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/copy.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/sync-controller.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/join-requests.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/team-cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/range.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/sync.ts
  technology: SolidJS
description: A viewer-scoped roster read avoids the legacy current-team singleton cache.
---

A viewer-scoped roster read avoids the legacy current-team singleton cache.
