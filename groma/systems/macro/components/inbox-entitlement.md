---
type: C4 Component
title: Inbox entitlement
status: stable
groma:
  id: inbox-entitlement
  parent: macro
  code:
    - scanner: rust
      file: crates/email/src/domain/inbox_entitlement.rs
      symbol: permits_connection
  group: Email
---
