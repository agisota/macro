---
type: C4 Component
title: Web module
status: stable
groma:
  id: debugsettings
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/debugSettings.ts
  technology: SolidJS
description: Part of the signed-in client
---

Local, client-only debug settings for internal staff.  Unlike PostHog feature flags (which are evaluated per-user via rollout), these are simple booleans an admin toggles for their own session — surfaced in the Admin settings panel and persisted to localStorage. They never touch
