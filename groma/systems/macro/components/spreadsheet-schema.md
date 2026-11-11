---
type: C4 Component
title: ai-editing-worker
status: stable
groma:
  id: spreadsheet-schema
  parent: macro
  code:
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/schema.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/calculator.ts
      symbol: createWorkerSpreadsheetCalculator
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/writer.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/revision.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/overview.ts
      symbol: canvasOverview
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/session.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/edit.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/comment-mark/run.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/markdown.ts
      symbol: markdown
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/animation.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/dependencies.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/index.ts
      symbol: endpoints
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/operations.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/render.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/spreadsheet.ts
      symbol: app
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/runtime.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/_test-helpers.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/direct.ts
      symbol: applyCanvasCode
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/mentions.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/traces-db.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/editor/sandbox-init.ts
      symbol: sandboxInit
    - scanner: typescript
      file: services/ai-editing-worker/src/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/comment-mark/anchor.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/agent.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/browser.ts
      symbol: withRenderPage
    - scanner: typescript
      file: services/ai-editing-worker/src/markdown/body.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/canvas.ts
      symbol: app
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/comment-mark.ts
      symbol: commentMark
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/sandbox.ts
      symbol: runCanvasCode
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/text-layout.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/forms.ts
      symbol: app
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/schema.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/document-token.ts
      symbol: tokenAccessLevel
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/writer-prompt.ts
      symbol: SPREADSHEET_WRITER_PROMPT
    - scanner: typescript
      file: services/ai-editing-worker/src/forms/runtime.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/traces.ts
      symbol: traces
    - scanner: typescript
      file: services/ai-editing-worker/src/editor-sandbox-code.ts
      symbol: SANDBOX_CODE
    - scanner: typescript
      file: services/ai-editing-worker/src/service-clients.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/cache.ts
      symbol: CanvasCache
    - scanner: typescript
      file: services/ai-editing-worker/src/sync-document.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/vitest.config.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/integration.config.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/endpoints/docx.ts
      symbol: docx
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/editor.ts
      symbol: CanvasEditor
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/sandbox-code.ts
      symbol: CANVAS_SANDBOX_CODE
    - scanner: typescript
      file: services/ai-editing-worker/src/env.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/queue/_testUtils.ts
    - scanner: typescript
      file: services/ai-editing-worker/vitest.config.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/sandbox.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/globals.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/canvas/test-fixtures.ts
      symbol: liveScene
  technology: TypeScript
  group: Service helpers
description: Scanned helper for ai-editing-worker
---

Typed as ZodType: without strictNullChecks, zod infers a union as an optional key.
