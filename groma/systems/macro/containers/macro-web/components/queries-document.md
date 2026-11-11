---
type: C4 Component
title: Queries document
status: stable
groma:
  id: queries-document
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/document.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/media-upload-previews.tsx
      symbol: MediaUploadPreviews
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/collaboration.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/parse.ts
      symbol: createNumericParser
    - scanner: typescript
      file: apps/web/src/features/block-canvas/context/canvas-ancestry.ts
      symbol: CanvasAncestry
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/inspector-color-field.tsx
      symbol: InspectorColorField
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/defaults.ts
      symbol: initialAppearance
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/inspector-number-field.tsx
      symbol: InspectorNumberField
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/inspector-field.tsx
      symbol: InspectorField
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/seed-scene.ts
      symbol: createCanvasNextScene
    - scanner: typescript
      file: apps/web/src/features/block-canvas/hotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/arrange-controls.tsx
      symbol: CanvasAlignmentControls
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/view.ts
      symbol: CanvasView
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/eraser.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/artifact-inspector.tsx
      symbol: ArtifactInspector
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/text-input.ts
      symbol: attachTextInput
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/legacy-format.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/component/Block.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/canvas-read-only-view.tsx
      symbol: CanvasReadOnlyView
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/text-inspector.tsx
      symbol: TextInspector
    - scanner: typescript
      file: apps/web/src/features/block-canvas/canvas-next.tsx
      symbol: CanvasNextEditor
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-canvas-state.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/clipboard.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/artifact-view.tsx
      symbol: CanvasArtifactView
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/migrate-legacy.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/canvas-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/connector-targets.tsx
      symbol: ConnectorTargets
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/load-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/assets.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-insert-state.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/insert-radial-menu.tsx
      symbol: CanvasInsertRadialMenu
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/asset-picker.tsx
      symbol: CanvasAssetPicker
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-asset-state.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/selection-layout-inspector.tsx
      symbol: SelectionLayoutInspector
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/text-codec.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/canvas-view.tsx
      symbol: CanvasView
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/snapping.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/embedded-items.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/references.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/block-embed-adapter.tsx
      symbol: CanvasBlockEmbed
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-eraser-state.ts
      symbol: createEraserState
    - scanner: typescript
      file: apps/web/src/features/block-canvas/canvas-next-document.tsx
      symbol: CanvasNextDocument
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-canvas-snapping.ts
      symbol: createCanvasSnapping
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/artifact-frame.tsx
      symbol: ArtifactFrame
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/asset-drop.ts
      symbol: createCanvasAssetDrop
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/insert-menu.tsx
      symbol: CanvasInsertMenu
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/selection-layout.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/inspector-select.tsx
      symbol: InspectorSelect
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/artifact-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/canvas-session.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/style-inspector.tsx
      symbol: StyleInspector
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/connector-style-icon.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/canvas-toolbars.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/document-format.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/media.ts
      symbol: useCanvasMediaSource
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-embed-state.ts
      symbol: createEmbedState
    - scanner: typescript
      file: apps/web/src/features/block-canvas/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/read-swatch-color.ts
      symbol: readSwatchColor
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/references.ts
      symbol: canvasReferenceSource
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/insert.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-connector-state.ts
      symbol: createConnectorState
    - scanner: typescript
      file: apps/web/src/features/block-canvas/component/Loading.tsx
      symbol: Loading
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/artifact-library-inspector.tsx
      symbol: ArtifactLibraryInspector
    - scanner: typescript
      file: apps/web/src/features/block-canvas/component/CanvasDocument.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/observe-object-snapping.ts
      symbol: observeObjectSnapping
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/inspector-control-frame.ts
      symbol: INSPECTOR_CONTROL_FRAME_CLASS
    - scanner: typescript
      file: apps/web/src/features/block-canvas/constants.ts
      symbol: URL_PARAMS
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/text-content.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/text-editing-view.tsx
      symbol: TextEditingView
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/canvas-sync.ts
      symbol: canvasSyncSource
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-inspector-preview.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/context/reference-source.ts
      symbol: CanvasReferenceSource
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/connector-inspector.tsx
      symbol: ConnectorInspector
    - scanner: typescript
      file: apps/web/src/features/block-canvas/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/inspector-section.tsx
      symbol: InspectorSection
    - scanner: typescript
      file: apps/web/src/features/block-canvas/context/artifact-library.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/embed-view.ts
      symbol: CanvasEmbedViewProps
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/artifact-presentation.tsx
      symbol: ArtifactPresentation
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/presence.ts
      symbol: decodeCanvasPresence
    - scanner: typescript
      file: apps/web/src/features/block-canvas/queries/assets.ts
      symbol: canvasAssetSource
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/document-display.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/text-lexical.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/media-content.tsx
    - scanner: typescript
      file: apps/web/src/features/block-canvas/views/canvas-context-menu.tsx
      symbol: CanvasContextMenu
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-shared-reference-tracking.ts
      symbol: createSharedReferenceTracking
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-text-state.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/primitives/create-canvas-presence.ts
      symbol: createCanvasPresence
    - scanner: typescript
      file: apps/web/src/features/block-canvas/components/eraser-trail.tsx
      symbol: EraserTrail
    - scanner: typescript
      file: apps/web/src/features/block-canvas/core/excalidraw.ts
  technology: SolidJS
  group: Canvas
description: Canvas Next scene editor and legacy JSON migration.
---

The readme says no rollout flag is required. Drive detail and block hosts use `queries/document.ts` to authorize shared content before a legacy file seed. Native canvases do not need a presigned blob URL. Ask Macro attaches the canvas to an agent conversation; `ReadCanvas` inspects the live scene and `EditCanvas` runs bounded SDK commands in the same Loro room. Unversioned JSON converts to version 2 on load; viewing does not save a migration.
