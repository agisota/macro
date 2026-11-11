---
type: C4 Component
title: Get chats for attachment
status: stable
groma:
  id: attachments-get-chats-for-attachment
  parent: agent-harness
  code:
    - scanner: rust
      file: services/agent_harness_service/src/cognition/api/attachments/get_chats_for_attachment.rs
      symbol: get_chats_for_attachment_handler
---
