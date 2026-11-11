---
type: C4 Component
title: Delete document
status: stable
groma:
  id: documents-delete-document
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/documents/delete_document.rs
      symbol: permanently_delete_document_handler
---
