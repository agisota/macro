---
type: C4 Component
title: Delete
status: stable
groma:
  id: threads-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/threads/delete.rs
      symbol: delete_thread_if_empty
  group: Email db client
---
