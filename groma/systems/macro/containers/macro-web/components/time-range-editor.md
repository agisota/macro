---
type: C4 Component
title: Time range editor
status: stable
groma:
  id: time-range-editor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/date-time-range/time-range-editor.tsx
      symbol: TimeRangeEditor
  technology: SolidJS
description: Time range editor inside the signed-in client.
---

Edits a stored time range in a menu or popover, on one row: Start → End fields, All day, and a Clear icon. Every change that leaves a complete range in order saves at once; one ending before it starts is shown, never saved. The host closes it, and should give its content `portal-
