---
type: C4 Component
title: Get chat
status: stable
groma:
  id: db-get-chat
  parent: document-storage
  code:
    - scanner: rust
      file: services/delete_chat_handler/src/service/db/get_chat.rs
      symbol: is_chat_deleted
---
