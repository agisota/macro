---
type: C4 Component
title: Upsert item last accessed
status: stable
groma:
  id: upsert-item-last-accessed
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/upsert_item_last_accessed.rs
      symbol: upsert_item_last_accessed
  group: Chat
---
