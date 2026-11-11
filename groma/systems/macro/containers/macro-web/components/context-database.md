---
type: C4 Component
title: Context database
status: stable
groma:
  id: context-database
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/database/context/database.tsx
    - scanner: typescript
      file: apps/web/src/features/database/primitives/draft-rows.ts
      symbol: createDraftRows
    - scanner: typescript
      file: apps/web/src/features/database/components/option-editor.tsx
      symbol: OptionEditor
    - scanner: typescript
      file: apps/web/src/features/database/core/column-inference.ts
    - scanner: typescript
      file: apps/web/src/features/database/views/timeline-context-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/undo-stack.ts
    - scanner: typescript
      file: apps/web/src/features/database/context/table-source.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/table-navigation.tsx
      symbol: TableNavigation
    - scanner: typescript
      file: apps/web/src/features/database/core/refresh-plan.ts
    - scanner: typescript
      file: apps/web/src/features/database/views/database-records-view.tsx
    - scanner: typescript
      file: apps/web/src/features/database/components/database-table.tsx
    - scanner: typescript
      file: apps/web/src/features/database/components/select-pill.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/cell-ops.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/database-search.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/row-write.ts
      symbol: writeDatabaseRow
    - scanner: typescript
      file: apps/web/src/features/database/core/column-schema.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/board-card-title-picker.tsx
      symbol: BoardCardTitlePicker
    - scanner: typescript
      file: apps/web/src/features/database/components/property-icon.tsx
      symbol: PropertyIcon
    - scanner: typescript
      file: apps/web/src/features/database/primitives/database-search.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/board-menu.tsx
      symbol: BoardMenu
    - scanner: typescript
      file: apps/web/src/features/database/components/new-table-tab.tsx
      symbol: NewTableTab
    - scanner: typescript
      file: apps/web/src/features/database/components/database-load-state.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/timeline.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/database-title.tsx
      symbol: DatabaseTitle
    - scanner: typescript
      file: apps/web/src/features/database/core/timeline-range.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/views.ts
    - scanner: typescript
      file: apps/web/src/features/database/primitives/table-model.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/board-moves.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/grid-cell.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/table-creation.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/view-control-popover.tsx
      symbol: ToolbarPopover
    - scanner: typescript
      file: apps/web/src/features/database/components/database-editor-toolbar.tsx
      symbol: DatabaseEditorToolbar
    - scanner: typescript
      file: apps/web/src/features/database/views/database-records.tsx
      symbol: DatabaseRecords
    - scanner: typescript
      file: apps/web/src/features/database/views/database-board-view.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/column-summary.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/table.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/move-beside.ts
      symbol: moveBeside
    - scanner: typescript
      file: apps/web/src/features/database/core/cell-date-range.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/board-grouping.ts
    - scanner: typescript
      file: apps/web/src/features/database/queries/column-detail.ts
      symbol: toViewColumn
    - scanner: typescript
      file: apps/web/src/features/database/views/database-table-view.tsx
      symbol: DatabaseTableView
    - scanner: typescript
      file: apps/web/src/features/database/context/column-usage.ts
    - scanner: typescript
      file: apps/web/src/features/database/primitives/held-grid-rows.ts
      symbol: createHeldGridRows
    - scanner: typescript
      file: apps/web/src/features/database/core/database-relations.ts
    - scanner: typescript
      file: apps/web/src/features/database/primitives/undo-controller.ts
    - scanner: typescript
      file: apps/web/src/features/database/primitives/record-actions.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/forms-usage.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/cell-date.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/add-column-button.tsx
      symbol: AddColumnButton
    - scanner: typescript
      file: apps/web/src/features/database/core/board-input.ts
      symbol: boardInput
    - scanner: typescript
      file: apps/web/src/features/database/core/grid-cell-editor.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/view-query.ts
    - scanner: typescript
      file: apps/web/src/features/database/views/database-timeline-view.tsx
      symbol: DatabaseTimelineView
    - scanner: typescript
      file: apps/web/src/features/database/components/record-panel.tsx
      symbol: RecordPanel
    - scanner: typescript
      file: apps/web/src/features/database/components/board-lane-header.tsx
      symbol: BoardLaneHeader
    - scanner: typescript
      file: apps/web/src/features/database/components/timeline-bar-text.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/api.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/property-creation.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/database-toolbar.tsx
    - scanner: typescript
      file: apps/web/src/features/database/primitives/column-layout.ts
      symbol: createColumnLayout
    - scanner: typescript
      file: apps/web/src/features/database/core/database-view.ts
    - scanner: typescript
      file: apps/web/src/features/database/context/option-editing.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/timeline-range-editor.tsx
      symbol: TimelineRangeEditor
    - scanner: typescript
      file: apps/web/src/features/database/components/column-type-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/grid-cells.ts
    - scanner: typescript
      file: apps/web/src/features/database/context/relation-source.ts
    - scanner: typescript
      file: apps/web/src/features/database/primitives/cell-selection.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/csv.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/view-state.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/sort-panel.tsx
      symbol: SortPanel
    - scanner: typescript
      file: apps/web/src/features/database/core/view-creation.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/timeline-menu.tsx
      symbol: TimelineMenu
    - scanner: typescript
      file: apps/web/src/features/database/primitives/board-layout.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/timeline-record-menu.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/cell-focus.ts
      symbol: focusAdjacent
    - scanner: typescript
      file: apps/web/src/features/database/components/database-column-header.tsx
    - scanner: typescript
      file: apps/web/src/features/database/components/timeline-rename-field.tsx
      symbol: TimelineRenameField
    - scanner: typescript
      file: apps/web/src/features/database/components/database-table-notices.tsx
    - scanner: typescript
      file: apps/web/src/features/database/components/database-board.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/keyed-serializer.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/column-order.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/database-view-filters.tsx
    - scanner: typescript
      file: apps/web/src/features/database/components/database-table-summary.tsx
      symbol: DatabaseTableSummary
    - scanner: typescript
      file: apps/web/src/features/database/core/timeline-bar.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/csv-import-dialog.tsx
      symbol: CsvImportDialog
    - scanner: typescript
      file: apps/web/src/features/database/components/shown-fields-picker.tsx
      symbol: ShownFieldsPicker
    - scanner: typescript
      file: apps/web/src/features/database/core/write-failure.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/inline-rename.ts
      symbol: createInlineRename
    - scanner: typescript
      file: apps/web/src/features/database/components/database-relation-cell.tsx
      symbol: DatabaseRelationCell
    - scanner: typescript
      file: apps/web/src/features/database/components/option-picker.tsx
      symbol: OptionPicker
    - scanner: typescript
      file: apps/web/src/features/database/components/formula-editor.tsx
      symbol: FormulaEditor
    - scanner: typescript
      file: apps/web/src/features/database/queries/api-source.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/database-mention-label.tsx
    - scanner: typescript
      file: apps/web/src/features/database/core/database-search.ts
    - scanner: typescript
      file: apps/web/src/features/database/core/formula.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/view-select.tsx
      symbol: ViewSelect
    - scanner: typescript
      file: apps/web/src/features/database/primitives/table-controller.ts
    - scanner: typescript
      file: apps/web/src/features/database/context/formula-editing.ts
    - scanner: typescript
      file: apps/web/src/features/database/components/new-board-group.tsx
      symbol: NewBoardGroup
    - scanner: typescript
      file: apps/web/src/features/database/primitives/database-controller.ts
    - scanner: typescript
      file: apps/web/src/features/database/primitives/view-creation.ts
      symbol: createViewCreation
    - scanner: typescript
      file: apps/web/src/features/database/components/popup-cell-keys.ts
  technology: SolidJS
  group: Files
