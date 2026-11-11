---
type: C4 Component
title: Sqs queue
status: stable
groma:
  id: webhook-src-outbound-sqs-queue
  parent: macro
  code:
    - scanner: rust
      file: crates/webhook/src/outbound/sqs_queue.rs
  group: Webhook
---
