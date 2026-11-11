---
type: C4 Component
title: Delete message
status: stable
groma:
  id: src-delete-message
  parent: macro
  code:
    - scanner: rust
      file: crates/sqs_worker/src/delete_message.rs
      symbol: delete_message
  group: Sqs worker
---
