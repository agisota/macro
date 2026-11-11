---
type: C4 Component
title: UseReactiveFavicon
status: stable
groma:
  id: usereactivefavicon
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/useReactiveFavicon.ts
      symbol: useReactiveFavicon
  technology: SolidJS
description: UseReactiveFavicon inside the signed-in client.
---

Publish time. Not read by subscribers; it makes each payload unique so the bus's storage fallback fires (see `cross-tab-bus.ts`). Optional so payloads from tabs still on a pre-bus bundle, which omit it, parse.
