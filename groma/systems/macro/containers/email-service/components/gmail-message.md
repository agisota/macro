---
type: C4 Component
title: Gmail message
status: stable
groma:
  id: gmail-message
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/inbox_sync/operations/gmail_message.rs
---
