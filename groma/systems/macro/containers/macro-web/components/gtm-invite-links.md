---
type: C4 Component
title: Gtm invite links
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
  group: Data queries
description: 'Queries and mutations for GTM invite links: the staff dashboard (create, list, revoke), the public welcome page (resolve), and the signup ha'
---

Queries and mutations for GTM invite links: the staff dashboard (create, list, revoke), the public welcome page (resolve), and the signup handoff (redeem, then the offer the plan step shows).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/gtm-invite/links.ts](../../../../../../apps/web/src/lib/queries/gtm-invite/links.ts) | [apps/web/src/features/onboarding/create-app-onboarding-context.ts](../../../../../../apps/web/src/features/onboarding/create-app-onboarding-context.ts) | Invokes supplied callback: enabled | typescript |
