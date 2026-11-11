---
type: C4 Component
title: Graphql source
status: stable
groma:
  id: graphql-source
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/database-sql/graphql-source.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/database-sql/local-read.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/database-sql/create-database-sql-query.ts
  technology: SolidJS
description: Graphql source inside the signed-in client.
---

The engine's browser row source: tables are read as Soup database rows through the normalized cache, newest first. People joins accept only bounded explicit keys and read them from local Turso; an unbounded directory request is refused.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/database-sql/create-database-sql-query.ts](../../../../../../apps/web/src/lib/queries/database-sql/create-database-sql-query.ts) | [apps/web/src/features/block-database/queries/table-rows.ts](../../../../../../apps/web/src/features/block-database/queries/table-rows.ts) | Invokes supplied callback: refresh | typescript |
