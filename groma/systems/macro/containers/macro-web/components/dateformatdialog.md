---
type: C4 Component
title: Block spreadsheet
status: stable
groma:
  id: dateformatdialog
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/DateFormatDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-calculation-status.ts
      symbol: createCalculationStatus
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetShape.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetActionMenus.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/selection-formatting.ts
      symbol: selectionToggleStyles
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/spreadsheet-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/FormulaInput.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/workers/xlsx-worker.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-formula.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/context/spreadsheet-source.ts
    - scanner: python
      file: apps/web/src/features/block-spreadsheet/core/xlsx-fixtures/generate-drawings.py
      symbol: sized
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/TableColumnTypeIcon.tsx
      symbol: TableColumnTypeIcon
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-sheet-rules.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetCommentCard.tsx
      symbol: SpreadsheetCommentCard
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/grid-selection.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/yield-to-page.ts
      symbol: yieldToPage
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-calculation.ts
      symbol: createCalculation
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetDialog.tsx
      symbol: SpreadsheetDialog
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/csv-export.ts
      symbol: encodeCsv
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/formula-completion.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/EditorPopup.tsx
      symbol: EditorPopup
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/calculation-client.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-builder.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-goal-seek.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/clipboard-scope.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/SpreadsheetDemo.tsx
      symbol: SpreadsheetDemo
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-drawings.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-area-scenes.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-shapes.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/DropdownDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/uploaded-workbook.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/csv-value.ts
      symbol: csvCellValue
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-local-spreadsheet-source.ts
      symbol: createLocalSpreadsheetSource
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-draft-actions.ts
      symbol: createDraftActions
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-workbook-actions.ts
      symbol: createWorkbookActions
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-workbook-parts.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/shape-geometry.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-grid-controller.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/drawingml-colors.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/queries/spreadsheet-session.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/calculation.ts
      symbol: createSpreadsheetCalculator
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetSheetTabs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-statistics.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-touch-press.ts
      symbol: createTouchPress
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/workbook-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/spreadsheet-comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/queries/create-spreadsheet.ts
      symbol: createSpreadsheetDocument
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-corpus-suite.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/spreadsheet-sheet-registry.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-fixtures/corpus.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/CellDatePicker.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-scene.ts
      symbol: chartScene
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/spreadsheet-presence.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/UploadedWorkbook.tsx
      symbol: UploadedWorkbook
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-chartex.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-shapes.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-pivots.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/SpreadsheetDraftMenu.tsx
      symbol: SpreadsheetDraftMenu
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/workers/calculation.worker.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-data.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/queries/save-spreadsheet-draft.ts
      symbol: saveSpreadsheetDraft
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/use-spreadsheet-access.ts
      symbol: useSpreadsheetAccess
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/TableDialog.tsx
      symbol: TableDialog
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/SpreadsheetCommentComposer.tsx
      symbol: SpreadsheetCommentComposer
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetSkeleton.tsx
      symbol: SpreadsheetSkeleton
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/cell-copy.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/SpreadsheetBlock.tsx
      symbol: SpreadsheetBlock
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chart-axis-scenes.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetHeaderMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-spreadsheet-store.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-stylesheet.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/sheet-operations.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/formula-reference.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/queries/uploaded-workbook.ts
      symbol: uploadedWorkbookQuery
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetGoalSeekDialog.tsx
      symbol: SpreadsheetGoalSeekDialog
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/context/spreadsheet-comments.ts
      symbol: SpreadsheetCommentsCapability
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/cell-date.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/cell-input.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SelectionMoveHandle.tsx
      symbol: SelectionMoveHandle
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/SpreadsheetCommentThread.tsx
      symbol: SpreadsheetCommentThread
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-reader.ts
      symbol: readXlsxWorkbook
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/calculation-protocol.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/queries/spreadsheet-access.ts
      symbol: isSpreadsheetEnabledForCurrentUser
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-drawing-actions.ts
      symbol: createDrawingActions
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-checkboxes.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetWorkbookDialogs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-archive.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-chart-values.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/vitest.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-writer.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-range-move.ts
      symbol: createRangeMove
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/ChoiceChip.tsx
      symbol: ChoiceChip
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-tables.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/spreadsheet-cell-links.tsx
      symbol: SpreadsheetCellLinks
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-styles.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/SpreadsheetTables.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-table-actions.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetToolbar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/toolbar-types.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SheetDrawingLayer.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-codec.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-sheet-actions.ts
      symbol: createSheetActions
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/DateMentionMenu.tsx
      symbol: DateMentionMenu
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/drag-auto-scroll.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/context/spreadsheet-mentions.ts
      symbol: SpreadsheetMentions
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetToolbarMenus.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/TableFilterPanel.tsx
      symbol: TableFilterPanel
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/TableColumnMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/queries/keys.ts
      symbol: uploadedWorkbookKeys
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/ConditionalIcon.tsx
      symbol: ConditionalIcon
    - scanner: python
      file: apps/web/src/features/block-spreadsheet/core/xlsx-fixtures/generate-financial.py
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/table-types.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/SpreadsheetComments.tsx
      symbol: SpreadsheetComments
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/TableGroupByDialog.tsx
      symbol: TableGroupByDialog
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/formula-function-names.ts
      symbol: CALCULATED_FUNCTIONS
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/ChartDialog.tsx
      symbol: ChartDialog
    - scanner: python
      file: apps/web/src/features/block-spreadsheet/core/xlsx-fixtures/generate-chart-types.py
      symbol: sized
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/cell-colors.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/TableMenu.tsx
      symbol: TableMenu
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/sheet-references.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/image-data.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/views/SpreadsheetEditor.tsx
      symbol: SpreadsheetEditor
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/xlsx-parts.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetChart.tsx
      symbol: SpreadsheetChart
    - scanner: python
      file: apps/web/src/features/block-spreadsheet/core/xlsx-fixtures/generate-shapes.py
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/spreadsheet-history.ts
      symbol: createSpreadsheetHistory
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/spreadsheet-mentions.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-formula-assistance.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/metafile.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/spreadsheet-schema.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/draft-update.ts
      symbol: spreadsheetDraftUpdate
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetDialogs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/create-spreadsheet-download.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/CellListMenu.tsx
      symbol: CellListMenu
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/workbook-file-types.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/sheet-validation.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetCellMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/components/SpreadsheetGrid.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/calculation-inputs.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/cell-dates.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/core/chat-context.ts
      symbol: spreadsheetChatContext
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/primitives/workbook-file-client.ts
  technology: SolidJS
  group: Files
description: Spreadsheet block and IronCalc evaluation.
---

The readme lists Excel-style formulas, selection, fill, tables, CSV/XLSX import, and collaboration. Calculation uses IronCalc, including a worker. Existing uploaded `.xlsx` files are not auto-converted; import is explicit. `drive-view` imports `useSpreadsheetAccess` from this feature (`drive-view/drive-view.tsx:2`). Drive routes expose spreadsheet comment params (`routes/routes.ts:340-341`).
