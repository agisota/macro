---
type: C4 Component
title: Sqs queue
status: stable
groma:
  id: ai-projections-src-outbound-sqs-queue
  parent: macro
  code:
    - scanner: rust
      file: crates/ai_projections/src/outbound/sqs_queue.rs
      symbol: enqueue_materialization
  group: Ai projections
---
