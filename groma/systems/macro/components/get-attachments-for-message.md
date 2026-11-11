---
type: C4 Component
title: Get attachments for message
status: stable
groma:
  id: get-attachments-for-message
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/dcs/get_attachments_for_message.rs
      symbol: get_attachments_for_message
  group: Macro db client
---
