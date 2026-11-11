---
type: C4 Component
title: Gmail gate
status: stable
groma:
  id: gmail-gate
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/outbound/email_api/gmail_gate.rs
---
