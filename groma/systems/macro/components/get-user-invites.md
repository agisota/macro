---
type: C4 Component
title: Get user invites
status: stable
groma:
  id: get-user-invites
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/get_user_invites.rs
      symbol: handler
  group: Teams
---
