---
type: C4 Component
title: Chat history batch messages
status: stable
groma:
  id: chat-history-batch-messages
  parent: agent-harness
  code:
    - scanner: rust
      file: services/agent_harness_service/src/cognition/api/chats/chat_history_batch_messages.rs
      symbol: get_chat_history_batch_messages_handler
---
