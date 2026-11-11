---
type: C4 Component
title: Contacts enqueuer
status: stable
groma:
  id: domain-contacts-enqueuer
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/domain/contacts_enqueuer.rs
      symbol: enqueue_contact_connections
  group: Teams
---
