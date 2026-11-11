---
type: C4 Component
title: Worker
status: stable
groma:
  id: scheduled-worker
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/scheduled/worker.rs
---
