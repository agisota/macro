---
type: C4 Component
title: Start job
status: stable
groma:
  id: start-job
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/crm_cleanup/start_job.rs
      symbol: start_job
---
