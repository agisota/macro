---
type: C4 Component
title: Process
status: stable
groma:
  id: scheduled-process
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/scheduled/process.rs
---
