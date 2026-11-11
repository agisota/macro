---
type: C4 Component
title: Delete chat message
status: stable
groma:
  id: delete-chat-message
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/dcs/delete_chat_message.rs
      symbol: delete_chat_message
  group: Macro db client
---
