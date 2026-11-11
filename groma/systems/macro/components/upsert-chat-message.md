---
type: C4 Component
title: Chat message
status: stable
groma:
  id: upsert-chat-message
  parent: macro
  code:
    - scanner: rust
      file: crates/opensearch_client/src/upsert/chat_message.rs
  group: Opensearch client
---
