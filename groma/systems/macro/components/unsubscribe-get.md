---
type: C4 Component
title: Get
status: stable
groma:
  id: unsubscribe-get
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_db_client/src/unsubscribe/get.rs
      symbol: get_user_unsubscribes
  group: Notification db client
---
