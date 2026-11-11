---
type: C4 Component
title: Delete
status: stable
groma:
  id: contacts-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/contacts/delete.rs
      symbol: delete_message_recipients
  group: Email db client
---
