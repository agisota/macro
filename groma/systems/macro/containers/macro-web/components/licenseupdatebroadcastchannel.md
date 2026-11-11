---
type: C4 Component
title: LicenseUpdateBroadcastChannel
status: stable
groma:
  id: licenseupdatebroadcastchannel
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/util/licenseUpdateBroadcastChannel.ts
      symbol: licenseChannel
    - scanner: typescript
      file: apps/web/src/lib/core/util/whenSettled.ts
      symbol: whenSettled
    - scanner: typescript
      file: apps/web/src/lib/core/util/authRedirect.ts
      symbol: RedirectLocation
  technology: SolidJS
  group: Workspace core
description: Publish time
---

Publish time. Makes each payload unique so the bus's storage fallback fires (see `cross-tab-bus.ts`). Optional only for consistency with the other buses — this channel had no publishers before the bus migration (the legacy string interface was never called), so unlike the favicon and login-success buses there is no older payload shape to accept.
