---
type: C4 Component
title: Delete message
status: stable
groma:
  id: operations-delete-message
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/inbox_sync/operations/delete_message.rs
      symbol: delete_message
---
