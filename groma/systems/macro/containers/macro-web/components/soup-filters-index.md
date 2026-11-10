---
type: C4 Component
title: Soup
status: stable
groma:
  id: soup-filters-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/soup/filters/index.ts
    - scanner: typescript
      file: apps/web/src/features/soup/createSoupEntityActions.ts
    - scanner: typescript
      file: apps/web/src/features/soup/search/index.ts
    - scanner: typescript
      file: apps/web/src/features/soup/collection/row-store.ts
      symbol: createSoupRowStore
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/tag-facet.ts
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/compile.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityMenuPickers.tsx
    - scanner: typescript
      file: apps/web/src/features/soup/collection/list-navigation-source.ts
    - scanner: typescript
      file: apps/web/src/features/soup/assignee-picker.tsx
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/constants.ts
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/evaluate.ts
      symbol: testFacets
    - scanner: typescript
      file: apps/web/src/features/soup/collection/rows.ts
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/index.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityActionDrawerContext.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityActionsDropdown.tsx
      symbol: SoupEntityActionsDropdown
    - scanner: typescript
      file: apps/web/src/features/soup/search/context.tsx
    - scanner: typescript
      file: apps/web/src/features/soup/collection/date-buckets.ts
    - scanner: typescript
      file: apps/web/src/features/soup/collection/index.ts
    - scanner: typescript
      file: apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityActionDrawer.tsx
    - scanner: typescript
      file: apps/web/src/features/soup/search/utils.ts
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/types.ts
    - scanner: typescript
      file: apps/web/src/features/soup/entity-notifications.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityContextMenu.tsx
      symbol: SoupEntityContextMenu
    - scanner: typescript
      file: apps/web/src/features/soup/index.ts
    - scanner: typescript
      file: apps/web/src/features/soup/collection/types.ts
    - scanner: typescript
      file: apps/web/src/features/soup/search/create-search-state.ts
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/clause.ts
    - scanner: typescript
      file: apps/web/src/features/soup/collection/transforms.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityActionsMenu.tsx
      symbol: SoupEntityActionsMenu
    - scanner: typescript
      file: apps/web/src/features/soup/filters/facets/selection.ts
    - scanner: typescript
      file: apps/web/src/features/soup/SoupEntityActionDrawerManager.tsx
      symbol: MaybeSoupEntityActionDrawerManager
  technology: SolidJS
description: Soup list actions, filters, and context menus.
---

The index is a barrel. `createSoupEntityActions.ts` builds action items from `next-soup/actions` and CRM action items. `drive-view` and `channels-view` import soup navigation or action drawers (seen in their import blocks). This is the older soup feature beside `next-soup`.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | [apps/web/src/features/next-soup/actions/index.ts](../../../../../../apps/web/src/features/next-soup/actions/index.ts) | builds list row actions | function import |
| [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | [apps/web/src/features/crm/crm-action-items.ts](../../../../../../apps/web/src/features/crm/crm-action-items.ts) | adds CRM row actions | function import |

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/soup/collection/transforms.ts](../../../../../../apps/web/src/features/soup/collection/transforms.ts) | [apps/web/src/features/email-view/queries/email-results.ts](../../../../../../apps/web/src/features/email-view/queries/email-results.ts) | Invokes supplied callbacks: getGroupId, getGroupLabel | typescript |
| [apps/web/src/features/soup/collection/transforms.ts](../../../../../../apps/web/src/features/soup/collection/transforms.ts) | [apps/web/src/features/home/queries/home-results.ts](../../../../../../apps/web/src/features/home/queries/home-results.ts) | Invokes supplied callbacks: compareGroups, getGroupId, getGroupLabel, getKey, resolveConflict | typescript |
| [apps/web/src/features/soup/collection/transforms.ts](../../../../../../apps/web/src/features/soup/collection/transforms.ts) | [apps/web/src/features/projects/primitives/project-collection.ts](../../../../../../apps/web/src/features/projects/primitives/project-collection.ts) | Invokes supplied callbacks: getGroupId, getGroupLabel, getKey, resolveConflict | typescript |
| [apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts](../../../../../../apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts) | [apps/web/src/features/channel/Calls/ChannelCallsTab.tsx](../../../../../../apps/web/src/features/channel/Calls/ChannelCallsTab.tsx) | Invokes supplied callback: openEntityInSplit | typescript |
| [apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts](../../../../../../apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts) | [apps/web/src/features/drive-view/drive-view.tsx](../../../../../../apps/web/src/features/drive-view/drive-view.tsx) | Invokes supplied callback: openEntityInSplit | typescript |
| [apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts](../../../../../../apps/web/src/features/soup/collection/useSoupListNavigationHotkeys.ts) | [apps/web/src/features/home/components/HomeList.tsx](../../../../../../apps/web/src/features/home/components/HomeList.tsx) | Invokes supplied callback: openEntityInSplit | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/channel/Calls/ChannelCallsTab.tsx](../../../../../../apps/web/src/features/channel/Calls/ChannelCallsTab.tsx) | Invokes supplied callback: text | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/channel/Calls/use-channel-calls-source.ts](../../../../../../apps/web/src/features/channel/Calls/use-channel-calls-source.ts) | Invokes supplied callbacks: buildRequest, disableLocalSearch | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/channels-view/queries/channel-search-source.ts](../../../../../../apps/web/src/features/channels-view/queries/channel-search-source.ts) | Invokes supplied callbacks: buildRequest, localPool | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/command/queries/mobile-full-text-search.ts](../../../../../../apps/web/src/features/command/queries/mobile-full-text-search.ts) | Invokes supplied callbacks: buildRequest, disableLocalSearch, enabled | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/drive-view/queries/drive-data-source.ts](../../../../../../apps/web/src/features/drive-view/queries/drive-data-source.ts) | Invokes supplied callbacks: buildRequest, enabled, text | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/email-view/queries/use-email-query.ts](../../../../../../apps/web/src/features/email-view/queries/use-email-query.ts) | Invokes supplied callbacks: buildRequest, disableLocalSearch, enabled, text | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/home/queries/use-home-query.ts](../../../../../../apps/web/src/features/home/queries/use-home-query.ts) | Invokes supplied callbacks: buildRequest, text | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/next-soup/embedded-search.tsx](../../../../../../apps/web/src/features/next-soup/embedded-search.tsx) | Invokes supplied callback: text | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/next-soup/queries/embedded-search.ts](../../../../../../apps/web/src/features/next-soup/queries/embedded-search.ts) | Invokes supplied callbacks: buildRequest, disableLocalSearch, localPool | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/next-soup/soup-view/create-search-state.ts](../../../../../../apps/web/src/features/next-soup/soup-view/create-search-state.ts) | Invokes supplied callback: buildRequest | typescript |
| [apps/web/src/features/soup/search/create-search-state.ts](../../../../../../apps/web/src/features/soup/search/create-search-state.ts) | [apps/web/src/features/tasks-view/queries/use-tasks-query.ts](../../../../../../apps/web/src/features/tasks-view/queries/use-tasks-query.ts) | Invokes supplied callbacks: buildRequest, enabled, text | typescript |
