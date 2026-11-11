---
type: C4 Component
title: SignupCompletion
status: stable
groma:
  id: signupcompletion
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/signupCompletion.ts
      symbol: trackSignupCompletion
  technology: SolidJS
  group: Product analytics
description: Signup-completion tracking
---

Signup-completion tracking.  `sign_up` used to fire only from the /signup page, *before* redirecting to SSO — so it counted intent rather than created accounts, and missed everyone who signed up through the regular SSO sign-in (which is where the website sends people). The ad-platform conversions were even further off: they fired when the (now optional) interactive tutorial modal closed.  The authoritative signup eve
