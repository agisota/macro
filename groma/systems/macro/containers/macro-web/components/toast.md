---
type: C4 Component
title: Toast
status: stable
groma:
  id: toast
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/Toast/Toast.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts
      symbol: useKeyedPersistentToasts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Toast/ToastRegion.tsx
      symbol: ToastRegion
    - scanner: typescript
      file: apps/web/src/lib/core/component/Toast/create-mobile-toast-swipe.ts
      symbol: createMobileToastSwipe
  technology: SolidJS
  group: Workspace core
description: A single entry in the actions row — icon and label rendered as a button
---

A single entry in the actions row — icon and label rendered as a button

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts](../../../../../../apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts) | [apps/web/src/features/auth/CalendarPermissionPrompt.tsx](../../../../../../apps/web/src/features/auth/CalendarPermissionPrompt.tsx) | Invokes supplied callbacks: items, itemsLoaded, key, toast | typescript |
| [apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts](../../../../../../apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts) | [apps/web/src/features/auth/GithubReauthenticationPrompt.tsx](../../../../../../apps/web/src/features/auth/GithubReauthenticationPrompt.tsx) | Invokes supplied callbacks: items, key, toast | typescript |
| [apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts](../../../../../../apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts) | [apps/web/src/features/auth/GmailReauthenticationPrompt.tsx](../../../../../../apps/web/src/features/auth/GmailReauthenticationPrompt.tsx) | Invokes supplied callbacks: items, key, toast | typescript |
| [apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts](../../../../../../apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts) | [apps/web/src/features/local-runtime/local-runtime-host.tsx](../../../../../../apps/web/src/features/local-runtime/local-runtime-host.tsx) | Invokes supplied callbacks: items, itemsLoaded, key, toast | typescript |
| [apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts](../../../../../../apps/web/src/lib/core/component/Toast/useKeyedPersistentToasts.ts) | [apps/web/src/features/whatsapp-linked/components/history-import-prompt.tsx](../../../../../../apps/web/src/features/whatsapp-linked/components/history-import-prompt.tsx) | Invokes supplied callbacks: items, itemsLoaded, key, toast | typescript |
