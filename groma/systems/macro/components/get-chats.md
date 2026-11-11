---
type: C4 Component
title: Get chats
status: stable
groma:
  id: get-chats
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/dcs/get_chats.rs
      symbol: get_chats
  group: Macro db client
---
