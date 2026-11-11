---
type: C4 Component
title: Upsert message
status: stable
groma:
  id: contacts-upsert-message
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/contacts/upsert_message.rs
  group: Email db client
---
