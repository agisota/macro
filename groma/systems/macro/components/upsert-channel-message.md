---
type: C4 Component
title: Channel message
status: stable
groma:
  id: upsert-channel-message
  parent: macro
  code:
    - scanner: rust
      file: crates/opensearch_client/src/upsert/channel_message.rs
      symbol: upsert_channel_message
  group: Opensearch client
---
