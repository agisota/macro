---
type: C4 Component
title: Email
status: stable
groma:
  id: outbound-email
  parent: macro
  code:
    - scanner: rust
      file: crates/notification/src/outbound/email.rs
  group: Notification
---
