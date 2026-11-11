---
type: C4 Component
title: Get chat
status: stable
groma:
  id: queries-get-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/get_chat.rs
      symbol: get_chat
  group: Chat
---
