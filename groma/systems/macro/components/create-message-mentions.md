---
type: C4 Component
title: Create message mentions
status: stable
groma:
  id: create-message-mentions
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/messages/create_message_mentions.rs
      symbol: create_message_mentions
  group: Comms db client
---
