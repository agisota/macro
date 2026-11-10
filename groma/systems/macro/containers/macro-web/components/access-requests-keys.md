---
type: C4 Component
title: Keys
status: stable
groma:
  id: access-requests-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/access-requests/keys.ts
      symbol: accessRequestKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/access-requests/requests.ts
  technology: SolidJS
description: 'When an observer reads the state again: `mount` on every mount, since a cached state can predate an access change; `caller` only when the caller asks, for one t'
---

When an observer reads the state again: `mount` on every mount, since a cached state can predate an access change; `caller` only when the caller asks, for one that knows whether the cached state is current.
