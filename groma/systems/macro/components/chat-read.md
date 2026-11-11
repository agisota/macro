---
type: C4 Component
title: Read
status: stable
groma:
  id: chat-read
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/chat/read.rs
      symbol: get_user_messages
  group: Macro db client
---
