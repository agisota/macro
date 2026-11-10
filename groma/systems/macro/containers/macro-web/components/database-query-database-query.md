---
type: C4 Component
title: Database query
status: stable
groma:
  id: database-query-database-query
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/database-query/database-query.tsx
    - scanner: typescript
      file: apps/web/src/features/database-query/context/answer-display.tsx
    - scanner: typescript
      file: apps/web/src/features/database-query/core/tool-answer.ts
      symbol: toolAnswers
    - scanner: typescript
      file: apps/web/src/features/database-query/components/sql-editor.tsx
      symbol: SqlEditor
    - scanner: typescript
      file: apps/web/src/features/database-query/core/query-chart-plot.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/components/query-results.tsx
    - scanner: typescript
      file: apps/web/src/features/database-query/primitives/query-composer.ts
      symbol: createQueryComposer
    - scanner: typescript
      file: apps/web/src/features/database-query/components/resizable-answer.tsx
      symbol: ResizableAnswer
    - scanner: typescript
      file: apps/web/src/features/database-query/components/pie-chart.tsx
      symbol: PieChart
    - scanner: typescript
      file: apps/web/src/features/database-query/components/question-details.tsx
      symbol: QuestionDetails
    - scanner: typescript
      file: apps/web/src/features/database-query/core/question-examples.ts
      symbol: questionExamples
    - scanner: typescript
      file: apps/web/src/features/database-query/components/plot-chart.tsx
      symbol: PlotChart
    - scanner: typescript
      file: apps/web/src/features/database-query/views/live-question.tsx
      symbol: LiveQuestion
    - scanner: typescript
      file: apps/web/src/features/database-query/views/tool-query-results.tsx
      symbol: ToolQueryResults
    - scanner: typescript
      file: apps/web/src/features/database-query/queries/app-query-source.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/core/answer-cell.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/context/query-context.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/components/answer-value.tsx
      symbol: ResultValue
    - scanner: typescript
      file: apps/web/src/features/database-query/components/query-chart.tsx
      symbol: QueryChart
    - scanner: typescript
      file: apps/web/src/features/database-query/queries/question-capabilities.ts
      symbol: createQuestionCapabilities
    - scanner: typescript
      file: apps/web/src/features/database-query/queries/saved-question.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/core/query-chart.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/components/query-database-picker.tsx
      symbol: QueryDatabasePicker
    - scanner: typescript
      file: apps/web/src/features/database-query/components/question-examples.tsx
      symbol: QuestionExamples
    - scanner: typescript
      file: apps/web/src/features/database-query/views/query-editor.tsx
      symbol: QueryEditor
    - scanner: typescript
      file: apps/web/src/features/database-query/core/chart-palette.ts
      symbol: CHART_PALETTE
    - scanner: typescript
      file: apps/web/src/features/database-query/components/answer-title-field.tsx
      symbol: AnswerTitleField
    - scanner: typescript
      file: apps/web/src/features/database-query/queries/answer-names.ts
      symbol: answerNames
    - scanner: typescript
      file: apps/web/src/features/database-query/queries/query-source.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/answer-display.tsx
      symbol: AppAnswerDisplay
    - scanner: typescript
      file: apps/web/src/features/database-query/core/query.ts
  technology: SolidJS
  group: Files
description: Database query answer display.
---

`AnswerRowLink` looks up the table in `useDatabasesQuery`, then calls `globalSplitManager().openWithSplit` with a database block id. Mention and text values come from `block-database/database-mentions`. The display provider wraps children so hosts can share that opener.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/database-query/answer-display.tsx](../../../../../../apps/web/src/features/database-query/answer-display.tsx) | [apps/web/src/features/block-database/database-mentions.tsx](../../../../../../apps/web/src/features/block-database/database-mentions.tsx) | renders answer mentions | component import |
