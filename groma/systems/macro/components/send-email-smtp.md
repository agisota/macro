---
type: C4 Component
title: Send email smtp
status: stable
groma:
  id: send-email-smtp
  parent: macro
  code:
    - scanner: rust
      file: crates/ses_client/src/send_email_smtp.rs
  group: Ses client
---
