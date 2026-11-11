---
type: C4 Component
title: Chat history
status: stable
groma:
  id: chats-chat-history
  parent: agent-harness
  code:
    - scanner: rust
      file: services/agent_harness_service/src/cognition/api/chats/chat_history.rs
      symbol: get_chat_history_handler
---
