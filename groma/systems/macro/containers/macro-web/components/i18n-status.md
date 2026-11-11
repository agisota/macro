---
type: C4 Component
title: I18n status
status: stable
groma:
  id: i18n-status
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/i18n-status.ts
  technology: SolidJS
description: I18n status inside the signed-in client.
---

Reports which interface translations are missing or out of date, and records the English each translation was made from.  bun run i18n:status                 every language, readable bun run i18n:status --json          the same, for an agent to work from bun run i18n:status --acc
