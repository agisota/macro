---
type: C4 Component
title: Marketing page
status: stable
groma:
  id: verify-seo-live
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/scripts/verify-seo-live.ts
  technology: SolidJS
description: Public site page or component
---

Run against the candidate CDN before cutover, then the public origin after it. No JS, cookies or authentication: this tests the response a crawler receives.
