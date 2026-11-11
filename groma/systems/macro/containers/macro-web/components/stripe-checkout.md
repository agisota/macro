---
type: C4 Component
title: Stripe checkout
status: stable
groma:
  id: stripe-checkout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/stripe-checkout.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-names.ts
      symbol: useUserNames
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/outlook-link.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/gmail-link.ts
      symbol: useInitGmailLink
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/mobile-welcome-email.ts
      symbol: useSendMobileWelcomeEmail
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/account-scope.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-name-self.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-language.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-info-cache.ts
      symbol: hasCachedUserIdentity
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-info.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/github-link.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/ai-billing.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/use-query-account.ts
      symbol: useQueryAccount
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/cursor-api-key.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/index.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/keys.ts
      symbol: authKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-name-cache-runtime.ts
      symbol: userNameCache
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-quota.ts
      symbol: invalidateUserQuota
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-name-cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/codex.ts
  technology: SolidJS
  group: Data queries
description: Confirm introductory eligibility before advertising or requesting a trial
---

Confirm introductory eligibility before advertising or requesting a trial.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/auth/ai-billing.ts](../../../../../../apps/web/src/lib/queries/auth/ai-billing.ts) | [apps/web/src/features/settings/Billing.tsx](../../../../../../apps/web/src/features/settings/Billing.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/github-link.ts](../../../../../../apps/web/src/lib/queries/auth/github-link.ts) | [apps/web/src/features/next-soup/soup-view/filters-bar/unified-filter-dropdown.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/filters-bar/unified-filter-dropdown.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/github-link.ts](../../../../../../apps/web/src/lib/queries/auth/github-link.ts) | [apps/web/src/features/reviews-view/components/RepositoriesPromotion.tsx](../../../../../../apps/web/src/features/reviews-view/components/RepositoriesPromotion.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/github-link.ts](../../../../../../apps/web/src/lib/queries/auth/github-link.ts) | [apps/web/src/features/reviews-view/reviews-view.tsx](../../../../../../apps/web/src/features/reviews-view/reviews-view.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/github-link.ts](../../../../../../apps/web/src/lib/queries/auth/github-link.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/PullRequestMention.tsx](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/PullRequestMention.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/stripe-checkout.ts](../../../../../../apps/web/src/lib/queries/auth/stripe-checkout.ts) | [apps/web/src/features/onboarding/create-app-onboarding-context.ts](../../../../../../apps/web/src/features/onboarding/create-app-onboarding-context.ts) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/stripe-checkout.ts](../../../../../../apps/web/src/lib/queries/auth/stripe-checkout.ts) | [apps/web/src/features/paywall/PaywallComponent.tsx](../../../../../../apps/web/src/features/paywall/PaywallComponent.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/stripe-checkout.ts](../../../../../../apps/web/src/lib/queries/auth/stripe-checkout.ts) | [apps/web/src/features/settings/Billing.tsx](../../../../../../apps/web/src/features/settings/Billing.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/lib/queries/auth/user-name-cache.ts](../../../../../../apps/web/src/lib/queries/auth/user-name-cache.ts) | [apps/web/src/lib/service-clients/service-auth/fetch.ts](../../../../../../apps/web/src/lib/service-clients/service-auth/fetch.ts) | Invokes supplied callback: onScopeChange | typescript |
| [apps/web/src/lib/queries/auth/user-names.ts](../../../../../../apps/web/src/lib/queries/auth/user-names.ts) | [apps/web/src/features/channel/Call/use-callkit.ts](../../../../../../apps/web/src/features/channel/Call/use-callkit.ts) | Invokes supplied callback: enabled | typescript |
