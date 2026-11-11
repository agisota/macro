---
type: C4 Component
title: Get message content
status: stable
groma:
  id: get-message-content
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/get_message_content.rs
      symbol: get_message_content
  group: Chat
---
