---
type: C4 Component
title: Process candidate
status: stable
groma:
  id: process-candidate
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/crm_cleanup/process_candidate.rs
      symbol: process_candidate
---
