---
type: C4 Component
title: Delete chat
status: stable
groma:
  id: db-delete-chat
  parent: document-storage
  code:
    - scanner: rust
      file: services/delete_chat_handler/src/service/db/delete_chat.rs
      symbol: delete_chat
---
