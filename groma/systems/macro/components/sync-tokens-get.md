---
type: C4 Component
title: Get
status: stable
groma:
  id: sync-tokens-get
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/sync_tokens/get.rs
      symbol: get_sync_tokens_by_link_id
  group: Email db client
---
