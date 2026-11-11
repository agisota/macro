---
type: C4 Component
title: Ensure user is onboarded
status: stable
groma:
  id: ensure-user-is-onboarded
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/middleware/ensure_user_is_onboarded.rs
      symbol: handler
---
