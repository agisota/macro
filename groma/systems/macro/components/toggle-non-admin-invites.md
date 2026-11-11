---
type: C4 Component
title: Toggle non admin invites
status: stable
groma:
  id: toggle-non-admin-invites
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/toggle_non_admin_invites.rs
      symbol: handler
  group: Teams
---
