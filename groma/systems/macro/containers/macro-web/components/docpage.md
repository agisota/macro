---
type: C4 Component
title: Ui gallery
status: stable
groma:
  id: docpage
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/components/DocPage.tsx
      symbol: DocPage
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/components/CodeBlock.tsx
      symbol: CodeBlock
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/types.ts
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/components/GallerySidebar.tsx
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/UiGallery.tsx
      symbol: UiGallery
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/registry.ts
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/components/DemoPreview.tsx
      symbol: DemoPreview
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/components/CoveragePage.tsx
      symbol: CoveragePage
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/toast-inventory.tsx
    - scanner: typescript
      file: apps/web/src/features/ui-gallery/source.ts
  technology: SolidJS
description: Debug UI gallery.
---

Pages are `*.docs.tsx` files co-located with components, selected by the `ui` query param because the split layout drops params from `component/<id>` URLs. A debug route `view-ui` is always registered (`routes/routes.ts:861`, `routes/routes.ts:904-913`). It is not a product pane.
