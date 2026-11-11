---
type: C4 Component
title: Send email
status: stable
groma:
  id: send-email
  parent: macro
  code:
    - scanner: rust
      file: crates/ses_client/src/send_email.rs
      symbol: send_email
  group: Ses client
---
