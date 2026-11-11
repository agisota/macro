---
type: C4 Component
title: Change message visibility
status: stable
groma:
  id: change-message-visibility
  parent: macro
  code:
    - scanner: rust
      file: crates/sqs_worker/src/change_message_visibility.rs
      symbol: change_message_visibility
  group: Sqs worker
---
