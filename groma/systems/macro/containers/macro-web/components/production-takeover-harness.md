---
type: C4 Component
title: Web module
status: stable
groma:
  id: production-takeover-harness
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-takeover-harness.ts
  technology: SolidJS
description: Part of the signed-in client
---

Tabs of three simulated builds share one scope and coordinator script URL. Each build must run its own coordinator over the one database. The newer build must take the database over without wiping it, and send the older build's tabs on; an even older build must be turned away.
