---
type: C4 Component
title: Представление почты
status: stable
groma:
  id: email-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-view/email-view.tsx
description: Показывает список, тред и маршруты composer
---

Владеет навигацией и состоянием почтового экрана, а визуализацию тела, треда и compose делегирует отдельным feature-пакетам.
