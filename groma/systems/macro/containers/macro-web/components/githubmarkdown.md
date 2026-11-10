---
type: C4 Component
title: Block pr
status: stable
groma:
  id: githubmarkdown
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-pr/util/githubMarkdown.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PrSkeletons.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pr/hooks/usePrShare.tsx
      symbol: usePrShare
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PrSplitHeader.tsx
      symbol: PrSplitHeader
    - scanner: typescript
      file: apps/web/src/features/block-pr/data/prDiscussionSource.ts
      symbol: createPrDiscussionSource
    - scanner: typescript
      file: apps/web/src/features/block-pr/primitives/pr-file-operations.ts
      symbol: usePrFileOperations
    - scanner: typescript
      file: apps/web/src/features/block-pr/data/queries.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PullRequestAttachment.tsx
      symbol: PullRequestAttachment
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/GithubMessageView.tsx
      symbol: GithubMessageView
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/sidepanel/open-from-side-panel.ts
      symbol: useOpenFromSidePanel
    - scanner: typescript
      file: apps/web/src/features/block-pr/side-panel/github-pull-request.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pr/data/pr-origin.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PrTimeline.tsx
      symbol: PrTimeline
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PrChanges.tsx
      symbol: PrChangesProvider
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/sidepanel/PrSidePanelSections.tsx
      symbol: PrSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/MergePullRequestButton.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pr/data/pr-changes.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/primitives/create-merge-pull-request-action.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/primitives/create-pr-actions.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/views/PrDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/sidepanel/PrLinkedWorkSection.tsx
      symbol: PrLinkedWorkSection
    - scanner: typescript
      file: apps/web/src/features/block-pr/util/prKey.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/data/pr-links.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/primitives/pull-request-ready-to-merge.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PrStatus.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PullRequestActionsButton.tsx
      symbol: PullRequestActionsButton
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/sidepanel/PrAgentSessionsSection.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pr/data/timeline.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/queries/pr-links-query.ts
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/Block.tsx
      symbol: PrBlock
    - scanner: typescript
      file: apps/web/src/features/block-pr/component/PrLinks.tsx
  technology: SolidJS
  group: Tasks
description: '`pr` block; diff stack stays lazy.'
---

The component is lazy so the Pierre/shiki diff stack stays out of the main chunk. Load requires a non-empty DSS id. Live tracking is off. `PrDetailRouteView` lazy-loads this feature's route views (`lazy-route-views.ts:34-36`). `agent-work` imports `parseGithubPrUrl` from here (`agent-work/core/work-item.ts:1`).
