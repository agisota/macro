---
type: C4 Component
title: Web module
status: stable
groma:
  id: fullcalendar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/fullcalendar-solid/FullCalendar.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Content accepted by FullCalendar's Solid-aware rendering hooks.  Return values follow Solid JSX semantics. FullCalendar's framework-neutral `true`, `{ html }`, and `{ domNodes }` forms are intentionally not supported; omit or unmount a content registration to restore FullCalendar
