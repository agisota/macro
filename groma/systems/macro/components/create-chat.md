---
type: C4 Component
title: Create chat
status: stable
groma:
  id: create-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/dcs/create_chat.rs
      symbol: create_chat_v2
  group: Macro db client
---
