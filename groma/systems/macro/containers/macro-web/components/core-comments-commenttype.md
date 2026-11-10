---
type: C4 Component
title: Web module
status: stable
groma:
  id: core-comments-commenttype
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/comments/commentType.ts
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/messageAdapter.ts
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/DiscussionInput.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/context.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/Discussion.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/comments/MinimizedThreads.tsx
      symbol: MinimizedThread
    - scanner: typescript
      file: apps/web/src/lib/core/comments/discussion/configured-discussion-markdown-editor.ts
      symbol: createConfiguredDiscussionMarkdownEditor
    - scanner: typescript
      file: apps/web/src/lib/core/comments/MeasureContainer.tsx
      symbol: MeasureContainer
    - scanner: typescript
      file: apps/web/src/lib/core/comments/Thread.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Comments are messages with UUIDs; drafts carry numeric or prefixed sentinel ids until the server assigns one.
