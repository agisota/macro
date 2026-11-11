---
type: C4 Component
title: Search contacts
status: stable
groma:
  id: search-contacts
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/axum_router/search_contacts.rs
      symbol: handler
  group: Crm
---
