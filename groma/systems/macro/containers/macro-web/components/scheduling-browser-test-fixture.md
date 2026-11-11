---
type: C4 Component
title: Scheduling browser test fixture
status: stable
groma:
  id: scheduling-browser-test-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/scheduling/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/browser-test/calendars.tsx
      symbol: FixtureCalendars
  technology: SolidJS
  group: Development tooling
description: Scheduling links and public booking host data.
---

`scheduling.tsx` builds a public link from a profile id and optional slug, and can open an agent chat via `openChatWithInput`. `BookingLinksRouteView` lazy-loads from this feature (`app-router-view.tsx:207-209`). Public booking and receipt routes use `FocusedShell`, not `AppShell` (`app-router-view.tsx:259-267`). The public page component itself is imported from `routes/pages`, which was not opened.
