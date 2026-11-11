---
type: C4 Component
title: Set contact name
status: stable
groma:
  id: set-contact-name
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/axum_router/set_contact_name.rs
      symbol: handler
  group: Crm
---
