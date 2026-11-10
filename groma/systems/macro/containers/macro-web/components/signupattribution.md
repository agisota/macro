---
type: C4 Component
title: Web module
status: stable
groma:
  id: signupattribution
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/signupAttribution.ts
  technology: SolidJS
description: Part of the signed-in client
---

Ad parameters forwarded from the page that captured a mobile email onto the desktop signup link. Keep this in step with `MobileWelcomeAttribution` in the auth service and `ATTRIBUTION_PARAMS` on the marketing site.
