---
type: C4 Component
title: Delete call record
status: stable
groma:
  id: toolset-delete-call-record
  parent: macro
  code:
    - scanner: rust
      file: crates/call/src/inbound/toolset/delete_call_record.rs
      symbol: call
  group: Call
---
