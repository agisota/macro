---
type: C4 Component
title: Connect native
status: stable
groma:
  id: connect-native
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/connect-native.tsx
      symbol: openNativePipedreamConnectUI
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/connect-callback.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/slugs.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/flag.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/connect-ui.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/connection-context.ts
      symbol: AppConnectionContext
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/ConnectedAppIcon.tsx
      symbol: ConnectedAppIcon
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/ConnectorIcon.tsx
      symbol: PipedreamConnectorIcon
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/catalog.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/pendingConnect.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/connect-browser.ts
      symbol: mountPipedreamBrowserConnect
    - scanner: typescript
      file: apps/web/src/lib/core/pipedream/oauth-popup.ts
  technology: SolidJS
  group: Workspace core
description: 'Run consent in a browser: native popup interception breaks iframe OAuth'
---

Run consent in a browser: native popup interception breaks iframe OAuth.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/pipedream/catalog.ts](../../../../../../apps/web/src/lib/core/pipedream/catalog.ts) | [apps/web/src/features/onboarding/queries/tool-connect.ts](../../../../../../apps/web/src/features/onboarding/queries/tool-connect.ts) | Invokes supplied callback: entry | typescript |
| [apps/web/src/lib/core/pipedream/catalog.ts](../../../../../../apps/web/src/lib/core/pipedream/catalog.ts) | [apps/web/src/features/settings/connections/catalog-rows.tsx](../../../../../../apps/web/src/features/settings/connections/catalog-rows.tsx) | Invokes supplied callbacks: entry, onConnected | typescript |
| [apps/web/src/lib/core/pipedream/catalog.ts](../../../../../../apps/web/src/lib/core/pipedream/catalog.ts) | [apps/web/src/features/settings/connections/leftover-row.tsx](../../../../../../apps/web/src/features/settings/connections/leftover-row.tsx) | Invokes supplied callback: entry | typescript |
| [apps/web/src/lib/core/pipedream/catalog.ts](../../../../../../apps/web/src/lib/core/pipedream/catalog.ts) | [apps/web/src/features/settings/connections/PipedreamAiProvider.tsx](../../../../../../apps/web/src/features/settings/connections/PipedreamAiProvider.tsx) | Invokes supplied callbacks: entry, onConnected | typescript |
| [apps/web/src/lib/core/pipedream/catalog.ts](../../../../../../apps/web/src/lib/core/pipedream/catalog.ts) | [apps/web/src/features/settings/PipedreamAppPicker.tsx](../../../../../../apps/web/src/features/settings/PipedreamAppPicker.tsx) | Invokes supplied callback: entry | typescript |
