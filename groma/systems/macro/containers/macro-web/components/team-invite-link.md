---
type: C4 Component
title: Invite link
status: stable
groma:
  id: team-invite-link
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/team/invite-link.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/team/invitations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/team/keys.ts
      symbol: teamKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/team/invites.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/team/members.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/team/referrals.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/team/teams.ts
  technology: SolidJS
  group: Data queries
description: The team's invite link token, or null when the team has none
---

The team's invite link token, or null when the team has none.
