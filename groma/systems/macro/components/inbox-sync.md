---
type: C4 Component
title: Inbox sync
status: stable
groma:
  id: inbox-sync
  parent: macro
  code:
    - scanner: rust
      file: crates/models_email/src/gmail/inbox_sync.rs
      symbol: deserialize_base64url_json_data
  group: Models email
---
