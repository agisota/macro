---
type: C4 Component
title: graphics
status: stable
groma:
  id: browser-connectors
  parent: macro
  code:
    - scanner: typescript
      file: packages/graphics/src/browser/connectors.ts
      symbol: attachConnectorControls
    - scanner: typescript
      file: packages/graphics/src/browser/index.ts
    - scanner: typescript
      file: packages/graphics/src/browser/selection-target.ts
      symbol: selectionTarget
    - scanner: typescript
      file: packages/graphics/src/browser/rich-text.ts
  technology: TypeScript
  group: Graphics
description: Endpoint capture is independent of shape drawing and document history
---

Endpoint capture is independent of shape drawing and document history.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/graphics/src/browser/connectors.ts](../../../../packages/graphics/src/browser/connectors.ts) | [apps/web/src/features/block-canvas/views/canvas-view.tsx](../../../../apps/web/src/features/block-canvas/views/canvas-view.tsx) | Invokes supplied callback: onCommit | typescript |
