---
type: C4 Component
title: Block psd
status: stable
groma:
  id: transform
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/transform.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/views/menus.ts
      symbol: buildMenus
    - scanner: typescript
      file: apps/web/src/features/block-psd/views/layers-panel.tsx
      symbol: LayersPanel
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/serial-queue.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/menu-bar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/queries/create-psd.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/tools.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/fields.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/tiles.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/create-psd-commands.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/overlay.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/brush.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/queries/psd-file.ts
      symbol: savePsdFile
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/create-layer-thumbnails.ts
      symbol: createLayerThumbnails
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/create-tile-compositor.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/create-psd-editor.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/tool-overlay.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/peer-presence.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/filters.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/layer-row.tsx
      symbol: LayerRow
    - scanner: typescript
      file: apps/web/src/features/block-psd/psd-block.tsx
      symbol: PsdBlock
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/dialogs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/text.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/curve-editor.tsx
      symbol: CurveEditor
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/session-notice.tsx
      symbol: SessionNotice
    - scanner: typescript
      file: apps/web/src/features/block-psd/queries/psd-sharing.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/color.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/shapes.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/views/properties-panel.tsx
      symbol: PropertiesPanel
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/ops.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/queries/psd-collab.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/create-psd-view.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/primitives/create-canvas-tools.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/views/text-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/queries/psd-sync.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/options-bar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/floating.tsx
      symbol: Floating
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/color-swatch.tsx
      symbol: ColorSwatch
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/layer-tree.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/toolbar.tsx
      symbol: Toolbar
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/shortcuts.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/collab-entries.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/selection-math.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/panel-tabs.tsx
      symbol: PanelTabs
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/adjustments.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/views/psd-editor.tsx
      symbol: PsdEditor
    - scanner: typescript
      file: apps/web/src/features/block-psd/context/psd-editor-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/color-picker.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/views/psd-canvas.tsx
      symbol: PsdCanvas
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/gradient.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/adjustment-controls.tsx
      symbol: AdjustmentControls
    - scanner: typescript
      file: apps/web/src/features/block-psd/components/notice-banner.tsx
      symbol: NoticeBanner
    - scanner: typescript
      file: apps/web/src/features/block-psd/core/presence.ts
  technology: SolidJS
  group: Files
description: PSD block.
---

Same chrome pattern as the other design-file blocks: split header, share trigger, live indicators, and `useBlockEntityCommands` from `next-soup`. The comment adds live collaboration and document storage. The engine binding was not opened.
