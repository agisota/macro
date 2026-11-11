---
type: C4 Component
title: Guest chat
status: stable
groma:
  id: call-src-domain-service-guest-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/call/src/domain/service/guest_chat.rs
      symbol: authorize
  group: Call
---
