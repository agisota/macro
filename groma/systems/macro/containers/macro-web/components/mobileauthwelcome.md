---
type: C4 Component
title: Mobile onboarding
status: stable
groma:
  id: mobileauthwelcome
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/mobile-onboarding/MobileAuthWelcome.tsx
      symbol: MobileAuthWelcome
    - scanner: typescript
      file: apps/web/src/features/mobile-onboarding/OnboardingInbox.tsx
      symbol: OnboardingInbox
    - scanner: typescript
      file: apps/web/src/features/mobile-onboarding/OnboardingCreateAccount.tsx
      symbol: OnboardingCreateAccount
    - scanner: typescript
      file: apps/web/src/features/mobile-onboarding/OnboardingConnectAccounts.tsx
      symbol: OnboardingConnectAccounts
    - scanner: typescript
      file: apps/web/src/features/mobile-onboarding/MobileOnboarding.tsx
      symbol: MobileOnboarding
  technology: SolidJS
description: Native/mobile onboarding stepper.
---

Steps run from create-account (0) through a last step of 2. The opened comment explains a scale transition that must not use `mode: 'outin'`, because a missed `transitionend` leaves a blank step. `AppChrome` returns early for mobile before the desktop onboarding redirect (`Layout.tsx:245`).
