---
type: C4 Component
title: HTTP-маршруты Lexical service
status: stable
groma:
  id: lexical-service-src-index
  parent: lexical-service
  code:
    - scanner: typescript
      file: services/lexical-service/src/index.ts
      symbol: app
description: Регистрирует внутренние conversion endpoints
---

Hono-приложение защищает routes внутренним ключом и вызывает преобразователи для поиска, cognition, Markdown и комментариев.
