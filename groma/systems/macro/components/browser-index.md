---
type: C4 Component
title: Браузерный рендерер письма
status: stable
groma:
  id: browser-index
  parent: macro
  code:
    - scanner: typescript
      file: packages/email-renderer/src/browser/index.ts
description: Отображает тело письма в изолированном Shadow DOM
---

Владеет стилями, шириной, загрузкой изображений и освобождением ресурсов; приложение передаёт политику и адаптеры снаружи.
