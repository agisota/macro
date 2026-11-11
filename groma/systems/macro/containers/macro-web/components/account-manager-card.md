---
type: C4 Component
title: Account manager account manager card
status: stable
groma:
  id: account-manager-card
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/account-manager/account-manager-card.tsx
      symbol: AccountManagerCard
    - scanner: typescript
      file: apps/web/src/features/account-manager/account-manager-card-frame.tsx
      symbol: AccountManagerCardFrame
    - scanner: typescript
      file: apps/web/src/features/account-manager/account-manager-request-button.tsx
      symbol: AccountManagerRequestButton
  technology: SolidJS
description: Account-manager grant review page.
---

`AccountManagerPage` reads `grantId` and renders `AccountManagerCard`. The route is `account-manager/:grantId` under `AuthShell` (`routes/routes.ts:138-144`, `app-router-view.tsx:281-283`). The card comment, seen in an earlier search of the same directory, says it shows what happened to one request and what the viewer can do next.