description: Host-agnostic database grid.
---

A host supplies `DatabaseApi` with schema reads, paginated row reads, and atomic operation batches. `DatabaseRecords` supplies column controls and layouts. The readme says to mount under `QueryClientProvider` and remount when the API identity or table changes. The CRM browser fixture is cited as `../crm/browser-test/editor.tsx`; that test file was not opened.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/database/core/row-write.ts](../../../../../../apps/web/src/features/database/core/row-write.ts) | [apps/web/src/features/block-database/queries/table-rows.ts](../../../../../../apps/web/src/features/block-database/queries/table-rows.ts) | Invokes supplied callback: applyOps | typescript |
| [apps/web/src/features/database/core/row-write.ts](../../../../../../apps/web/src/features/database/core/row-write.ts) | [apps/web/src/features/crm/queries/pipeline-entries.ts](../../../../../../apps/web/src/features/crm/queries/pipeline-entries.ts) | Invokes supplied callback: applyOps | typescript |
| [apps/web/src/features/database/primitives/database-search.ts](../../../../../../apps/web/src/features/database/primitives/database-search.ts) | [apps/web/src/features/block-database/queries/database-search.ts](../../../../../../apps/web/src/features/block-database/queries/database-search.ts) | Invokes supplied callback: search | typescript |
| [apps/web/src/features/database/primitives/undo-controller.ts](../../../../../../apps/web/src/features/database/primitives/undo-controller.ts) | [apps/web/src/features/block-database/component/Block.tsx](../../../../../../apps/web/src/features/block-database/component/Block.tsx) | Invokes supplied callbacks: offer, onCommitted, undoChange | typescript |
| [apps/web/src/features/database/primitives/undo-controller.ts](../../../../../../apps/web/src/features/database/primitives/undo-controller.ts) | [apps/web/src/features/block-database/document-database.tsx](../../../../../../apps/web/src/features/block-database/document-database.tsx) | Invokes supplied callbacks: offer, onCommitted, undoChange | typescript |
