---
type: C4 Container
title: Файловая служба
status: stable
groma:
  id: static-file-service
  parent: macro
  technology: Rust, S3, DynamoDB
description: Хранит и выдаёт загруженные файлы и вложения
---

Управляет bytes, метаданными и upload/download URLs объектного хранилища; граф сущностей остаётся в DSS.
