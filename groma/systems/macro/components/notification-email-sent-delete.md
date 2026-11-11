---
type: C4 Component
title: Delete
status: stable
groma:
  id: notification-email-sent-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/notification_email_sent/delete.rs
      symbol: delete_notification_email_sent
  group: Notification db client
---
