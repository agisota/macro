---
type: C4 Component
title: Account manager account manager page
status: stable
groma:
  id: account-manager-page
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/account-manager/account-manager-page.tsx
      symbol: AccountManagerPage
  technology: SolidJS
  group: Settings
description: Account-manager grant review page.
---

`AccountManagerPage` reads `grantId` and renders `AccountManagerCard`. The route is `account-manager/:grantId` under `AuthShell` (`routes/routes.ts:138-144`, `app-router-view.tsx:281-283`). The card comment, seen in an earlier search of the same directory, says it shows what happened to one request and what the viewer can do next.
