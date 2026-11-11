---
type: C4 Component
title: Worker
status: stable
groma:
  id: crm-cleanup-worker
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/crm_cleanup/worker.rs
---
