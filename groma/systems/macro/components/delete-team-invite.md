---
type: C4 Component
title: Delete team invite
status: stable
groma:
  id: delete-team-invite
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/delete_team_invite.rs
      symbol: handler
  group: Teams
---
