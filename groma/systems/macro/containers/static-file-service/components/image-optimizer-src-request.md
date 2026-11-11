---
type: C4 Component
title: Request
status: stable
groma:
  id: image-optimizer-src-request
  parent: static-file-service
  code:
    - scanner: rust
      file: services/image_optimizer/src/request.rs
      symbol: deserialize_path
---
