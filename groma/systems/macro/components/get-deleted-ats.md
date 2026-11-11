---
type: C4 Component
title: Get deleted ats
status: stable
groma:
  id: get-deleted-ats
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/messages/get_deleted_ats.rs
      symbol: get_message_deletion_states
  group: Comms db client
---
