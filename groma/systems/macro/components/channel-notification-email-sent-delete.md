---
type: C4 Component
title: Delete
status: stable
groma:
  id: channel-notification-email-sent-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/channel_notification_email_sent/delete.rs
  group: Notification db client
---
