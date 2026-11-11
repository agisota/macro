---
type: C4 Component
title: Mutation
status: stable
groma:
  id: attachments-mutation
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/attachments/mutation.rs
      symbol: lock_editable_attachment_message
  group: Email db client
---
