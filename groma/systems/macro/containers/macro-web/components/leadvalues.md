---
type: C4 Component
title: LeadValues
status: stable
groma:
  id: leadvalues
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/leadValues.ts
  technology: SolidJS
description: LeadValues inside the signed-in client.
---

USD values attached to Meta `Lead` fires. Meta's Value Optimization weighs each Lead by the `value` we declare, so these numbers directly shape which audiences Meta favors. Tune here; both call sites read from this file.  Corresponding server-side values (cal.com bookings) live i
