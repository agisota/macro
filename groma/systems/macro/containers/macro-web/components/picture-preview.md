---
type: C4 Component
title: Block pptx
status: stable
groma:
  id: picture-preview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/picture-preview.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/comments-pane.tsx
      symbol: CommentsPane
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/chart-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/insert-tab.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/queries/presentation-engine.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/find.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/slideshow.tsx
      symbol: SlideShow
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/slide-size-dialog.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-format-painter.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/queries/presentation-sync.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/queries/presentation-collab.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/review-tab.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/context/pptx-editor-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/slide-master-tab.tsx
      symbol: SlideMasterTab
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/comment-markers.tsx
      symbol: CommentMarkers
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/smartart/smartart-preview.tsx
      symbol: SmartArtPreview
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/text-direction.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-media-urls.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/crop-overlay.tsx
      symbol: CropOverlay
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/formatting.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/pptx-block.tsx
      symbol: PptxBlock
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/find-replace.tsx
      symbol: FindReplace
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/transitions.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/smartart/smartart-menu.tsx
      symbol: SmartArtMenuItems
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-deck-setup.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/edit-points-overlay.tsx
      symbol: EditPointsOverlay
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/equation-tab.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/morph-scene.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/views/pptx-editor.tsx
      symbol: PptxEditor
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/presenter-view.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/smartart/text-pane.tsx
      symbol: SmartArtTextPane
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-smart-art.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-edit-points.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/other-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-spell-check.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-presentation-session.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/font-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/animation-timeline.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/header-footer.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/export-images.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/shape-gallery.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-guides.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/deck-setup-dialogs.tsx
      symbol: DeckSetupDialogs
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/section-header.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/selection.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/selection-overlay.tsx
      symbol: SelectionOverlay
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/smartart/smartart-dialog.tsx
      symbol: SmartArtDialog
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/master-view.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-deck-commands.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/animation-pane.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/equations.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/format-pane.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/format-painter.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/smartart/smartart-stage.tsx
      symbol: SmartArtStage
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-spelling-pane.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/notes-panel.tsx
      symbol: NotesPanel
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/palette.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/animations-tab.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/shape-geometry-menus.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/header-footer-dialog.tsx
      symbol: HeaderFooterDialog
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/animation-effects.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-slide-editor.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/sections.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/rulers.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/smartart/smartart-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/slide-size.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/queries/presentation-file.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/text-commands.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-equation-editor.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-master-view.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/animation-catalog.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/stage-context-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/link-dialog.tsx
      symbol: LinkDialog
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/peer-presence.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/export-pictures.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/effects.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/bitmap-canvas.tsx
      symbol: BitmapCanvas
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/equation-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/presenter-media.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/links.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/print-dialog.tsx
      symbol: PrintDialog
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/edit-points.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/selection-pane.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/rulers.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/home-tab.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-clipboard.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/text-direction.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/snap.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/table-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/spelling.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/table.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/geometry.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/media-poster.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-show.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/pdf.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/slide-rail.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/spelling-scan.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/placeholder-outlines.tsx
      symbol: PlaceholderOutlines
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-picture-images.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/master-rail.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/smartart.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-render-queue.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/media-player.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/effects-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/spelling-pane.tsx
      symbol: SpellingPane
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/media.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/export-dialog.tsx
      symbol: ExportDialog
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/print-layout.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-thumbnails.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/caret.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/morph.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/slide-stage.tsx
      symbol: SlideStage
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/collab-entries.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/themes.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-view-options.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/picture.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/deck-setup-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-editor-commands.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/show-canvas.tsx
      symbol: ShowCanvas
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/effects-pane.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/ribbon.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/spelling-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/spell-squiggles.tsx
      symbol: SpellSquiggles
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/slide-selection.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/rename-layout-dialog.tsx
      symbol: RenameLayoutDialog
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/guides.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/components/ribbon/picture-format-tab.tsx
      symbol: PictureFormatTab
    - scanner: typescript
      file: apps/web/src/features/block-pptx/primitives/create-crop-mode.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/core/guides.ts
  technology: SolidJS
  group: Files
description: PowerPoint block.
---

The header comment says it is wired to the worker engine and document storage. It imports `ChatWithAgentButton` from `chat` and share/presence chrome shared with other document blocks. The worker client itself was not opened.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-pptx/pptx-block.tsx](../../../../../../apps/web/src/features/block-pptx/pptx-block.tsx) | [apps/web/src/features/chat/ChatWithAgentButton.tsx](../../../../../../apps/web/src/features/chat/ChatWithAgentButton.tsx) | adds chat-with-agent header action | component import |
