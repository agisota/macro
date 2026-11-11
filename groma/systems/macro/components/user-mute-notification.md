---
type: C4 Component
title: User mute notification
status: stable
groma:
  id: user-mute-notification
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/user_mute_notification.rs
  group: Notification db client
---
