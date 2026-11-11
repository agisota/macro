---
type: C4 Component
title: Paywall Paywall
status: stable
groma:
  id: paywall
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/paywall/Paywall.tsx
      symbol: Paywall
    - scanner: typescript
      file: apps/web/src/features/paywall/AiUsageLimitDialog.tsx
      symbol: AiUsageLimitDialog
    - scanner: typescript
      file: apps/web/src/features/paywall/use-checkout-completion-listener.ts
      symbol: useCheckoutCompletionListener
    - scanner: typescript
      file: apps/web/src/features/paywall/PaywallComponent.tsx
  technology: SolidJS
description: Plan upgrade dialog and checkout return listener.
---

`Paywall.tsx` reads `usePaywallState` and focuses the active split when the dialog hides. `AppChrome` mounts `AiUsageLimitDialog` when the usage-limit signal is open (`Layout.tsx:201`). `BasePath` uses `useCheckoutCompletionListener` from this feature before redirecting (`BasePath.tsx:2`, `BasePath.tsx:97`). `usage` imports `useAiUsagePreview` from here (`usage/usage.tsx:22`).
