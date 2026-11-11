---
type: C4 Component
title: Put presigned url
status: stable
groma:
  id: file-put-presigned-url
  parent: static-file-service
  code:
    - scanner: rust
      file: services/static_file_service/src/api/file/put_presigned_url.rs
---
