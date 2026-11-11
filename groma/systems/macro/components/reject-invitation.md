---
type: C4 Component
title: Reject invitation
status: stable
groma:
  id: reject-invitation
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/axum_router/reject_invitation.rs
      symbol: handler
  group: Teams
---
