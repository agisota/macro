---
type: C4 Component
title: Activity
status: stable
groma:
  id: my-activity
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/activity/primitives/my-activity.ts
    - scanner: typescript
      file: apps/web/src/features/activity/use-activity-feed-flag.ts
      symbol: useActivityFeedFlag
    - scanner: typescript
      file: apps/web/src/features/activity/core/contribution-grid.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/activity-dates.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/fold-panel.ts
    - scanner: typescript
      file: apps/web/src/features/activity/activity-search.ts
      symbol: activitySearch
    - scanner: typescript
      file: apps/web/src/features/activity/queries/entity-query.ts
    - scanner: typescript
      file: apps/web/src/features/activity/components/entity-mention.tsx
      symbol: EntityMention
    - scanner: typescript
      file: apps/web/src/features/activity/queries/feed-query.ts
    - scanner: typescript
      file: apps/web/src/features/activity/components/top-entities.tsx
    - scanner: typescript
      file: apps/web/src/features/activity/components/action-glyph.tsx
      symbol: ActionGlyph
    - scanner: typescript
      file: apps/web/src/features/activity/open-entity-in-split.ts
      symbol: openEntityInSplit
    - scanner: typescript
      file: apps/web/src/features/activity/components/property-change.tsx
      symbol: PropertyChangeText
    - scanner: typescript
      file: apps/web/src/features/activity/components/actor-name.tsx
      symbol: ActorName
    - scanner: typescript
      file: apps/web/src/features/activity/use-entity-activity-flag.ts
      symbol: useEntityActivityFlag
    - scanner: typescript
      file: apps/web/src/features/activity/views/entity-activity-section.tsx
    - scanner: typescript
      file: apps/web/src/features/activity/queries/select-entity-activity.ts
    - scanner: typescript
      file: apps/web/src/features/activity/components/activity-scope-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/activity/components/action-phrase.tsx
      symbol: ActionPhrase
    - scanner: typescript
      file: apps/web/src/features/activity/queries/fixtures.ts
    - scanner: typescript
      file: apps/web/src/features/activity/queries/property-value.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/actor.ts
    - scanner: typescript
      file: apps/web/src/features/activity/primitives/actor-name.ts
      symbol: createActorName
    - scanner: typescript
      file: apps/web/src/features/activity/core/activity-stats.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/collapse-runs.ts
    - scanner: typescript
      file: apps/web/src/features/activity/components/action-graph.tsx
      symbol: ActionGraph
    - scanner: typescript
      file: apps/web/src/features/activity/route-views.tsx
      symbol: ActivityRouteView
    - scanner: typescript
      file: apps/web/src/features/activity/queries/database-activity-query.ts
      symbol: createDatabaseActivityQuery
    - scanner: typescript
      file: apps/web/src/features/activity/core/placeholder-overview.ts
      symbol: placeholderOverview
    - scanner: typescript
      file: apps/web/src/features/activity/views/my-activity-view.tsx
      symbol: MyActivityView
    - scanner: typescript
      file: apps/web/src/features/activity/context/activity-context.tsx
    - scanner: typescript
      file: apps/web/src/features/activity/components/activity-timeline-row.tsx
      symbol: ActivityTimelineRow
    - scanner: typescript
      file: apps/web/src/features/activity/core/describe-action.ts
    - scanner: typescript
      file: apps/web/src/features/activity/primitives/entity-opener.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/group-events.ts
    - scanner: typescript
      file: apps/web/src/features/activity/primitives/entity-activity.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/event.ts
    - scanner: typescript
      file: apps/web/src/features/activity/core/intensity.ts
    - scanner: typescript
      file: apps/web/src/features/activity/queries/overview-query.ts
      symbol: createMyActivityOverviewQuery
    - scanner: typescript
      file: apps/web/src/features/activity/queries/decode.ts
    - scanner: typescript
      file: apps/web/src/features/activity/views/activity-timeline-row.tsx
      symbol: ActivityTimelineRow
    - scanner: typescript
      file: apps/web/src/features/activity/core/feed-rows.ts
  technology: SolidJS
description: You/Team activity feed.
---

The search namespace is `activity` with scope `mine` or `team`, defaulting to mine. `ActivityRouteView` lazy-loads `activity/route-views` (`lazy-route-views.ts:9-11`). Row components were not opened; a search of the directory showed glyph, phrase, and timeline row files.
