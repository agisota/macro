---
type: C4 Component
title: Paywall
status: stable
groma:
  id: paywall-dialog
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/paywall/components/paywall-dialog.tsx
      symbol: PaywallDialog
    - scanner: typescript
      file: apps/web/src/features/paywall/plans.ts
    - scanner: typescript
      file: apps/web/src/features/paywall/ai-usage-preview.ts
      symbol: useAiUsagePreview
    - scanner: typescript
      file: apps/web/src/features/paywall/ai-usage-limit-handling.ts
    - scanner: typescript
      file: apps/web/src/features/paywall/components/paywall-view.tsx
      symbol: PaywallView
    - scanner: typescript
      file: apps/web/src/features/paywall/components/ai-usage-limit-dialog.tsx
  technology: SolidJS
description: Plan upgrade dialog and checkout return listener.
---

`Paywall.tsx` reads `usePaywallState` and focuses the active split when the dialog hides. `AppChrome` mounts `AiUsageLimitDialog` when the usage-limit signal is open (`Layout.tsx:201`). `BasePath` uses `useCheckoutCompletionListener` from this feature before redirecting (`BasePath.tsx:2`, `BasePath.tsx:97`). `usage` imports `useAiUsagePreview` from here (`usage/usage.tsx:22`).
