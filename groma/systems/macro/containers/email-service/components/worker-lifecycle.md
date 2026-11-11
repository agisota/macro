---
type: C4 Component
title: Worker lifecycle
status: stable
groma:
  id: worker-lifecycle
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/worker_lifecycle.rs
      symbol: run_until_cancelled
---
