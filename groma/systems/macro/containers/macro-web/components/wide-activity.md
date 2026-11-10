---
type: C4 Component
title: Web module
status: stable
groma:
  id: wide-activity
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/icon/wide-activity.tsx
      symbol: AnimatedActivityIcon
  technology: SolidJS
description: Part of the signed-in client
---

Activity (pulse/EKG) icon. On trigger the pulse line redraws itself left-to-right, like a live heartbeat trace.
