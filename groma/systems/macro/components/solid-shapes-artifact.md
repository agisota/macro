---
type: C4 Component
title: graphics
status: stable
groma:
  id: solid-shapes-artifact
  parent: macro
  code:
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/artifact.tsx
      symbol: ArtifactPlaceholder
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/label.tsx
      symbol: ShapeLabelView
    - scanner: typescript
      file: packages/graphics/src/solid/shape-renderers.tsx
    - scanner: typescript
      file: packages/graphics/src/solid/radius-handles.tsx
      symbol: RadiusHandles
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/text.tsx
    - scanner: typescript
      file: packages/graphics/src/solid/selection-theme.ts
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/pencil.tsx
      symbol: PencilView
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/ellipse.tsx
      symbol: EllipseView
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/connector.tsx
      symbol: ConnectorView
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/rectangle.tsx
      symbol: RectangleView
    - scanner: typescript
      file: packages/graphics/src/solid/index.tsx
    - scanner: typescript
      file: packages/graphics/src/solid/create-shape-view.ts
      symbol: createShapeView
    - scanner: typescript
      file: packages/graphics/src/solid/shapes/embedded.tsx
      symbol: EmbeddedPlaceholder
    - scanner: typescript
      file: packages/graphics/src/solid/selection-outline.tsx
      symbol: ShapeSelectionOutline
    - scanner: typescript
      file: packages/graphics/src/solid/dot-grid-view.tsx
      symbol: DotGrid
  technology: TypeScript
description: Shared package graphics
---

Hosts run artifact HTML in their own sandbox; graphics never executes it.
