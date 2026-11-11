---
type: C4 Component
title: Worker
status: stable
groma:
  id: gmail-ops-worker
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/gmail_ops/worker.rs
---
