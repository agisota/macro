---
type: C4 Container
title: Служба поисковой индексации
status: stable
groma:
  id: search-processing-service
  parent: macro
  technology: Rust, OpenSearch, Kafka/SQS
description: Извлекает и индексирует содержимое сущностей
---

Обрабатывает документы и события для поиска, отдельно от browser query path, который обращается к DSS.
