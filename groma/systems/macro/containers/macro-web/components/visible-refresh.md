---
type: C4 Component
title: Web module
status: stable
groma:
  id: visible-refresh
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/visible-refresh.ts
  technology: SolidJS
description: Part of the signed-in client
---

Throttles refreshes while visible. Hidden tabs retain one dirty bit instead of repeatedly reading; becoming visible refreshes once against the latest state. Async refreshes finish before one dirty follow-up runs, so a busy source cannot continually cancel its readers. With `refre
