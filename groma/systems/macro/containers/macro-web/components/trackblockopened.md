---
type: C4 Component
title: TrackBlockOpened
status: stable
groma:
  id: trackblockopened
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/internal/trackBlockOpened.ts
      symbol: track
    - scanner: typescript
      file: apps/web/src/lib/core/internal/App.tsx
      symbol: App
    - scanner: typescript
      file: apps/web/src/lib/core/internal/ThemeDebug.tsx
      symbol: ThemeDebug
    - scanner: typescript
      file: apps/web/src/lib/core/internal/IconGallery.tsx
      symbol: IconGallery
    - scanner: typescript
      file: apps/web/src/lib/core/internal/ContactDirectoryInspector.tsx
      symbol: ContactDirectoryInspector
    - scanner: typescript
      file: apps/web/src/lib/core/internal/ResizeDemo.tsx
      symbol: ResizeDemo
    - scanner: typescript
      file: apps/web/src/lib/core/internal/BlockLoader.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/internal/BlockEffectRunner.tsx
      symbol: BlockEffectRunner
    - scanner: typescript
      file: apps/web/src/lib/core/internal/DataDebug.tsx
      symbol: DataDebug
    - scanner: typescript
      file: apps/web/src/lib/core/internal/UserIconDemo.tsx
      symbol: UserIconDemo
    - scanner: typescript
      file: apps/web/src/lib/core/internal/loadBlockData.ts
      symbol: loadBlockDataAfterComponentPreload
  technology: SolidJS
description: Item types we want recorded in UserHistory on open. CRM types aren't CloudStorageItemType (they're not stored in document_storage), but the history endpoint acc
---

Item types we want recorded in UserHistory on open. CRM types aren't CloudStorageItemType (they're not stored in document_storage), but the history endpoint accepts any item_type as text and the soup's `viewed_updated` sort joins UserHistory generically — so writing these rows is what surfaces recently-opened companies/contacts in Quick Access and the @ mention menu.  Foreign entities (GitHub PRs) are intentionally omitted: they are not documents, and posting `/history/document/{id}` 401s becaus
