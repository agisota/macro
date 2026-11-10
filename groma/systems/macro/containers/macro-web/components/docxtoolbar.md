---
type: C4 Component
title: Block write
status: stable
groma:
  id: docxtoolbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-write/components/DocxToolbar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-write/views/DocxComments.tsx
    - scanner: typescript
      file: apps/web/src/features/block-write/primitives/create-docx-find.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/primitives/create-page-renderer.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/core/delta.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/primitives/create-docx-comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/DocxBlock.tsx
      symbol: DocxBlock
    - scanner: typescript
      file: apps/web/src/features/block-write/core/comment-marks.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/views/DocxCollaborators.tsx
      symbol: DocxCollaboratorCarets
    - scanner: typescript
      file: apps/web/src/features/block-write/views/DocxMarginLayout.tsx
      symbol: DocxMarginLayout
    - scanner: typescript
      file: apps/web/src/features/block-write/primitives/create-docx-editor.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/views/DocxPages.tsx
    - scanner: typescript
      file: apps/web/src/features/block-write/views/DocxWordComment.tsx
      symbol: DocxWordCommentCard
    - scanner: typescript
      file: apps/web/src/features/block-write/core/docx-loro-schema.ts
      symbol: DOCX_LORO_SCHEMA
    - scanner: typescript
      file: apps/web/src/features/block-write/queries/docx-session.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/primitives/create-docx-download.ts
      symbol: createDocxDownload
    - scanner: typescript
      file: apps/web/src/features/block-write/core/clipboard.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/views/DocxEditorView.tsx
    - scanner: typescript
      file: apps/web/src/features/block-write/components/DocxFindBar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-write/queries/keys.ts
      symbol: docxKeys
    - scanner: typescript
      file: apps/web/src/features/block-write/core/docx-collab.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/queries/docx-original.ts
      symbol: docxOriginalQueryOptions
    - scanner: typescript
      file: apps/web/src/features/block-write/core/keymap.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/core/comment-layout.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/queries/docx-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/core/docx-seed.ts
      symbol: buildSeedSnapshot
    - scanner: typescript
      file: apps/web/src/features/block-write/core/docx-loro.ts
  technology: SolidJS
  group: Docs
description: Word document block; PDF fallback when the flag is off.
---

The comment says when `enable-docx-editor` is off, `write` resolves to PDF rendering via `fileTypeToBlockName`. Load requires a sync-service source and fetches a file document open context, not the markdown open context, because an uploaded DOCX stays a stored file until an editor seeds it. `DocxBlock.tsx` imports `ChatWithAgentButton` from `chat`. Sync and edit permissions are enabled on the definition.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-write/DocxBlock.tsx](../../../../../../apps/web/src/features/block-write/DocxBlock.tsx) | [apps/web/src/features/chat/ChatWithAgentButton.tsx](../../../../../../apps/web/src/features/chat/ChatWithAgentButton.tsx) | adds chat-with-agent header action | component import |
