---
type: C4 Component
title: Web module
status: stable
groma:
  id: gtm-invite-links
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/gtm-invite/links.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/gtm-invite/keys.ts
      symbol: gtmInviteKeys
  technology: SolidJS
description: Part of the signed-in client
---

Queries and mutations for GTM invite links: the staff dashboard (create, list, revoke), the public welcome page (resolve), and the signup handoff (redeem, then the offer the plan step shows).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/gtm-invite/links.ts](../../../../../../apps/web/src/lib/queries/gtm-invite/links.ts) | [apps/web/src/features/onboarding/create-app-onboarding-context.ts](../../../../../../apps/web/src/features/onboarding/create-app-onboarding-context.ts) | Invokes supplied callback: enabled | typescript |
