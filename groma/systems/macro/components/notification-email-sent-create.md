---
type: C4 Component
title: Create
status: stable
groma:
  id: notification-email-sent-create
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/notification_email_sent/create.rs
      symbol: create_notification_email_sent
  group: Notification db client
---
