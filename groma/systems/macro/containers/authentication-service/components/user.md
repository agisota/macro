---
type: C4 Component
title: API пользователя и профиля
status: stable
groma:
  id: user
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/user.rs
description: Обрабатывает пользовательские настройки и профиль
---

Содержит routes для пользовательских данных, изображения профиля, agent setup и связанных account-операций.
