---
type: C4 Component
title: Patch team crm settings
status: stable
groma:
  id: patch-team-crm-settings
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/patch_team_crm_settings.rs
      symbol: handler
  group: Teams
---
