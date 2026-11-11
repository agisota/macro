---
type: C4 Component
title: Insert
status: stable
groma:
  id: links-insert
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/links/insert.rs
      symbol: upsert_link
  group: Email db client
---
