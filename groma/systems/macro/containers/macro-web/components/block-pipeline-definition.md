---
type: C4 Component
title: Block pipeline
status: stable
groma:
  id: block-pipeline-definition
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-pipeline/definition.ts
      symbol: definition
    - scanner: typescript
      file: apps/web/src/features/block-pipeline/component/PipelineBlock.tsx
      symbol: PipelineBlock
  technology: SolidJS
  group: CRM
description: '`pipeline` block.'
---

Load accepts a DSS id and lazy-loads `PipelineBlock`. Live tracking is off. The companies route nests `crmPipelineRoute` at `pipeline/:pipelineId` (`routes/routes.ts:819-828`, `app-router-view.tsx:494-501`).
