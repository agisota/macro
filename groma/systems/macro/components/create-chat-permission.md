---
type: C4 Component
title: Create chat permission
status: stable
groma:
  id: create-chat-permission
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/create_chat_permission.rs
      symbol: create_chat_permission
  group: Chat
---
