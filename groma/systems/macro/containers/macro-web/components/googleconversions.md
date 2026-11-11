---
type: C4 Component
title: GoogleConversions
status: stable
groma:
  id: googleconversions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/googleConversions.ts
  technology: SolidJS
  group: Product analytics
description: Google Ads Conversion Action labels, keyed by semantic name
---

Google Ads Conversion Action labels, keyed by semantic name.  Unlike Meta — which has a fixed standard-event taxonomy — each Google Ads conversion is its own configured action in the Ads UI with its own `AW-{id}/{label}` send-target. Group these into a single Conversion Goal with all actions marked Primary so a campaign optimizes against the sum of their values.  Volume balance matters: Smart Bidding sums values acro
