---
type: C4 Component
title: Toggle auto join domain
status: stable
groma:
  id: toggle-auto-join-domain
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/toggle_auto_join_domain.rs
      symbol: handler
  group: Teams
---
