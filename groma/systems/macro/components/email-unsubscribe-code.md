---
type: C4 Component
title: Email unsubscribe code
status: stable
groma:
  id: email-unsubscribe-code
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/email_unsubscribe_code.rs
  group: Notification db client
---
