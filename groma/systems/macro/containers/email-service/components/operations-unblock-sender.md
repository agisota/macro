---
type: C4 Component
title: Unblock sender
status: stable
groma:
  id: operations-unblock-sender
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/gmail_ops/operations/unblock_sender.rs
      symbol: unblock_sender
---
