---
type: C4 Component
title: Block unknown
status: stable
groma:
  id: core-text-preview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-unknown/core/text-preview.ts
    - scanner: typescript
      file: apps/web/src/features/block-unknown/legacy-office.ts
    - scanner: typescript
      file: apps/web/src/features/block-unknown/queries/keys.ts
      symbol: unknownFileKeys
    - scanner: typescript
      file: apps/web/src/features/block-unknown/component/UnknownFilePreview.tsx
      symbol: UnknownFilePreview
    - scanner: typescript
      file: apps/web/src/features/block-unknown/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-unknown/component/UnknownTextContent.tsx
      symbol: UnknownTextContent
    - scanner: typescript
      file: apps/web/src/features/block-unknown/queries/text-preview.ts
    - scanner: typescript
      file: apps/web/src/features/block-unknown/component/Block.tsx
      symbol: BlockUnknown
    - scanner: typescript
      file: apps/web/src/features/block-unknown/component/UnknownContent.tsx
      symbol: UnknownContent
    - scanner: typescript
      file: apps/web/src/features/block-unknown/signal/blockData.ts
    - scanner: typescript
      file: apps/web/src/features/block-unknown/definition.ts
  technology: SolidJS
  group: Files
description: Generic file block.
---

Load calls `storageServiceClient.getDocumentMetadata` for a DSS id. Preload returns before the metadata call completes. `email-message` falls back to the block name `unknown` when an attachment MIME has no mapping (`email-message/attachment-action-adapter.ts:17-21`).
