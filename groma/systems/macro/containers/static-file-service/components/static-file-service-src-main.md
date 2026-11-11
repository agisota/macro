---
type: C4 Component
title: Запуск файловой службы
status: stable
groma:
  id: static-file-service-src-main
  parent: static-file-service
  code:
    - scanner: rust
      file: services/static_file_service/src/main.rs
      symbol: main
description: Загружает конфигурацию и стартует SFS
---

Инициализирует API и адаптеры объектного и метаданного хранилищ.
