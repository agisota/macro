---
type: C4 Component
title: Запуск поисковой индексации
status: stable
groma:
  id: search-processing-service-src-main
  parent: search-processing-service
  code:
    - scanner: rust
      file: services/search_processing_service/src/main.rs
description: Загружает конфигурацию и запускает workers
---

Создаёт процесс индексатора и подключает потребители и хранилища.
