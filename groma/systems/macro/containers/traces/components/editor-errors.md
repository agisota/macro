---
type: C4 Component
title: ai-editing-worker
status: stable
groma:
  id: editor-errors
  parent: traces
  code:
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/editor/errors.ts
      symbol: EditError
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/editor/ops.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/doc/doc.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/coder-prompt.ts
      symbol: buildPrompt
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/tables.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/modify.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/effect-report.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/prompts/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/doc/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/awareness/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/trace-log.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/editor/document-editor.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/model-options.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/interpreter.ts
      symbol: interpreter
    - scanner: typescript
      file: services/ai-editing-worker/src/sources.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/session.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/awareness/awareness-source.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/queue/random-source.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/inline.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/types.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/run-edit.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/tools/run-code.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/blocks.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/awareness/peer-pool.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/queue/animators.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/databases.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/doc/substring-miss.ts
      symbol: assertSubstringMatched
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/queue/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/awareness/ai-peer.ts
      symbol: nextAiPeerId
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/tools/read-document.ts
      symbol: createReadDocumentTool
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/editor/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/tools/im-blocked.ts
      symbol: createImBlockedTool
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/token-tracker.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/compact.ts
      symbol: compactDocumentHistory
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/queue/runner.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/coder.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/fast.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/queue/types.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/runtime.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/tools/dispatch.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/editing-workspace.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/agents/supervisor.ts
      symbol: supervisor
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/tools/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/doc/interfaces.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/utils.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/locate.ts
    - scanner: typescript
      file: services/ai-editing-worker/src/ai-editing/ai-toolkit/lists.ts
  technology: TypeScript
description: Scanned helper for ai-editing-worker
---

Raised by `DocumentEditor` when the AI references a node id that doesn't exist or violates a sanity check, and by `Doc` when an edit fails to resolve at apply time. The tool catches it and reports the message straight back to the model.
