---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-diff-comments
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/comments/create-diff-comments.tsx
    - scanner: typescript
      file: apps/web/src/components/diff-view/comments/CommentThread.tsx
      symbol: CommentThread
  technology: SolidJS
description: Part of the signed-in client
---

Comments under diff lines, for `DiffView.Stack`: groups a host's items by the line they hang from (the last line of their range, like GitHub), holds the one comment being written, and lights the lines of the thread with focus. The host renders what each line shows; `CommentThread

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/diff-view/comments/create-diff-comments.tsx](../../../../../../apps/web/src/components/diff-view/comments/create-diff-comments.tsx) | [apps/web/src/components/diff-view/debug/CommentsDemo.tsx](../../../../../../apps/web/src/components/diff-view/debug/CommentsDemo.tsx) | Invokes supplied callbacks: rangeOf, render | typescript |
| [apps/web/src/components/diff-view/comments/create-diff-comments.tsx](../../../../../../apps/web/src/components/diff-view/comments/create-diff-comments.tsx) | [apps/web/src/features/changes/views/ChangesPane.tsx](../../../../../../apps/web/src/features/changes/views/ChangesPane.tsx) | Invokes supplied callbacks: canComment, rangeOf, render | typescript |
