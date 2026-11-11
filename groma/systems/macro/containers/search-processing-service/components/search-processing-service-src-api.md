---
type: C4 Component
title: API поисковой обработки
status: stable
groma:
  id: search-processing-service-src-api
  parent: search-processing-service
  code:
    - scanner: rust
      file: services/search_processing_service/src/api.rs
description: Предоставляет internal и health endpoints
---

Регистрирует служебные маршруты обработки и проверки состояния, а не публичный поисковый UI.
