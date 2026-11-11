---
type: C4 Component
title: Patch
status: stable
groma:
  id: chat-patch
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/chat/patch.rs
      symbol: update_chat_token_count
  group: Macro db client
---
