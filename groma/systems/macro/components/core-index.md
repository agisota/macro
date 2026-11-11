---
type: C4 Component
title: Подготовка содержимого письма
status: stable
groma:
  id: core-index
  parent: macro
  code:
    - scanner: typescript
      file: packages/email-renderer/src/core/index.ts
description: Формирует HTML или plaintext без браузерного DOM
---

Framework-independent часть email-renderer выполняет детерминированную подготовку тела и не импортирует Solid или сервисы приложения.
