---
type: C4 Component
title: Upsert
status: stable
groma:
  id: channel-notification-email-sent-upsert
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/channel_notification_email_sent/upsert.rs
  group: Notification db client
---
