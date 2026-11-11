---
type: C4 Component
title: Read chat
status: stable
groma:
  id: read-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/inbound/toolset/read_chat.rs
      symbol: call
  group: Chat
---
