---
type: C4 Component
title: Form tools
status: stable
groma:
  id: form-tools
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/form-tools.ts
      symbol: invalidateAuthoredForm
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/graphql-folders.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/document-download.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/entity-mutations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/snippets.ts
      symbol: fetchSnippetRaw
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/documentLoadBundle.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/deleted.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/offline-context-cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/system-skills.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/databases.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/pr-draft.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/folder-list.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/file-document.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/offline-context-runtime.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/sync-document-context.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/pr-state.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/github-pull-requests.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/sync-document-context-loader.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/forms-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/attachment-references.ts
      symbol: useAttachmentReferencesQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/github-pull-request-changes.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/offline-context.test-helpers.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/database-queries.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/document-metadata.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/authorized-context.ts
      symbol: authorizedContext
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/project-data.ts
      symbol: useProjectDataQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/project-preview.ts
      symbol: useProjectPreviewQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/binary-document.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/pr-mention.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/task-duplicates.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/documentLoad/keys.ts
      symbol: documentLoadKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/projects.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/pr-mention-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/databases-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/document-location.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/forms.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/document-cache.ts
      symbol: clearDocumentQueryCache
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/pr-merge.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/storage/skill-description.ts
  technology: SolidJS
  group: Data queries
description: Folder row returned by the GraphQL `user.folders` query.
---

Folder row returned by the GraphQL `user.folders` query.
