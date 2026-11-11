---
type: C4 Component
title: Upsert user history
status: stable
groma:
  id: upsert-user-history
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/upsert_user_history.rs
      symbol: upsert_user_history
  group: Chat
---
