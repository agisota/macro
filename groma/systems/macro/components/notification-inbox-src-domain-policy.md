---
type: C4 Component
title: Policy
status: stable
groma:
  id: notification-inbox-src-domain-policy
  parent: macro
  code:
    - scanner: rust
      file: crates/notification_inbox/src/domain/policy.rs
      symbol: inbox_filter
  group: Notification inbox
---
