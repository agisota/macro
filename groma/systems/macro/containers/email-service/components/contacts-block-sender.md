---
type: C4 Component
title: Block sender
status: stable
groma:
  id: contacts-block-sender
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/contacts/block_sender.rs
      symbol: handler
---
