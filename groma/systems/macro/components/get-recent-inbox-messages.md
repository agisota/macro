---
type: C4 Component
title: Get recent inbox messages
status: stable
groma:
  id: get-recent-inbox-messages
  parent: macro
  code:
    - scanner: rust
      file: crates/email_service_client/src/get_recent_inbox_messages.rs
  group: Email service client
---
