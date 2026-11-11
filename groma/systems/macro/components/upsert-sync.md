---
type: C4 Component
title: Upsert sync
status: stable
groma:
  id: upsert-sync
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/contacts/upsert_sync.rs
      symbol: upsert_contacts
  group: Email db client
---
