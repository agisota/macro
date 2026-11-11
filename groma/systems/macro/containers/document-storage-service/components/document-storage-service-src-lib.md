---
type: C4 Component
title: Сборка DSS
status: stable
groma:
  id: document-storage-service-src-lib
  parent: document-storage-service
  code:
    - scanner: rust
      file: services/document_storage_service/src/lib.rs
description: Связывает API, server и внутренние доменные модули
---

Общий library target позволяет binary и OpenAPI generator использовать один состав сервиса.
