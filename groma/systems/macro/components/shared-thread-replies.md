---
type: C4 Component
title: Shared thread replies
status: stable
groma:
  id: shared-thread-replies
  parent: macro
  code:
    - scanner: rust
      file: crates/email/src/domain/shared_thread_replies.rs
      symbol: reply_target_inbox
  group: Email
---
