---
type: C4 Component
title: Revert delete document
status: stable
groma:
  id: revert-delete-document
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/documents/revert_delete_document.rs
      symbol: handler
---
