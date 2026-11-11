---
type: C4 Component
title: Account managers
status: stable
groma:
  id: account-managers
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/account-managers/account-managers.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/account-managers/keys.ts
      symbol: accountManagerKeys
  technology: SolidJS
description: Account managers inside the signed-in client.
---

The other account changes this grant, so a cached status can be wrong when a card or the approval link opens.
