---
type: C4 Component
title: Set email sync
status: stable
groma:
  id: set-email-sync
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/axum_router/set_email_sync.rs
      symbol: handler
  group: Crm
---
