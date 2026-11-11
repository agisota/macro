---
type: C4 Component
title: Core checkout
status: stable
groma:
  id: checkout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/checkout.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/context/onboarding-context.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/connected-tools.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/routine-suggestions.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/email-accounts.ts
  technology: SolidJS
  group: Shell
description: Desktop onboarding steps after signup.
---

Agents are redirected to `/` and never onboard, even if they open the link. The requested step is captured once, then removed from the URL so later progress wins on reload. `auth/auth.tsx` imports `Onboarding` from this file. `AppChrome` uses `onboardingRedirectPath` from `onboarding/core/next-target` (`Layout.tsx:26`, `Layout.tsx:251`).
