---
type: C4 Component
title: SignupAttribution
status: stable
groma:
  id: signupattribution
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/signupAttribution.ts
  technology: SolidJS
description: SignupAttribution inside the signed-in client.
---

Ad parameters forwarded from the page that captured a mobile email onto the desktop signup link. Keep this in step with `MobileWelcomeAttribution` in the auth service and `ATTRIBUTION_PARAMS` on the marketing site.
