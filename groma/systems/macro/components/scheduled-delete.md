---
type: C4 Component
title: Delete
status: stable
groma:
  id: scheduled-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/messages/scheduled/delete.rs
      symbol: delete_scheduled_message
  group: Email db client
---
