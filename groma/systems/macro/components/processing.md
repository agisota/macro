---
type: C4 Component
title: Processing
status: stable
groma:
  id: processing
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_trigger/src/domain/processing.rs
      symbol: process_message_event
  group: Agent trigger
---
