---
type: C4 Component
title: Endpoint permission token
status: stable
groma:
  id: create-permission-token
  parent: document-storage-service
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/documents/permissions_token/create_permission_token.rs
description: Выдаёт document-scoped токен для sync
---

Проверяет доступ к документу и создаёт токен, который sync-service валидирует при handshake отдельно от account cookie.
