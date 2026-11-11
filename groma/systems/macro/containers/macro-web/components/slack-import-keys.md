---
type: C4 Component
title: Slack import keys
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
  group: Data queries
description: Keys in Data queries.
---

File apps/web/src/lib/queries/slack-import/keys.ts. It belongs to Data queries, not a separate application.
