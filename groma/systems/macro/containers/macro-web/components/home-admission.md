---
type: C4 Component
title: Home
status: stable
groma:
  id: home-admission
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-admission.ts
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-item-filter.ts
      symbol: soupItemMatchesHomeTab
    - scanner: typescript
      file: apps/web/src/features/home/home-composer-selection.ts
    - scanner: typescript
      file: apps/web/src/features/home/home-view-context.tsx
    - scanner: typescript
      file: apps/web/src/features/home/types.ts
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeReturnBreadcrumb.tsx
      symbol: HomeReturnBreadcrumb
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/queries/work-feed-shape.ts
      symbol: workFeedShape
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeList.tsx
      symbol: HomeList
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/home-work-feed.ts
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-pagination.ts
      symbol: getHomePagination
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeFilters.tsx
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeTabs.tsx
      symbol: HomeTabs
    - scanner: typescript
      file: apps/web/src/features/home/home-route.ts
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/primitives/work-feed.ts
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeListEntity.tsx
      symbol: HomeListEntity
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeEntityIcon.tsx
      symbol: HomeEntityIcon
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-query.ts
    - scanner: typescript
      file: apps/web/src/features/home/components/home-recommended-actions.tsx
      symbol: HomeRecommendedActions
    - scanner: typescript
      file: apps/web/src/features/home/components/home-suggestions.tsx
      symbol: HomeSuggestions
    - scanner: typescript
      file: apps/web/src/features/home/persistence.ts
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/queries/work-feed-mutations.ts
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-results.ts
    - scanner: typescript
      file: apps/web/src/features/home/home-route-schema.ts
    - scanner: typescript
      file: apps/web/src/features/home/core/type-selection.ts
    - scanner: typescript
      file: apps/web/src/features/home/home-preview-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeDateGroupHeader.tsx
      symbol: HomeDateGroupHeader
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeProjectPreview.tsx
      symbol: HomeProjectPreview
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeEmptyState.tsx
      symbol: HomeEmptyState
    - scanner: typescript
      file: apps/web/src/features/home/home-calendar-preview.ts
      symbol: useHomeCalendarPreview
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/queries/decode.ts
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeListSkeleton.tsx
      symbol: HomeListSkeleton
    - scanner: typescript
      file: apps/web/src/features/home/home-recent-sessions.tsx
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/home-scope.ts
    - scanner: typescript
      file: apps/web/src/features/home/home-agent-composer.tsx
      symbol: HomeAgentComposer
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeSetupPromotion.tsx
      symbol: HomeSetupPromotion
    - scanner: typescript
      file: apps/web/src/features/home/use-home-recommendations.ts
      symbol: useHomeRecommendations
    - scanner: typescript
      file: apps/web/src/features/home/home-chat-input.tsx
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-search.ts
      symbol: buildHomeSearchRequest
    - scanner: typescript
      file: apps/web/src/features/home/home-view.tsx
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/queries/work-feed-query.ts
    - scanner: typescript
      file: apps/web/src/features/home/chat-tips.tsx
      symbol: ChatTipsSection
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeListLayout.tsx
      symbol: HomeListLayout
    - scanner: typescript
      file: apps/web/src/features/home/queries/use-home-query.ts
    - scanner: typescript
      file: apps/web/src/features/home/route-views.tsx
      symbol: HomeRouteView
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/core/work-feed.ts
    - scanner: typescript
      file: apps/web/src/features/home/home-tab-search.ts
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-date-buckets.ts
    - scanner: typescript
      file: apps/web/src/features/home/tour.ts
    - scanner: typescript
      file: apps/web/src/features/home/home-rows.tsx
      symbol: SetupRow
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeChatStart.tsx
      symbol: HomeChatStart
    - scanner: typescript
      file: apps/web/src/features/home/home-section-boundary.tsx
      symbol: HomeSectionBoundary
    - scanner: typescript
      file: apps/web/src/features/home/home-facets.ts
  technology: SolidJS
description: Landing list, chat start, and inline previews.
---

This is the pane a signed-in member is sent to (`DEFAULT_ROUTE` is `/home`). `HomeView` composes `HomeList`, `HomeChatStart`, `HomeTabs`, and a preview panel. The calendar grid is lazy and loads only when Home's calendar route opens (`home-view.tsx:35-38`). `HomeRouteView` is imported directly, not via `lazy-route-views.ts` (`app-router-view.tsx:16`). Home is also the default pane when the last split would otherwise close (`app-router-view.tsx:249-251`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/home/home-view.tsx](../../../../../../apps/web/src/features/home/home-view.tsx) | [apps/web/src/features/calendar-view/calendar-view.tsx](../../../../../../apps/web/src/features/calendar-view/calendar-view.tsx) | lazy-loads calendar grid | dynamic import |

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/home/queries/use-home-query.ts](../../../../../../apps/web/src/features/home/queries/use-home-query.ts) | [apps/web/src/features/home/queries/use-home-unread-query.ts](../../../../../../apps/web/src/features/home/queries/use-home-unread-query.ts) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/features/home/work-feed/primitives/work-feed.ts](../../../../../../apps/web/src/features/home/work-feed/primitives/work-feed.ts) | [apps/web/src/lib/queries/notification/revalidation.ts](../../../../../../apps/web/src/lib/queries/notification/revalidation.ts) | Invokes supplied callback: revalidateNotifications | typescript |
