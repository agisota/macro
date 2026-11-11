---
type: C4 Component
title: Delete document worker
status: stable
groma:
  id: delete-document-worker
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/service/delete_document_worker.rs
      symbol: run_worker
---
