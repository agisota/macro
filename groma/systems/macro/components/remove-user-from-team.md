---
type: C4 Component
title: Remove user from team
status: stable
groma:
  id: remove-user-from-team
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/remove_user_from_team.rs
      symbol: handler
  group: Teams
---
