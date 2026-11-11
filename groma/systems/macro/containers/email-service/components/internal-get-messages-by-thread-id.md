---
type: C4 Component
title: Get messages by thread id
status: stable
groma:
  id: internal-get-messages-by-thread-id
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/internal/get_messages_by_thread_id.rs
---
