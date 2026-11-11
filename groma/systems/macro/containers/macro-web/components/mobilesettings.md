---
type: C4 Component
title: MobileSettings
status: stable
groma:
  id: mobilesettings
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/settings/MobileSettings.tsx
      symbol: MobileSettings
  technology: SolidJS
  group: Settings
description: Settings shell, tabs, team, and integrations page.
---

`SettingsPanelComponentWrapper` maps the slug with `settingsSlugToTab`, defaulting to Account, and does not remount when the tab changes. `SettingsRouteView` lazy-loads this feature (`lazy-route-views.ts:110-112`). `agents-view` lazy-loads `IntegrationsPage` from here (`agents-view/route-views.tsx:29-31`). `AppChrome` wraps authenticated chrome in `MobileSettingsProvider` from this feature (`Layout.tsx:29`).
