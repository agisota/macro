---
type: C4 Component
title: Use interface language sync
status: stable
groma:
  id: use-interface-language-sync
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/i18n/use-interface-language-sync.ts
      symbol: useInterfaceLanguageSync
  technology: SolidJS
  group: Interface language
description: 'Keeps the interface language in step with the account: the user''s own language, else their team''s, else the browser''s, else English'
---

Keeps the interface language in step with the account: the user's own language, else their team's, else the browser's, else English. Until both settings have loaded the language remembered on this device stays in place.
