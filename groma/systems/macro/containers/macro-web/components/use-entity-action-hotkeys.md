---
type: C4 Component
title: Next soup
status: stable
groma:
  id: use-entity-action-hotkeys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts
      symbol: useEntityActionHotkeys
    - scanner: typescript
      file: apps/web/src/features/next-soup/create-sort-state.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/mark-done-delegate.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/document-type-query.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/soup-view-search-bar.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/search-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/index.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/my-tasks.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/inbox/InboxCard.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view-context.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/document.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-move-to-project-action.ts
      symbol: makeMoveToProjectAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-copy-branch-name-action.ts
      symbol: makeCopyBranchNameAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/search/search-facet-chip.tsx
      symbol: SearchFacetChip
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/tab-lists.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-group-continuation.tsx
      symbol: SoupGroupContinuation
    - scanner: typescript
      file: apps/web/src/features/next-soup/route-views.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/graphql-done-optimism.ts
      symbol: applyGraphqlDoneOptimistic
    - scanner: typescript
      file: apps/web/src/features/next-soup/sidebar/soup-filter-presets.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-hide-company-action.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/consolidated-filter-chip.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/document-tab-scope.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/use-block-entity-commands.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/option-source.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/filter-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/use-filter-refinements.tsx
      symbol: useFilterRefinements
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/search-results.ts
      symbol: createSearchResultFilter
    - scanner: typescript
      file: apps/web/src/features/next-soup/debug/DocumentWherePlayground.tsx
      symbol: DocumentWherePlayground
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/inbox/InboxListEntity.tsx
      symbol: InboxListEntity
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/tasks/task-group-header.tsx
      symbol: TaskGroupHeader
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mark-not-done-action.ts
      symbol: makeMarkNotDoneAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mute-action.ts
      symbol: makeMuteAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-navigation-touch-highlight.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/use-recent-view-flag.ts
      symbol: useRecentViewFlag
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/filter-store/types.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/date-group-header.tsx
      symbol: DateGroupHeader
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/company.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/filter-store/query-store.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/entity-action-context.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/filter-store/predicates-store.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/collection-select-filter.ts
      symbol: CollectionSelectFilter
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/entity-type.ts
      symbol: ENTITY_TYPE_FILTERS
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/inbox-filters.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/selection-state.ts
      symbol: createSelectionState
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/tag-filter.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-download-action.ts
      symbol: makeDownloadAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-share-action.ts
      symbol: makeShareAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-delete-action.ts
      symbol: makeDeleteAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/task.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/use-soup-navigation-hotkeys.ts
      symbol: useSoupNavigationHotkeys
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-copy-link-action.ts
      symbol: makeCopyLinkAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/queries/embedded-search.ts
      symbol: createEmbeddedSearchSource
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/soup-view-context-group.tsx
      symbol: SoupViewContextGroup
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/general.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-entity-selection-toolbar.tsx
      symbol: SoupEntitySelectionToolbar
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/inbox-selector.tsx
      symbol: InboxSelector
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/inbox-query-filters.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/queries/search-request.ts
      symbol: buildSoupSearchRequest
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/index.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-sender-filter-action.ts
      symbol: makeSenderFilterAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/mobile-filter-drawer.tsx
      symbol: MobileFilterDrawer
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/can-mark-not-done.ts
      symbol: canMarkNotDone
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/tasks/TaskListEntity.tsx
      symbol: TaskListEntity
    - scanner: typescript
      file: apps/web/src/features/next-soup/tour.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/sort-options.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/search-controllers.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/email-signal.ts
      symbol: emailItemMatchesImportance
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/group-dropdown.tsx
      symbol: GroupDropdown
    - scanner: typescript
      file: apps/web/src/features/next-soup/core/search-query.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/search/search-filters-state.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/email.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/FolderDropZone.tsx
      symbol: FolderDropZone
    - scanner: typescript
      file: apps/web/src/features/next-soup/queries/agent-session-search-filters.ts
      symbol: agentSessionSearchFilters
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/filter-store/index.ts
      symbol: NIL_UUID
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-context.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/tasks/task-grid-layout.tsx
      symbol: TaskGridLayout
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/filter-store/compile.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mark-done-action.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-add-tag-action.ts
      symbol: makeAddTagAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/entity.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/empty-states.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/utils.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/folder-drop-zone.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/search/search-filters-row.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/NewCallButton.tsx
      symbol: NewCallButton
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/soup-view-context-sort.tsx
      symbol: SoupViewContextSort
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-channel-picture-action.ts
      symbol: makeChannelPictureAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-favorite-action.ts
      symbol: makeFavoriteAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/sort-dropdown.tsx
      symbol: SortDropdown
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/section-header.tsx
      symbol: SoupSectionHeader
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/initial-view-filters.ts
      symbol: resolveInitialViewFilters
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/graphql-done-operation.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/use-soup-filter-persistence.ts
      symbol: useSoupFilterPersistence
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-copy-action.ts
      symbol: makeCopyAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mark-sender-noise-action.ts
      symbol: makeMarkSenderNoiseAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/search-ask-ai-button.tsx
      symbol: SearchAskAiButton
    - scanner: typescript
      file: apps/web/src/features/next-soup/position-holds.ts
      symbol: createPositionHolds
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/soup-filters-bar.tsx
      symbol: SoupFiltersBar
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/base.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view-item-filter.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view-file-dropzone.tsx
      symbol: SoupViewFileDropzone
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/predicates.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/open-search.ts
      symbol: createGlobalSearchOpener
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/group-options.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/unified-filter-dropdown.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/assignee-filter-source.tsx
      symbol: unassignedFilterOption
    - scanner: typescript
      file: apps/web/src/features/next-soup/create-soup-state.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/use-is-home-view.ts
      symbol: useIsHomeView
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/tasks/task-grid-template.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/search/search-facets.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-github-link-action.ts
      symbol: makeGithubLinkAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/inbox/inbox-card-layouts.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-block-sender-action.ts
      symbol: makeBlockSenderAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/date-group-heading.tsx
      symbol: DateGroupHeading
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/tasks/list-property-value.tsx
      symbol: ListPropertyValue
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/filter-store/field-values.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/inbox/utils.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-discard-draft-action.ts
      symbol: makeDiscardDraftAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-rename-action.ts
      symbol: makeRenameAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/search-utils.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/inbox-picker.tsx
      symbol: useInboxPicker
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-archive-session-action.ts
      symbol: makeArchiveSessionAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/search/mobile-search-filter-drawer.tsx
      symbol: MobileSearchFilterDrawer
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/create-search-state.ts
      symbol: createSearchState
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/group-by-date.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view-create-button.tsx
      symbol: SoupViewCreateButton
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mark-notifications-read-action.ts
      symbol: makeMarkNotificationsReadAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/core/search-options.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-copy-entity-id-action.ts
      symbol: makeCopyEntityIdAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-remove-from-project-action.ts
      symbol: makeRemoveFromProjectAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/embedded-search.tsx
      symbol: EmbeddedSearch
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/call-audience.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/tag-filter-state.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mark-unread-action.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/use-soup-view-hotkeys.ts
      symbol: useSoupViewHotkeys
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-create-reminder-action.ts
      symbol: makeCreateReminderAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/embedded-search-results.tsx
      symbol: EmbeddedSearchResults
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/configs/index.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/views/tasks/TaskListHeader.tsx
      symbol: ResponsiveTaskListHeader
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-row-metadata-provider.tsx
      symbol: SoupRowMetadataProvider
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/inbox-filter-controllers.ts
      symbol: INBOX_FILTER_ENTRY_KEY
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-set-company-property-action.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/searchable-multi-select.tsx
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/filter-categories.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/core/search-filters.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/filters-bar/soup-active-filters-bar.tsx
      symbol: SoupActiveFiltersBar
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/make-mark-sender-important-action.ts
      symbol: makeMarkSenderSignalAction
    - scanner: typescript
      file: apps/web/src/features/next-soup/filters/query-filters.ts
  technology: SolidJS
