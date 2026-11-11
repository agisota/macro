---
type: C4 Component
title: CommentsDemo
status: stable
groma:
  id: commentsdemo
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/debug/CommentsDemo.tsx
      symbol: CommentsDemo
    - scanner: typescript
      file: apps/web/src/components/diff-view/debug/fixtures.ts
    - scanner: typescript
      file: apps/web/src/components/diff-view/debug/DiffViewGallery.tsx
      symbol: DiffViewGallery
  technology: SolidJS
  group: Diffs
description: 'Review threads under diff lines, the way a pull request host shows them: `createDiffComments` places the threads and holds the draft, and th'
---

Review threads under diff lines, the way a pull request host shows them: `createDiffComments` places the threads and holds the draft, and the `CommentThread` parts draw each one. Threads live in memory here.
