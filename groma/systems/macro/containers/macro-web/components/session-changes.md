---
type: C4 Component
title: Changes
status: stable
groma:
  id: session-changes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/changes/queries/session-changes.ts
    - scanner: typescript
      file: apps/web/src/features/changes/context/changes-context.ts
    - scanner: typescript
      file: apps/web/src/features/changes/debug/Gallery.tsx
      symbol: ChangesGallery
    - scanner: typescript
      file: apps/web/src/features/changes/components/ChangesToggleButton.tsx
      symbol: ChangesToggleButton
    - scanner: typescript
      file: apps/web/src/features/changes/views/ChangesPane.tsx
      symbol: ChangesPane
    - scanner: typescript
      file: apps/web/src/features/changes/components/ChangesNotice.tsx
    - scanner: typescript
      file: apps/web/src/features/changes/queries/pull-request-stats.ts
    - scanner: typescript
      file: apps/web/src/features/changes/core/layout.ts
    - scanner: typescript
      file: apps/web/src/features/changes/changes-search.ts
      symbol: changesSearch
    - scanner: typescript
      file: apps/web/src/features/changes/views/ChangesSplit.tsx
      symbol: ChangesSplit
    - scanner: typescript
      file: apps/web/src/features/changes/components/ReviewNotesChip.tsx
      symbol: ReviewNotesChip
    - scanner: typescript
      file: apps/web/src/features/changes/core/review-notes.ts
    - scanner: typescript
      file: apps/web/src/features/changes/components/ChangesHeader.tsx
      symbol: ChangesHeader
    - scanner: typescript
      file: apps/web/src/features/changes/debug/gallery-fixture.ts
      symbol: gallerySummary
    - scanner: typescript
      file: apps/web/src/features/changes/views/ChangesTreeDrawer.tsx
      symbol: ChangesTreeDrawer
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-changes-model.ts
    - scanner: typescript
      file: apps/web/src/features/changes/agent-session-changes.tsx
      symbol: AgentChangesProvider
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-tree-layout.ts
      symbol: createTreeLayout
    - scanner: typescript
      file: apps/web/src/features/changes/changes.tsx
      symbol: ChangesProvider
    - scanner: typescript
      file: apps/web/src/features/changes/queries/keys.ts
      symbol: changesKeys
    - scanner: typescript
      file: apps/web/src/features/changes/views/ChangesControls.tsx
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-changes.ts
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-pane-layout.ts
    - scanner: typescript
      file: apps/web/src/features/changes/components/NoteAnnotation.tsx
      symbol: NoteAnnotation
    - scanner: typescript
      file: apps/web/src/features/changes/core/pull-request.ts
      symbol: pullRequestNumber
    - scanner: typescript
      file: apps/web/src/features/changes/context/changes-controller.tsx
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-changes-narrow.ts
      symbol: createChangesNarrow
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-review-state.ts
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-persisted-scope-state.ts
    - scanner: typescript
      file: apps/web/src/features/changes/primitives/create-split-presence.ts
      symbol: createSplitPresence
    - scanner: typescript
      file: apps/web/src/features/changes/queries/changes-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/changes/core/changeset.ts
    - scanner: typescript
      file: apps/web/src/features/changes/pane-view-state.ts
    - scanner: typescript
      file: apps/web/src/features/changes/browser-host.ts
      symbol: createBrowserChangesActions
    - scanner: typescript
      file: apps/web/src/features/changes/components/CopyFilePathButton.tsx
      symbol: CopyFilePathButton
    - scanner: typescript
      file: apps/web/src/features/changes/components/ChangesReadyCard.tsx
      symbol: ChangesReadyCard
  technology: SolidJS
  group: Shell
description: File tree and diff pane with optional review notes.
---

A host supplies `ChangesSource` and `ChangesHost`. Shared UI does not read agent-session context. The readme says `AgentChangesProvider` supplies the harness source, and `block-pr/component/PrChanges.tsx` supplies the storage-service PR source without an agent capability. Those adapter files were not opened in this pass.
