---
type: C4 System
title: Google (Gmail и Calendar)
status: stable
groma:
  id: google
description: Почта и календарь пользователя
---

Authentication service запускает OAuth, а Email service обращается к Gmail API через серверные адаптеры; provider credentials не встраиваются в web-клиент.
