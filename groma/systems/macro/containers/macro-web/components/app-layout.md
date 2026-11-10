---
type: C4 Component
title: Web module
status: stable
groma:
  id: app-layout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/Layout.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Source under apps/web/src/components/app/Layout.tsx.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/app/Layout.tsx](../../../../../../apps/web/src/components/app/Layout.tsx) | [apps/web/src/features/command/Launcher.tsx](../../../../../../apps/web/src/features/command/Launcher.tsx) | mounts create launcher | solid-js |
| [apps/web/src/components/app/Layout.tsx](../../../../../../apps/web/src/components/app/Layout.tsx) | [apps/web/src/features/devtools/DevStatusBar.tsx](../../../../../../apps/web/src/features/devtools/DevStatusBar.tsx) | mounts dev status bar | solid-js |
| [apps/web/src/components/app/Layout.tsx](../../../../../../apps/web/src/components/app/Layout.tsx) | [apps/web/src/features/inbox/AddInboxDialog.tsx](../../../../../../apps/web/src/features/inbox/AddInboxDialog.tsx) | mounts add-inbox dialog | solid-js |
| [apps/web/src/components/app/Layout.tsx](../../../../../../apps/web/src/components/app/Layout.tsx) | [apps/web/src/features/paywall/AiUsageLimitDialog.tsx](../../../../../../apps/web/src/features/paywall/AiUsageLimitDialog.tsx) | mounts AI usage limit | solid-js |
| [apps/web/src/components/app/Layout.tsx](../../../../../../apps/web/src/components/app/Layout.tsx) | [apps/web/src/features/channel/CreateChannelModal.tsx](../../../../../../apps/web/src/features/channel/CreateChannelModal.tsx) | mounts create-channel modal | solid-js |
| [apps/web/src/components/app/Layout.tsx](../../../../../../apps/web/src/components/app/Layout.tsx) | [apps/web/src/features/onboarding/core/next-target.ts](../../../../../../apps/web/src/features/onboarding/core/next-target.ts) | redirects unfinished desktop tutorial | solid-router |
