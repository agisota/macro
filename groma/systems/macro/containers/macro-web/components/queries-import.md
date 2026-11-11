---
type: C4 Component
title: Import
status: stable
groma:
  id: queries-import
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/import.ts
  technology: SolidJS
  group: Data queries
description: Queries and mutations for the import pipeline
---

Queries and mutations for the import pipeline.  The server owns everything: Slack discovery and chat tools stage candidates, `POST /import/run` accepts/declines them, and import jobs flip rows to `imported`. Row flips are pushed over the connection gateway as `import_updated`; polling remains as the backstop (pushes can be missed while reconnecting), tightening while anything is in flight.
