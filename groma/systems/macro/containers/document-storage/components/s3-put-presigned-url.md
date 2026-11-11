---
type: C4 Component
title: Put presigned url
status: stable
groma:
  id: s3-put-presigned-url
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/service/s3/put_presigned_url.rs
      symbol: put_presigned_url
---
