---
type: C4 Component
title: Usage
status: stable
groma:
  id: core-usage
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/usage/core/usage.ts
    - scanner: typescript
      file: apps/web/src/features/usage/components/usage-info-dialog.tsx
      symbol: UsageInfoDialog
    - scanner: typescript
      file: apps/web/src/features/usage/usage.tsx
      symbol: Usage
    - scanner: typescript
      file: apps/web/src/features/usage/components/auto-reload-dialog.tsx
      symbol: AutoReloadDialog
    - scanner: typescript
      file: apps/web/src/features/usage/views/usage-settings.tsx
      symbol: UsageSettingsView
    - scanner: typescript
      file: apps/web/src/features/usage/components/credit-purchase-dialog.tsx
      symbol: CreditPurchaseDialog
    - scanner: typescript
      file: apps/web/src/features/usage/components/auto-reload-limit-notice.tsx
      symbol: AutoReloadLimitNotice
    - scanner: typescript
      file: apps/web/src/features/usage/primitives/auto-reload-form.ts
      symbol: createAutoReloadForm
    - scanner: typescript
      file: apps/web/src/features/usage/components/monthly-limit.tsx
      symbol: MonthlyLimit
    - scanner: typescript
      file: apps/web/src/features/usage/views/credit-purchase.tsx
      symbol: CreditPurchaseView
    - scanner: typescript
      file: apps/web/src/features/usage/views/auto-reload.tsx
      symbol: AutoReloadView
    - scanner: typescript
      file: apps/web/src/features/usage/context/usage-context.ts
      symbol: UsageContext
    - scanner: typescript
      file: apps/web/src/features/usage/queries/usage-summary.ts
      symbol: toUsageSummary
  technology: SolidJS
description: Usage settings screen.
---

`usage.tsx` loads AI billing plans and summary, credit checkout, the billing portal, and auto-reload mutations from `@queries/auth`. It is gated by `enableAiUsageBilling`. Preview state comes from `paywall/ai-usage-preview`. `billing-lab` says this UI can be opened from Settings → Usage → Developer tools (`billing-lab/README.md:15-16`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/usage/usage.tsx](../../../../../../apps/web/src/features/usage/usage.tsx) | [apps/web/src/features/paywall/ai-usage-preview.ts](../../../../../../apps/web/src/features/paywall/ai-usage-preview.ts) | reads usage preview | hook import |
