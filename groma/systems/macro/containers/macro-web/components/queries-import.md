---
type: C4 Component
title: Web module
status: stable
groma:
  id: queries-import
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/import.ts
  technology: SolidJS
description: Part of the signed-in client
---

Queries and mutations for the import pipeline.  The server owns everything: Slack discovery and chat tools stage candidates, `POST /import/run` accepts/declines them, and import jobs flip rows to `imported`. Row flips are pushed over the connection gateway as `import_updated`; po
