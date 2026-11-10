---
type: C4 Component
title: Scheduling
status: stable
groma:
  id: public
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/scheduling/queries/public.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/public-booking.tsx
  technology: SolidJS
description: Scheduling links and public booking host data.
---

`scheduling.tsx` builds a public link from a profile id and optional slug, and can open an agent chat via `openChatWithInput`. `BookingLinksRouteView` lazy-loads from this feature (`app-router-view.tsx:207-209`). Public booking and receipt routes use `FocusedShell`, not `AppShell` (`app-router-view.tsx:259-267`). The public page component itself is imported from `routes/pages`, which was not opened.
