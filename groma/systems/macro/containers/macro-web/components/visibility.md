---
type: C4 Component
title: Crm
status: stable
groma:
  id: visibility
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/visibility.tsx
  technology: SolidJS
description: Customers workspace.
---

The readme says app code must import root entry points, not `views`, `primitives`, or `queries` directly. Opening a company or contact clears row notifications through `features/notifications/mark-row-seen.ts`. `CompaniesRouteView` lazy-loads `crm/route-views` (`lazy-route-views.ts:50-52`). `CommandMenu` imports `useCrmContactDiscovery` from `crm/record-adapter` (`command/CommandMenu.tsx:2`). `Layout.tsx` imports `companyCreation` and `contactCreation` from `crm/creation-adapter` (`Layout.tsx:16-18`).
