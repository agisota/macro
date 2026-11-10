---
type: C4 Component
title: Block database
status: stable
groma:
  id: trash-database
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/trash-database.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/primitives/track-query-runs.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/document-database.tsx
      symbol: DocumentDatabase
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/editor-api.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/relation-targets.ts
      symbol: relationTargets
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/columns.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/detail-cache.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/database-subscription.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/forms-usage.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/database-search.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/reorder-tables.ts
      symbol: reorderDatabaseTables
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/table-rows.ts
      symbol: createDatabaseRowsSource
    - scanner: typescript
      file: apps/web/src/features/block-database/component/sidepanel/DatabaseSidePanelSections.tsx
      symbol: DatabaseSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-database/component/TableTabs.tsx
      symbol: TableTabs
    - scanner: typescript
      file: apps/web/src/features/block-database/component/Block.tsx
      symbol: DatabaseBlock
    - scanner: typescript
      file: apps/web/src/features/block-database/sql.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/views/database-page-actions.tsx
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/views.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/primitives/view-selection.ts
      symbol: createDatabaseViewSelection
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/database-relations.ts
      symbol: createDatabaseRelations
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/table-changes.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/rename-database.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/database-mentions.tsx
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/board-positions.ts
      symbol: useDatabaseBoardPositions
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/database-relations-sync.ts
      symbol: useRelatedDatabaseSync
    - scanner: typescript
      file: apps/web/src/features/block-database/core/chat-context.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/create-table.ts
      symbol: createTableWithName
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/database-rollout.ts
      symbol: waitForDatabaseRollout
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/options.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/view-creation.ts
      symbol: prepareViewCreation
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/load-database.ts
      symbol: loadDatabase
    - scanner: typescript
      file: apps/web/src/features/block-database/navigation-adapter.ts
      symbol: createDatabaseDocumentNavigation
    - scanner: typescript
      file: apps/web/src/features/block-database/component/DatabasePageShell.tsx
      symbol: DatabasePageShell
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/column-casts.ts
      symbol: createColumnCasts
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/keys.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/core/native-mentions.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/component/AddColumnMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-database/component/DatabaseGrid.tsx
    - scanner: typescript
      file: apps/web/src/features/block-database/queries/view-rows.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/definition.ts
      symbol: definition
  technology: SolidJS
  group: Files
description: '`database` block; 404 when the rollout is off.'
---

The comment says an off rollout makes a database link a 404 and skips the bundle. Live tracking is on because gateway fan-out is keyed on the tracked `database` entity. Open tracking is off because a database is not a soup entity or a cloud-storage item. `database-query` links an answer row by opening `{ type: 'database', id }` (`database-query/answer-display.tsx:31-33`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-database/queries/database-relations.ts](../../../../../../apps/web/src/features/block-database/queries/database-relations.ts) | [apps/web/src/features/block-form/form-pickers.tsx](../../../../../../apps/web/src/features/block-form/form-pickers.tsx) | Invokes supplied callbacks: onTableChanged, targets | typescript |
| [apps/web/src/features/block-database/queries/database-relations.ts](../../../../../../apps/web/src/features/block-database/queries/database-relations.ts) | [apps/web/src/features/database-query/queries/answer-names.ts](../../../../../../apps/web/src/features/database-query/queries/answer-names.ts) | Invokes supplied callbacks: onTableChanged, targets | typescript |
