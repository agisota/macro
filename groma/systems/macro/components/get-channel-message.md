---
type: C4 Component
title: Get channel message
status: stable
groma:
  id: get-channel-message
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/messages/get_channel_message.rs
      symbol: get_channel_message_by_id
  group: Comms db client
---
