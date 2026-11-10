---
type: C4 Component
title: Web module
status: stable
groma:
  id: gantt-time
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-time.ts
  technology: SolidJS
description: Part of the signed-in client
---

Times of day on the Gantt calendar. A position is a day ordinal plus the share of that local day elapsed, so a 23- or 25-hour daylight-saving day still fills exactly one day's width.
