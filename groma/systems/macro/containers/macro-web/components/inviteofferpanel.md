---
type: C4 Component
title: Gtm invite
status: stable
groma:
  id: inviteofferpanel
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/gtm-invite/InviteOfferPanel.tsx
      symbol: InviteOfferPanel
    - scanner: typescript
      file: apps/web/src/features/gtm-invite/InviteLinksPortal.tsx
      symbol: InviteLinksPortal
    - scanner: typescript
      file: apps/web/src/features/gtm-invite/usePendingInviteRedemption.ts
      symbol: usePendingInviteRedemption
    - scanner: typescript
      file: apps/web/src/features/gtm-invite/InviteWelcome.tsx
      symbol: InviteWelcome
    - scanner: typescript
      file: apps/web/src/features/gtm-invite/core/invite-link.ts
  technology: SolidJS
description: GTM invite welcome and staff invite-link portal.
---

`InviteWelcome` classifies the token as missing, loading, invalid, expired, revoked, used, or welcome. `Root.tsx` calls `usePendingInviteRedemption` so a signup that started from an invite finishes attribution on the first authenticated load (`Root.tsx:2`, `Root.tsx:119-122`). `/invite` and `/internal/invite-links` are auth-shell routes (`app-router-view.tsx:309-312`).
