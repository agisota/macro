---
type: C4 Component
title: Insert chat
status: stable
groma:
  id: insert-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/insert_chat.rs
      symbol: insert_chat
  group: Chat
---
