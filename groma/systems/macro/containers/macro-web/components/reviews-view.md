---
type: C4 Component
title: Reviews view
status: stable
groma:
  id: reviews-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/reviews-view/reviews-view.tsx
      symbol: ReviewsView
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsSidebar.tsx
      symbol: ReviewsSidebar
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsEmptyState.tsx
      symbol: ReviewsEmptyState
    - scanner: typescript
      file: apps/web/src/features/reviews-view/queries/use-reviews-mergeability-query.ts
      symbol: useReviewsMergeabilityQuery
    - scanner: typescript
      file: apps/web/src/features/reviews-view/core/reviews-status.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/core/reviews-board.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/route-views.tsx
    - scanner: typescript
      file: apps/web/src/features/reviews-view/reviews-types.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/queries/use-reviews-query.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsStatusTabs.tsx
      symbol: ReviewsStatusTabs
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewContextMenu.tsx
      symbol: ReviewContextMenuContent
    - scanner: typescript
      file: apps/web/src/features/reviews-view/views/ReviewsListTopBar.tsx
      symbol: ReviewsListTopBar
    - scanner: typescript
      file: apps/web/src/features/reviews-view/queries/use-reviews-facets-query.ts
      symbol: useReviewsFacetsQuery
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsList.tsx
    - scanner: typescript
      file: apps/web/src/features/reviews-view/reviews-filter.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/reviews-tab-search.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/reviews-view-skeleton.tsx
      symbol: ReviewsViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsBoard.tsx
      symbol: ReviewsBoard
    - scanner: typescript
      file: apps/web/src/features/reviews-view/reviews-hosted-content.ts
      symbol: reviewsHostedContent
    - scanner: typescript
      file: apps/web/src/features/reviews-view/primitives/create-reviews-list-controller.ts
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsControls.tsx
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/ReviewsPrDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/reviews-view/components/RepositoriesPromotion.tsx
      symbol: RepositoriesPromotion
    - scanner: typescript
      file: apps/web/src/features/reviews-view/core/reviews-rows.ts
  technology: SolidJS
  group: Tasks
description: Reviews board and PR detail host.
---

The view imports PR origin tools and the PR links query from `block-pr`, and uses view-shell breadcrumbs and touch pill tabs. `ReviewsRouteView` and `ReviewsPrDetailRouteView` lazy-load from this feature (`lazy-route-views.ts:102-108`). The route is `reviews` with a nested `pr/:foreignEntityId` (`app-router-view.tsx:449-457`).
