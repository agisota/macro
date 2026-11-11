---
type: C4 Component
title: Update
status: stable
groma:
  id: links-history-update
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/links_history/update.rs
      symbol: set_deleted_at
  group: Email db client
---
