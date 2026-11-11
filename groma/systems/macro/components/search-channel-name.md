---
type: C4 Component
title: Search channel name
status: stable
groma:
  id: search-channel-name
  parent: macro
  code:
    - scanner: rust
      file: crates/search_service_client/src/search_channel_name.rs
      symbol: search_channel_names
  group: Search service client
---
