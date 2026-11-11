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
  group: Product analytics
description: USD values attached to Meta `Lead` fires
---

USD values attached to Meta `Lead` fires. Meta's Value Optimization weighs each Lead by the `value` we declare, so these numbers directly shape which audiences Meta favors. Tune here; both call sites read from this file.  Corresponding server-side values (cal.com bookings) live in the `CAL_EVENT_TYPE_CONTENT_NAMES_KEY` secret — keep the two in sync when rebalancing.
