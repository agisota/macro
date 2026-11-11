---
type: C4 Component
title: Get contact by email
status: stable
groma:
  id: get-contact-by-email
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/axum_router/get_contact_by_email.rs
      symbol: handler
  group: Crm
---
