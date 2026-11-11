---
type: C4 Component
title: HTTP-маршруты почты
status: stable
groma:
  id: email-service-src-api
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api.rs
description: Регистрирует email, drafts и calendar-invitation endpoints
---

Объединяет REST-операции чтения, отправки, планирования и обработки почтовых ссылок.
