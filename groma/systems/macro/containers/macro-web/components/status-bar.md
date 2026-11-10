---
type: C4 Component
title: Block ai
status: stable
groma:
  id: status-bar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/status-bar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/canvas-overlay.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/primitives/create-ai-editor.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/main-menu.tsx
      symbol: MainMenu
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/path.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/views/artboards-panel.tsx
      symbol: ArtboardsPanel
    - scanner: typescript
      file: apps/web/src/features/block-ai/primitives/create-canvas-gestures.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/notices.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/layers.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/save-state.ts
      symbol: SaveState
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/shortcuts.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/peer-presence.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/shapes.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/new-document.ts
      symbol: NEW_ARTBOARD
    - scanner: typescript
      file: apps/web/src/features/block-ai/ai-block.tsx
      symbol: AiBlock
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/geometry.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/primitives/create-peer-overlays.ts
      symbol: createPeerOverlays
    - scanner: typescript
      file: apps/web/src/features/block-ai/views/layers-panel.tsx
      symbol: LayersPanel
    - scanner: typescript
      file: apps/web/src/features/block-ai/queries/create-ai.ts
      symbol: createAiDocument
    - scanner: typescript
      file: apps/web/src/features/block-ai/queries/ai-sync.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/paint-swatch.tsx
      symbol: PaintSwatch
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/properties-panel.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/queries/ai-collab.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/layer-row.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/presence.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/paint.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/primitives/create-font-loader.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/tools.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/queries/ai-sharing.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/context/ai-editor-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/views/text-editor.tsx
      symbol: TextEditor
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/collab-entries.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/views/properties-view.tsx
      symbol: PropertiesView
    - scanner: typescript
      file: apps/web/src/features/block-ai/views/ai-editor.tsx
      symbol: AiEditorView
    - scanner: typescript
      file: apps/web/src/features/block-ai/core/view.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/components/tool-bar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/views/ai-canvas.tsx
    - scanner: typescript
      file: apps/web/src/features/block-ai/queries/ai-file.ts
      symbol: saveAiFile
    - scanner: typescript
      file: apps/web/src/features/block-ai/primitives/create-edit-steps.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/primitives/create-ai-viewer.ts
  technology: SolidJS
  group: Files
description: '`.ai` file block, not the agent product.'
---

The comment wires the editor to the worker engine, document storage, and the sync service. It imports a font source from `block-fig`. Do not group this with `agents-view` or `block-agent`; the name is the file extension.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-ai/ai-block.tsx](../../../../../../apps/web/src/features/block-ai/ai-block.tsx) | [apps/web/src/features/block-fig/queries/font-source.ts](../../../../../../apps/web/src/features/block-fig/queries/font-source.ts) | loads font source | function import |
