---
type: C4 Component
title: MobileCaptureIdentity
status: stable
groma:
  id: mobilecaptureidentity
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/mobileCaptureIdentity.ts
  technology: SolidJS
  group: Product analytics
description: Identity payload for the phone email-capture flow
---

Identity payload for the phone email-capture flow.  The marketing site has a copy in `apps/marketing/src/app/utils/utilMobileCaptureIdentity.ts`. Keep the two in step: the site cannot import the app.
