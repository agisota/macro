---
type: C4 Component
title: Update message content
status: stable
groma:
  id: update-message-content
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/update_message_content.rs
      symbol: update_message_content
  group: Chat
---
