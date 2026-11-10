---
type: C4 Component
title: Web module
status: stable
groma:
  id: slack-import-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/slack-import/keys.ts
      symbol: slackImportKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/slack-import/index.ts
  technology: SolidJS
description: Part of the signed-in client
---

Source under apps/web/src/lib/queries/slack-import/keys.ts.
