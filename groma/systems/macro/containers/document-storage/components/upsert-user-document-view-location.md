---
type: C4 Component
title: Upsert user document view location
status: stable
groma:
  id: upsert-user-document-view-location
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/user_document_view_location/upsert_user_document_view_location.rs
      symbol: handler
---
