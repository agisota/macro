---
type: C4 Component
title: service stripe
status: stable
groma:
  id: service-stripe-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-stripe/client.ts
      symbol: stripeServiceClient
  technology: TypeScript
  group: Service clients
description: Client for the service stripe host
---

Gets Meta _fbp (browser ID) and _fbc (click ID) values from cookies set by the Meta Pixel.
