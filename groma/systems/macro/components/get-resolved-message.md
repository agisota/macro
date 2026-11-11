---
type: C4 Component
title: Get resolved message
status: stable
groma:
  id: get-resolved-message
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/get_resolved_message.rs
      symbol: get_resolved_message
  group: Chat
---
