---
type: C4 Component
title: Get
status: stable
groma:
  id: notification-email-sent-get
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/notification_email_sent/get.rs
      symbol: get_notification_email_sent_bulk
  group: Notification db client
---
