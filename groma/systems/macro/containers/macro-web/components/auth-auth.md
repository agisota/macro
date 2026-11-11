---
type: C4 Component
title: Auth
status: stable
groma:
  id: auth-auth
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/auth/auth.tsx
    - scanner: typescript
      file: apps/web/src/features/auth/components/login-picker.tsx
      symbol: LoginPicker
    - scanner: typescript
      file: apps/web/src/features/auth/components/mobile-web-welcome.tsx
      symbol: MobileWebWelcome
    - scanner: typescript
      file: apps/web/src/features/auth/views/auth-view.tsx
    - scanner: typescript
      file: apps/web/src/features/auth/context/auth-context.tsx
    - scanner: typescript
      file: apps/web/src/features/auth/banner/Banner.tsx
      symbol: Banner
    - scanner: typescript
      file: apps/web/src/features/auth/components/login-card.tsx
      symbol: LoginCard
    - scanner: typescript
      file: apps/web/src/features/auth/components/email-form.tsx
      symbol: EmailForm
    - scanner: typescript
      file: apps/web/src/features/auth/create-app-auth-context.ts
      symbol: createAppAuthContext
    - scanner: typescript
      file: apps/web/src/features/auth/primitives/email-login.ts
    - scanner: typescript
      file: apps/web/src/features/auth/GithubReauthenticationPrompt.tsx
      symbol: GithubReauthenticationPrompt
    - scanner: typescript
      file: apps/web/src/features/auth/views/mobile-web-signup-view.tsx
      symbol: MobileWebSignupView
    - scanner: typescript
      file: apps/web/src/features/auth/primitives/mobile-signup.ts
      symbol: createMobileSignup
    - scanner: typescript
      file: apps/web/src/features/auth/GmailReauthenticationPrompt.tsx
      symbol: GmailReauthenticationPrompt
    - scanner: typescript
      file: apps/web/src/features/auth/queries/auth-requests.ts
    - scanner: typescript
      file: apps/web/src/features/auth/core/mobile-welcome.ts
    - scanner: typescript
      file: apps/web/src/features/auth/primitives/session.ts
    - scanner: typescript
      file: apps/web/src/features/auth/components/verify-form.tsx
      symbol: VerifyForm
    - scanner: typescript
      file: apps/web/src/features/auth/core/email-code.ts
    - scanner: typescript
      file: apps/web/src/features/auth/components/form-fields.tsx
    - scanner: typescript
      file: apps/web/src/features/auth/useSsoLogin.ts
      symbol: useSsoLogin
    - scanner: typescript
      file: apps/web/src/features/auth/components/mobile-web-signup-sent.tsx
      symbol: MobileWebSignupSent
    - scanner: typescript
      file: apps/web/src/features/auth/core/sso-fallback.ts
      symbol: ssoFallbackNotice
    - scanner: typescript
      file: apps/web/src/features/auth/CalendarPermissionPrompt.tsx
      symbol: CalendarPermissionPrompt
    - scanner: typescript
      file: apps/web/src/features/auth/EmailAuth.tsx
      symbol: makeEmailAuthComponents
    - scanner: typescript
      file: apps/web/src/features/auth/components/otp-input.tsx
      symbol: OtpInput
    - scanner: typescript
      file: apps/web/src/features/auth/core/post-auth-target.ts
  technology: SolidJS
  group: Shell
description: Sign-in, signup, and reauthentication prompts.
---

`Login` wraps `AuthView` in `AuthProvider`. Desktop signup can render onboarding in place via `onboarding/onboarding`. Mobile web signup is a separate view. `AppChrome` imports Gmail, GitHub, and calendar reauthentication prompts from this feature (`Layout.tsx:4-6`). `AgentSignup` and `MobileWebSignup` are mounted on auth routes (`app-router-view.tsx:3`, `app-router-view.tsx:280-306`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/auth/auth.tsx](../../../../../../apps/web/src/features/auth/auth.tsx) | [apps/web/src/features/onboarding/onboarding.tsx](../../../../../../apps/web/src/features/onboarding/onboarding.tsx) | continues desktop signup into onboarding | component import |
