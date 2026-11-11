---
type: C4 Component
title: Patch chat
status: stable
groma:
  id: queries-patch-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/patch_chat.rs
      symbol: patch_chat
  group: Chat
---
