---
type: C4 Component
title: Get user teams
status: stable
groma:
  id: get-user-teams
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/get_user_teams.rs
      symbol: handler
  group: Teams
---
