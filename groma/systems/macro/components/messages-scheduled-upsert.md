---
type: C4 Component
title: Upsert
status: stable
groma:
  id: messages-scheduled-upsert
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/messages/scheduled/upsert.rs
  group: Email db client
---
