---
type: C4 Component
title: Receive messages
status: stable
groma:
  id: receive-messages
  parent: macro
  code:
    - scanner: rust
      file: crates/sqs_worker/src/receive_messages.rs
      symbol: receive_messages
  group: Sqs worker
---
