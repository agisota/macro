---
type: C4 Component
title: Items
status: stable
groma:
  id: graphql-items
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/items.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/own-touch.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/utils.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/quick-access-snippets.ts
      symbol: useQuickAccessSnippetsQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/optimistic-done.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/ast.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/slash-menu-pull-requests.ts
      symbol: useSlashMenuPullRequests
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/request-timeout.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/create-grouped-soup-live-query.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/operations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/restored-membership.ts
      symbol: retainRestoredSoupItem
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/channel-list-revalidation.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/types.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/keys.ts
      symbol: graphqlSoupKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/reconciliation.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/items.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/create-soup-live-query.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/keys.ts
      symbol: soupKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/call-list-revalidation.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/grouped-page-evidence.ts
      symbol: createGroupedPageEvidence
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/create-keyed-projection.ts
      symbol: createKeyedProjection
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/graphql/create-graphql-grouped-soup-queries.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/date-ranges.ts
      symbol: propertyDateGroupKey
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/create-predicate-query.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/mail-state.ts
      symbol: readMailState
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/backfill.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/normalizer.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/external-write-scope.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/quick-access-skills.ts
      symbol: useQuickAccessSkillsQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/transform-utils.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/initiatives.ts
      symbol: materializeCachedGraphqlInitiatives
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/notified-floor.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/mail-view.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/stamp-floors.ts
      symbol: createStampFloors
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/page-timestamp.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/quick-access-initiatives.ts
      symbol: useQuickAccessInitiativesQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/done-projection.ts
      symbol: createGraphqlSoupDoneProjection
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/api.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/mail-date-groups.ts
      symbol: groupCachedMailByDate
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/search.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/quick-access-agent-sessions.ts
      symbol: useQuickAccessAgentSessionsQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/index.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/grouped-test-fixtures.ts
      symbol: groupedDocument
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/grouped-operations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/refresh.ts
      symbol: refreshSoupEntities
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/cache-activity-telemetry.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/entity-input.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/active-queries.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/grouped-items.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/read-soup-page.ts
      symbol: readSoupPage
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/graphql-operation-registry.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/recently-viewed.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/grouped-local-projection.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/graphql-optimistic.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/reconciliation.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/normalized-cache/types.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/property-queries.ts
      symbol: refreshPropertyQueries
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/optimistic-deletions.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/grouped-projection.ts
      symbol: createGraphqlGroupedSoupProjection
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/agent-session-search.ts
      symbol: mapAgentSessionSearchResult
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/excludes-done.ts
      symbol: soupQueryExcludesDone
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/grouped/create-grouped-soup-queries.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/crm-association.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/done-session.ts
  technology: SolidJS
description: Cache writes keep this list current. Grouped lists leave it out.
---

Cache writes keep this list current. Grouped lists leave it out.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/soup/graphql/active-queries.ts](../../../../../../apps/web/src/lib/queries/soup/graphql/active-queries.ts) | [apps/web/src/features/crm/queries/email-privacy.ts](../../../../../../apps/web/src/features/crm/queries/email-privacy.ts) | Invokes supplied callback: where | typescript |
| [apps/web/src/lib/queries/soup/graphql/active-queries.ts](../../../../../../apps/web/src/lib/queries/soup/graphql/active-queries.ts) | [apps/web/src/features/crm/queries/list-refresh.ts](../../../../../../apps/web/src/features/crm/queries/list-refresh.ts) | Invokes supplied callback: where | typescript |
| [apps/web/src/lib/queries/soup/grouped/create-grouped-soup-queries.ts](../../../../../../apps/web/src/lib/queries/soup/grouped/create-grouped-soup-queries.ts) | [apps/web/src/features/next-soup/soup-view/soup-view-context.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/soup-view-context.tsx) | Invokes supplied callbacks: queryOptions, transport | typescript |
| [apps/web/src/lib/queries/soup/grouped/create-grouped-soup-queries.ts](../../../../../../apps/web/src/lib/queries/soup/grouped/create-grouped-soup-queries.ts) | [apps/web/src/features/tasks-view/queries/use-tasks-query.ts](../../../../../../apps/web/src/features/tasks-view/queries/use-tasks-query.ts) | Invokes supplied callbacks: groupByField, queryOptions, soupBody, soupParams, transport | typescript |
