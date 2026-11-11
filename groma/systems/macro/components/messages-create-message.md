---
type: C4 Component
title: Create message
status: stable
groma:
  id: messages-create-message
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/messages/create_message.rs
      symbol: create_message
  group: Comms db client
---
