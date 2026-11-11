---
type: C4 Component
title: Label
status: stable
groma:
  id: core-shapes-label
  parent: macro
  code:
    - scanner: typescript
      file: packages/graphics/src/core/shapes/label.ts
    - scanner: typescript
      file: packages/graphics/src/core/text-fit.ts
    - scanner: typescript
      file: packages/graphics/src/core/model.ts
    - scanner: typescript
      file: packages/graphics/src/core/connector-commands.ts
    - scanner: typescript
      file: packages/graphics/src/core/selection-frame.ts
    - scanner: typescript
      file: packages/graphics/src/core/radius.ts
    - scanner: typescript
      file: packages/graphics/src/core/ordering.ts
    - scanner: typescript
      file: packages/graphics/src/core/style-selection.ts
      symbol: selectedShapeIds
    - scanner: typescript
      file: packages/graphics/src/core/shapes/definition.ts
    - scanner: typescript
      file: packages/graphics/src/core/editor.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/artifact.ts
    - scanner: typescript
      file: packages/graphics/src/core/artifact-commands.ts
    - scanner: typescript
      file: packages/graphics/src/core/text-commands.ts
    - scanner: typescript
      file: packages/graphics/src/core/snapping.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/rectangle.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/connector.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/pencil.ts
    - scanner: typescript
      file: packages/graphics/src/core/fragments.ts
    - scanner: typescript
      file: packages/graphics/src/core/layout.ts
    - scanner: typescript
      file: packages/graphics/src/core/resize.ts
    - scanner: typescript
      file: packages/graphics/src/core/connectors.ts
    - scanner: typescript
      file: packages/graphics/src/core/text-target.ts
      symbol: textTargetAt
    - scanner: typescript
      file: packages/graphics/src/core/index.ts
    - scanner: typescript
      file: packages/graphics/src/core/stretch.ts
    - scanner: typescript
      file: packages/graphics/src/core/insert.ts
      symbol: insertShapesCommand
    - scanner: typescript
      file: packages/graphics/src/core/dot-grid.ts
      symbol: dotGridLevels
    - scanner: typescript
      file: packages/graphics/src/core/shapes/registry.ts
    - scanner: typescript
      file: packages/graphics/src/core/object-snapping.ts
    - scanner: typescript
      file: packages/graphics/src/core/history.ts
    - scanner: typescript
      file: packages/graphics/src/core/artifact-order.ts
    - scanner: typescript
      file: packages/graphics/src/core/appearance.ts
    - scanner: typescript
      file: packages/graphics/src/core/selection.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/connector-routing.ts
    - scanner: typescript
      file: packages/graphics/src/core/layering.ts
    - scanner: typescript
      file: packages/graphics/src/core/object-snap-resize.ts
      symbol: snapObjectResize
    - scanner: typescript
      file: packages/graphics/src/core/camera.ts
    - scanner: typescript
      file: packages/graphics/src/core/scene.ts
    - scanner: typescript
      file: packages/graphics/src/core/affine.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/box-geometry.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/text.ts
    - scanner: typescript
      file: packages/graphics/src/core/connector-interaction.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/embedded.ts
    - scanner: typescript
      file: packages/graphics/src/core/commands.ts
    - scanner: typescript
      file: packages/graphics/src/core/shapes/ellipse.ts
    - scanner: typescript
      file: packages/graphics/src/core/drawing.ts
    - scanner: typescript
      file: packages/graphics/src/core/rich-text.ts
    - scanner: typescript
      file: packages/graphics/src/core/backend.ts
      symbol: GraphicsBackend
  technology: TypeScript
description: Shared package graphics
---

A shape-owned annotation, not an independently selectable scene node.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/graphics/src/core/connector-interaction.ts](../../../../packages/graphics/src/core/connector-interaction.ts) | [apps/web/src/features/block-canvas/primitives/create-connector-state.ts](../../../../apps/web/src/features/block-canvas/primitives/create-connector-state.ts) | Invokes supplied callbacks: commit, getDocument, onChange | typescript |
