---
type: C4 Component
title: HomePosts
status: stable
groma:
  id: homeposts
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/routes/posts/homePosts.ts
      symbol: homePosts
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostsPageTail.tsx
      symbol: PostsPageTail
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/mfs-sharing/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostComparison.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/doppler-config/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/graphql-cache/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/macro-vs-slack/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/macro-vs-clickup/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostDiagram.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/index.tsx
      symbol: PostsIndex
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/ai-editing-agents/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostTagList.tsx
      symbol: PostTagList
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/why-macro-is-open-source/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostCover.tsx
      symbol: PostCover
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/macro-vs-superhuman/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/macro-vs-linear/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/macro-vs-notion/index.tsx
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostFaq.tsx
      symbol: PostFaqItem
    - scanner: typescript
      file: apps/marketing/src/routes/posts/registry.ts
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostGraphics.tsx
      symbol: postGraphics
    - scanner: typescript
      file: apps/marketing/src/routes/posts/PostPage.tsx
      symbol: PostPage
    - scanner: typescript
      file: apps/marketing/src/routes/posts/entries/gmail-rate-limits/index.tsx
  technology: SolidJS
description: Public site page or component
---

Import only card metadata so the homepage does not load every article body.
