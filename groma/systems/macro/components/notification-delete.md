---
type: C4 Component
title: Delete
status: stable
groma:
  id: notification-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/notification/delete.rs
      symbol: delete_notification_by_event_item
  group: Notification db client
---
