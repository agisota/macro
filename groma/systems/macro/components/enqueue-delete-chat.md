---
type: C4 Component
title: Enqueue delete chat
status: stable
groma:
  id: enqueue-delete-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/sqs_client/src/chat/enqueue_delete_chat.rs
  group: Sqs client
---
