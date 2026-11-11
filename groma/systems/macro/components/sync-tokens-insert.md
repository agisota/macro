---
type: C4 Component
title: Insert
status: stable
groma:
  id: sync-tokens-insert
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/sync_tokens/insert.rs
      symbol: insert_sync_tokens
  group: Email db client
---
