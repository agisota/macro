---
type: C4 Component
title: Sample
status: stable
groma:
  id: sample
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/sample.ts
      symbol: signatureHtml
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/services.ts
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/account-sources.tsx
      symbol: AccountSources
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/fixture.tsx
  technology: SolidJS
description: Settings shell, tabs, team, and integrations page.
---

`SettingsPanelComponentWrapper` maps the slug with `settingsSlugToTab`, defaulting to Account, and does not remount when the tab changes. `SettingsRouteView` lazy-loads this feature (`lazy-route-views.ts:110-112`). `agents-view` lazy-loads `IntegrationsPage` from here (`agents-view/route-views.tsx:29-31`). `AppChrome` wraps authenticated chrome in `MobileSettingsProvider` from this feature (`Layout.tsx:29`).
