---
type: C4 Component
title: Точка входа публичного сайта
status: stable
groma:
  id: main-index
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/app/main/index.tsx
description: Монтирует маршруты маркетингового приложения
---

Загружает публичный SPA и его страницы, отделённые от кода подписанного web-клиента.
