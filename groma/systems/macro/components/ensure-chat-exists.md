---
type: C4 Component
title: Ensure chat exists
status: stable
groma:
  id: ensure-chat-exists
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_middleware/src/cloud_storage/chat/ensure_chat_exists.rs
  group: Macro middleware
---
