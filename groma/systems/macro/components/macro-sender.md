---
type: C4 Component
title: Macro sender
status: stable
groma:
  id: macro-sender
  parent: macro
  code:
    - scanner: rust
      file: crates/email_utils/src/macro_sender.rs
      symbol: is_macro_notification_sender
  group: Email utils
---
