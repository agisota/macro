---
type: C4 Component
title: HTTP и GraphQL маршруты DSS
status: stable
groma:
  id: document-storage-service-src-api
  parent: document-storage-service
  code:
    - scanner: rust
      file: services/document_storage_service/src/api.rs
description: Регистрирует entity, Soup и sync endpoints
---

Включает REST, GraphQL и отдельный `/sync/ws`; бинарный sync protocol не входит в обычную REST OpenAPI-поверхность.
