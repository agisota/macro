---
type: C4 Component
title: Core clipboard
status: stable
groma:
  id: block-fig-core-clipboard
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/clipboard.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/viewer-toolbar.tsx
      symbol: ViewerToolbar
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/fig-sharing.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/dev-inspect.tsx
      symbol: DevInspect
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-fig-editor.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-design-system.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-tile-compositor.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/layout-aids-overlay.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/camera.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/mixed-fields.tsx
      symbol: MixedFields
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/paint-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/selection.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/arith.ts
      symbol: evaluate
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/auto-layout-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/main-menu.tsx
      symbol: MainMenu
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/session-notice.tsx
      symbol: SessionNotice
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/code-snippets.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/mixed.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/layout-grid.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/text-resizing.tsx
      symbol: TextResizing
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/inspector-select.tsx
      symbol: InspectorSelect
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/design-system-view.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/fig-context-menu.tsx
      symbol: FigContextMenu
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/review-buttons.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/swatch-popover.tsx
      symbol: SwatchPopover
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/component-picker.tsx
      symbol: ComponentPicker
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/text-editor.tsx
      symbol: TextEditor
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/design-panel.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/color.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/layer-tree.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/overlay.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/handoff-ops.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/color-picker.tsx
      symbol: ColorPicker
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/actions-palette.tsx
      symbol: ActionsPalette
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/fig-opening.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/css.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/bindings-section.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/fig-comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/rich-text.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-peer-overlays.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/fig-file.ts
      symbol: saveFigFile
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/collab-entries.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/library-assets.tsx
      symbol: LibraryAssets
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/library-views.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/viewer-zoom.tsx
      symbol: ViewerZoom
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/export-section.tsx
      symbol: ExportSection
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/shortcuts-dialog.tsx
      symbol: ShortcutsDialog
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/editor-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/tiles.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/library-updates.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/assets-panel.tsx
      symbol: AssetsPanel
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/layer-icon.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/prototype.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/layers-panel.tsx
      symbol: LayersPanel
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/layout-grid-section.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/type-controls.tsx
      symbol: TypeControls
    - scanner: typescript
      file: apps/web/src/features/block-fig/fig-block.tsx
      symbol: FigBlock
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/peer-presence.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/rotation.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/fonts.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/paint.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/resizable-panel.tsx
      symbol: ResizablePanel
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/fig-viewer.tsx
      symbol: FigViewer
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/libraries-dialog.tsx
      symbol: LibrariesDialog
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/align.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/design-fields.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/panel-section.tsx
      symbol: Section
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/context-menu.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/present-mode.tsx
      symbol: PresentMode
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/pages.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/vector.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-fig-libraries.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/asset-thumbnail.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/instance-section.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/export-settings.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/lift.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/geometry-sections.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/prepare-engine.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/local-styles.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/design-system.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/fig-libraries.ts
      symbol: useFigLibrarySource
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-fig-comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-layout-aids.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/snap.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/comments-panel.tsx
      symbol: CommentsPanel
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/prototype-noodles.tsx
      symbol: PrototypeNoodles
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/save-indicator.tsx
      symbol: SaveIndicator
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/property-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/component-preview.tsx
      symbol: ComponentPreview
    - scanner: typescript
      file: apps/web/src/features/block-fig/context/fig-viewer-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/font-source.ts
      symbol: createFontSource
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-font-registry.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-fig-review.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/caret.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/fig-collab.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/spacing.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/measure.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/type-settings.tsx
      symbol: TypeSettings
    - scanner: typescript
      file: apps/web/src/features/block-fig/context/fig-libraries.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/component-section.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/rulers.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/viewer-canvas.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/boolean.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/boolean-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/libraries.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/fig-sync.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-fig-context-menu.ts
      symbol: createFigContextMenu
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/type.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-fig-viewer.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/publish-dialog.tsx
      symbol: PublishDialog
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/effect-controls.tsx
      symbol: EffectList
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/prototype-panel.tsx
      symbol: PrototypePanel
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/shortcuts.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/comment-pins.tsx
      symbol: CommentPins
    - scanner: typescript
      file: apps/web/src/features/block-fig/queries/create-fig.ts
      symbol: createFigDocument
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/style-control.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/resolve-frame-drop.ts
      symbol: resolveFrameDrop
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/palette.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/panel-toggle.tsx
      symbol: PanelToggle
    - scanner: typescript
      file: apps/web/src/features/block-fig/primitives/create-handoff.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/core/presence.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/variable-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/context/fig-comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/views/macro-comments.tsx
      symbol: useMacroComments
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/missing-fonts.tsx
      symbol: MissingFonts
    - scanner: typescript
      file: apps/web/src/features/block-fig/components/font-picker.tsx
      symbol: FontPicker
  technology: SolidJS
  group: Files
description: '`.fig` viewer block.'
---

The comment says it is wired to the worker engine and document storage. `block-ai` imports `createFontSource` from this feature's font-source query (`block-ai/ai-block.tsx:8`). Share and file-menu chrome match the other design blocks.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-fig/primitives/create-tile-compositor.ts](../../../../../../apps/web/src/features/block-fig/primitives/create-tile-compositor.ts) | [apps/web/src/features/block-ai/views/ai-canvas.tsx](../../../../../../apps/web/src/features/block-ai/views/ai-canvas.tsx) | Invokes supplied callback: onTile | typescript |
