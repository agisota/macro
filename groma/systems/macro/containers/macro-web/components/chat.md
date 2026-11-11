---
type: C4 Component
title: Интерфейс AI-чата
status: stable
groma:
  id: chat
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-chat/component/Chat.tsx
      symbol: Chat
description: Принимает запрос и отображает потоковый ответ модели
---

Связывает composer, вложения и генерацию через Cognition API; человеческие каналы используют другой путь.