description: Shared list navigation and several pane routes.
---

`utils.ts` is the open-from-list helper used by Drive (`drive-view/drive-view.tsx:3`). Calls, folders, recent, and search route views all lazy-load from `next-soup/route-views` (`lazy-route-views.ts:86-100`). `agents-view` lazy-loads `SoupView` from `next-soup/soup-view/soup-view` for the legacy agents list (`agents-view/route-views.tsx:20-22`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/next-soup/utils.ts](../../../../../../apps/web/src/features/next-soup/utils.ts) | [apps/web/src/features/calls-view/calls-hosted-content.ts](../../../../../../apps/web/src/features/calls-view/calls-hosted-content.ts) | maps a call into the Calls pane | function import |

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/agents-view/components/AgentsSidebar.tsx](../../../../../../apps/web/src/features/agents-view/components/AgentsSidebar.tsx) | Invokes supplied callback: getEntity | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/channel/Calls/ChannelCallsTab.tsx](../../../../../../apps/web/src/features/channel/Calls/ChannelCallsTab.tsx) | Invokes supplied callbacks: getEntity, onFocus | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/channels-view/components/ChannelsMobileView.tsx](../../../../../../apps/web/src/features/channels-view/components/ChannelsMobileView.tsx) | Invokes supplied callback: getEntity | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/channels-view/components/rail/ChannelRailItems.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/ChannelRailItems.tsx) | Invokes supplied callback: getEntity | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/drive-view/views/drive-list.tsx](../../../../../../apps/web/src/features/drive-view/views/drive-list.tsx) | Invokes supplied callbacks: getEntity, onFocus | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/email-view/components/EmailList.tsx](../../../../../../apps/web/src/features/email-view/components/EmailList.tsx) | Invokes supplied callbacks: enabled, getEntity, onFocus, run | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/home/components/HomeList.tsx](../../../../../../apps/web/src/features/home/components/HomeList.tsx) | Invokes supplied callbacks: getEntity, onFocus, run | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/reviews-view/components/ReviewsList.tsx](../../../../../../apps/web/src/features/reviews-view/components/ReviewsList.tsx) | Invokes supplied callbacks: getEntity, onFocus | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/features/tasks-view/components/task-list/TaskList.tsx](../../../../../../apps/web/src/features/tasks-view/components/task-list/TaskList.tsx) | Invokes supplied callbacks: getEntity, onFocus | typescript |
| [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | [apps/web/src/lib/core/mobile/isTouchDevice.ts](../../../../../../apps/web/src/lib/core/mobile/isTouchDevice.ts) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/features/next-soup/actions/make-archive-session-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-archive-session-action.ts) | [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | Invokes supplied callback: userId | typescript |
| [apps/web/src/features/next-soup/actions/make-delete-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-delete-action.ts) | [apps/web/src/features/drive-view/drive-folder-actions.tsx](../../../../../../apps/web/src/features/drive-view/drive-folder-actions.tsx) | Invokes supplied callback: onDeleted | typescript |
| [apps/web/src/features/next-soup/actions/make-mark-not-done-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-mark-not-done-action.ts) | [apps/web/src/features/email-thread/thread-completion-adapter.tsx](../../../../../../apps/web/src/features/email-thread/thread-completion-adapter.tsx) | Invokes supplied callback: notificationSource | typescript |
| [apps/web/src/features/next-soup/actions/make-mark-not-done-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-mark-not-done-action.ts) | [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | Invokes supplied callback: notificationSource | typescript |
| [apps/web/src/features/next-soup/actions/make-mark-notifications-read-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-mark-notifications-read-action.ts) | [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | Invokes supplied callback: notificationSource | typescript |
| [apps/web/src/features/next-soup/actions/make-move-to-project-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-move-to-project-action.ts) | [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | Invokes supplied callback: userId | typescript |
| [apps/web/src/features/next-soup/actions/make-mute-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-mute-action.ts) | [apps/web/src/components/app/split-layout/components/SplitFileMenu.tsx](../../../../../../apps/web/src/components/app/split-layout/components/SplitFileMenu.tsx) | Invokes supplied callback: notificationSource | typescript |
| [apps/web/src/features/next-soup/actions/make-mute-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-mute-action.ts) | [apps/web/src/features/drive-view/drive-folder-actions.tsx](../../../../../../apps/web/src/features/drive-view/drive-folder-actions.tsx) | Invokes supplied callback: notificationSource | typescript |
| [apps/web/src/features/next-soup/actions/make-mute-action.ts](../../../../../../apps/web/src/features/next-soup/actions/make-mute-action.ts) | [apps/web/src/features/soup/createSoupEntityActions.ts](../../../../../../apps/web/src/features/soup/createSoupEntityActions.ts) | Invokes supplied callback: notificationSource | typescript |
| [apps/web/src/features/next-soup/actions/use-block-entity-commands.ts](../../../../../../apps/web/src/features/next-soup/actions/use-block-entity-commands.ts) | [apps/web/src/features/agents-view/components/AgentSessionPane.tsx](../../../../../../apps/web/src/features/agents-view/components/AgentSessionPane.tsx) | Invokes supplied callback: resolveEntity | typescript |
| [apps/web/src/features/next-soup/actions/use-block-entity-commands.ts](../../../../../../apps/web/src/features/next-soup/actions/use-block-entity-commands.ts) | [apps/web/src/features/block-agent/component/AgentSplitHeader.tsx](../../../../../../apps/web/src/features/block-agent/component/AgentSplitHeader.tsx) | Invokes supplied callback: resolveEntity | typescript |
| [apps/web/src/features/next-soup/actions/use-block-entity-commands.ts](../../../../../../apps/web/src/features/next-soup/actions/use-block-entity-commands.ts) | [apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx](../../../../../../apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx) | Invokes supplied callback: resolveEntity | typescript |
| [apps/web/src/features/next-soup/actions/use-block-entity-commands.ts](../../../../../../apps/web/src/features/next-soup/actions/use-block-entity-commands.ts) | [apps/web/src/features/block-md/component/MarkdownDetailBreadcrumbItem.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownDetailBreadcrumbItem.tsx) | Invokes supplied callback: resolveEntity | typescript |
| [apps/web/src/features/next-soup/actions/use-block-entity-commands.ts](../../../../../../apps/web/src/features/next-soup/actions/use-block-entity-commands.ts) | [apps/web/src/features/channels-view/components/ChannelDetailView.tsx](../../../../../../apps/web/src/features/channels-view/components/ChannelDetailView.tsx) | Invokes supplied callback: resolveEntity | typescript |
| [apps/web/src/features/next-soup/actions/use-block-entity-commands.ts](../../../../../../apps/web/src/features/next-soup/actions/use-block-entity-commands.ts) | [apps/web/src/features/drive-view/views/FileDetailBreadcrumbItem.tsx](../../../../../../apps/web/src/features/drive-view/views/FileDetailBreadcrumbItem.tsx) | Invokes supplied callback: resolveEntity | typescript |
| [apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts](../../../../../../apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts) | [apps/web/src/features/channel/Calls/ChannelCallsTab.tsx](../../../../../../apps/web/src/features/channel/Calls/ChannelCallsTab.tsx) | Invokes supplied callback: viewContext | typescript |
| [apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts](../../../../../../apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts) | [apps/web/src/features/drive-view/views/drive-list.tsx](../../../../../../apps/web/src/features/drive-view/views/drive-list.tsx) | Invokes supplied callback: viewContext | typescript |
| [apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts](../../../../../../apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts) | [apps/web/src/features/email-view/components/EmailList.tsx](../../../../../../apps/web/src/features/email-view/components/EmailList.tsx) | Invokes supplied callback: viewContext | typescript |
| [apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts](../../../../../../apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts) | [apps/web/src/features/home/components/HomeList.tsx](../../../../../../apps/web/src/features/home/components/HomeList.tsx) | Invokes supplied callback: viewContext | typescript |
| [apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts](../../../../../../apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts) | [apps/web/src/features/reviews-view/components/ReviewsList.tsx](../../../../../../apps/web/src/features/reviews-view/components/ReviewsList.tsx) | Invokes supplied callback: viewContext | typescript |
| [apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts](../../../../../../apps/web/src/features/next-soup/actions/use-entity-action-hotkeys.ts) | [apps/web/src/features/tasks-view/components/task-list/TaskList.tsx](../../../../../../apps/web/src/features/tasks-view/components/task-list/TaskList.tsx) | Invokes supplied callback: viewContext | typescript |
| [apps/web/src/features/next-soup/soup-view/soup-view-context.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/soup-view-context.tsx) | [apps/web/src/features/crm/workspace-adapter.tsx](../../../../../../apps/web/src/features/crm/workspace-adapter.tsx) | Invokes supplied callbacks: filterContext, label, order, value | typescript |
