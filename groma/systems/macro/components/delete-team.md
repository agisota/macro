---
type: C4 Component
title: Delete team
status: stable
groma:
  id: delete-team
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/delete_team.rs
      symbol: handler
  group: Teams
---
