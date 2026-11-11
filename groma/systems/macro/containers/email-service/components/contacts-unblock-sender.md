---
type: C4 Component
title: Unblock sender
status: stable
groma:
  id: contacts-unblock-sender
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/contacts/unblock_sender.rs
      symbol: handler
---
