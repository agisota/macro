---
type: C4 Component
title: System status keys
status: stable
groma:
  id: system-status-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/system-status/keys.ts
      symbol: systemStatusKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/system-status/status.ts
  technology: SolidJS
  group: Data queries
description: 'The platform status banner: the current status every user sees, kept live by `system_status` websocket broadcasts, plus the staff dashboard''s history and setter'
---

The platform status banner: the current status every user sees, kept live by `system_status` websocket broadcasts, plus the staff dashboard's history and setter.  Broadcasts keep open apps current; the interval only covers a missed one.
