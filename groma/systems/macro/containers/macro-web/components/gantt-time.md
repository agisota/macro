---
type: C4 Component
title: Gantt time
status: stable
groma:
  id: gantt-time
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-time.ts
  technology: SolidJS
  group: Gantt
description: Times of day on the Gantt calendar
---

Times of day on the Gantt calendar. A position is a day ordinal plus the share of that local day elapsed, so a 23- or 25-hour daylight-saving day still fills exactly one day's width.
