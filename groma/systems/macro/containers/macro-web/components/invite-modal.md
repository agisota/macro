---
type: C4 Component
title: Team invitations
status: stable
groma:
  id: invite-modal
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/team-invitations/invite-modal.tsx
  technology: SolidJS
description: '`/team-invite` acceptance page.'
---

`TeamInviteAcceptance` reads `id` or `link` and uses join, reject, and team queries. A link delegates to `TeamInviteLinkAcceptance`. The page is under `AuthShell` (`app-router-view.tsx:318`). It is not the in-app team settings screen; that lives in `settings`.
