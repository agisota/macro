---
type: C4 Component
title: Set contact email
status: stable
groma:
  id: set-contact-email
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/axum_router/set_contact_email.rs
      symbol: handler
  group: Crm
---
