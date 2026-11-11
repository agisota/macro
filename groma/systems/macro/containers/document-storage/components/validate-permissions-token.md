---
type: C4 Component
title: Validate permissions token
status: stable
groma:
  id: validate-permissions-token
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/documents/permissions_token/validate_permissions_token.rs
      symbol: handler
---
