---
type: C4 Component
title: Worker
status: stable
groma:
  id: inbox-sync-worker
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/inbox_sync/worker.rs
---
