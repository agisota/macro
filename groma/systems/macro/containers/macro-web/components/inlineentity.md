---
type: C4 Component
title: Composed InlineEntity
status: stable
groma:
  id: inlineentity
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/entity/composed/InlineEntity.tsx
      symbol: InlineEntity
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/components/EntityActionSelection.tsx
      symbol: EntityActionSelection
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/search-timestamp.tsx
      symbol: SearchTimestamp
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/moved-to-folder-toast.ts
      symbol: toastMovedToFolder
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/compacting-pills.tsx
      symbol: CompactingPills
    - scanner: typescript
      file: apps/web/src/features/entity/components/PulsingStar.tsx
      symbol: PulsingStar
    - scanner: typescript
      file: apps/web/src/features/entity/extractors/entity-email-participants.tsx
      symbol: EntityEmailParticipants
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/narrow-single-line-layout.tsx
      symbol: NarrowSingleLineLayout
    - scanner: typescript
      file: apps/web/src/features/entity/utils/buildEntityData.ts
    - scanner: typescript
      file: apps/web/src/features/entity/debug/DebugEntityView.tsx
      symbol: DebugEntityView
    - scanner: typescript
      file: apps/web/src/features/entity/owner/owner-display.tsx
      symbol: OwnerLabel
    - scanner: typescript
      file: apps/web/src/features/entity/EntitySelectionToolbarModal.tsx
      symbol: EntitySelectionToolbarModal
    - scanner: typescript
      file: apps/web/src/features/entity/components/Badges.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/channel.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/utils/task-properties.ts
    - scanner: typescript
      file: apps/web/src/features/entity/queries/email.ts
      symbol: createEmailsInfiniteQuery
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-sender.tsx
      symbol: NotificationSender
    - scanner: typescript
      file: apps/web/src/features/entity/utils/channel-thread-name.ts
      symbol: getChannelThreadName
    - scanner: typescript
      file: apps/web/src/features/entity/index.ts
    - scanner: typescript
      file: apps/web/src/features/entity/components/UnreadIndicator.tsx
      symbol: UnreadIndicator
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-stacks.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/BulkRenameEntitiesView.tsx
      symbol: BulkRenameEntitiesView
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/routine.tsx
      symbol: RoutineWideContent
    - scanner: typescript
      file: apps/web/src/features/entity/entity.ts
      symbol: Entity
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/HitSnippet.tsx
      symbol: HitSnippet
    - scanner: typescript
      file: apps/web/src/features/entity/components/MultiSelectCheckbox.tsx
      symbol: MultiSelectCheckbox
    - scanner: typescript
      file: apps/web/src/features/entity/core/Root.tsx
      symbol: Root
    - scanner: typescript
      file: apps/web/src/features/entity/extractors/entity-icon.tsx
      symbol: EntityIcon
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-property/task-property-control.tsx
      symbol: TaskPropertyControl
    - scanner: typescript
      file: apps/web/src/features/entity/extractors/entity-timestamp.tsx
      symbol: EntityTimestamp
    - scanner: typescript
      file: apps/web/src/features/entity/queries/dss.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-icon.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-count.tsx
      symbol: NotificationCount
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/search-sender.tsx
      symbol: SearchSender
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/content-hits.tsx
      symbol: ContentHits
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/narrow-layout.tsx
      symbol: NarrowLayout
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/foreign.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/index.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-content.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/list-entity-metadata-provider.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-row.tsx
      symbol: NotificationRow
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/row-geometry.ts
    - scanner: typescript
      file: apps/web/src/features/entity/components/DisplayName.tsx
      symbol: DisplayName
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/email-row-layout.ts
      symbol: usesCompactEmailRow
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/search-location.tsx
      symbol: SearchLocation
    - scanner: typescript
      file: apps/web/src/features/entity/utils/path.ts
      symbol: truncatedPath
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/narrow-email-layout.tsx
      symbol: NarrowEmailLayout
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/task.tsx
      symbol: TaskNarrowBody
    - scanner: typescript
      file: apps/web/src/features/entity/components/ChatProviderIcon.tsx
      symbol: ChatProviderIcon
    - scanner: typescript
      file: apps/web/src/features/entity/queries/rename.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-property/index.ts
    - scanner: typescript
      file: apps/web/src/features/entity/types/notification.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-sender-icon.tsx
      symbol: NotificationSenderIcon
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/BulkEditEntityModal.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-description-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/entity/components/PrAgentSessionsChip.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/wide-layout.tsx
      symbol: WideLayout
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/search-content-hit-row.tsx
      symbol: SearchContentHitRow
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/calendar.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/Provider.tsx
      symbol: EntityProvider
    - scanner: typescript
      file: apps/web/src/features/entity/types/search.ts
    - scanner: typescript
      file: apps/web/src/features/entity/mocks/mockEntityData.ts
    - scanner: typescript
      file: apps/web/src/features/entity/queries/file-type.ts
      symbol: createUpdateFileTypeMutation
    - scanner: typescript
      file: apps/web/src/features/entity/components/row-pill.ts
    - scanner: typescript
      file: apps/web/src/features/entity/queries/auth.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-actions.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/utils/timestamp.ts
    - scanner: typescript
      file: apps/web/src/features/entity/types/entity.ts
    - scanner: typescript
      file: apps/web/src/features/entity/core/Slot.tsx
      symbol: Slot
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/pill-compaction.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/search-content.tsx
      symbol: SearchContent
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-property/entity-reference-properties.tsx
      symbol: EntityReferenceProperties
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/BulkMoveToProjectView.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/utils/notification.ts
    - scanner: typescript
      file: apps/web/src/features/entity/components/CallRecordName.tsx
      symbol: CallRecordName
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-timestamp.tsx
      symbol: NotificationTimestamp
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-copy-link.ts
      symbol: copyNotificationLink
    - scanner: typescript
      file: apps/web/src/features/entity/composed/ListEntity.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/call.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/snippet-entity.ts
    - scanner: typescript
      file: apps/web/src/features/entity/components/EntitySelectionBadge.tsx
      symbol: EntitySelectionBadge
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/notification-description.tsx
      symbol: NotificationDescription
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/narrow-condensed-layout.tsx
      symbol: NarrowCondensedLayout
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-property/property-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/entity/core/Layout.tsx
      symbol: Layout
    - scanner: typescript
      file: apps/web/src/features/entity/components/CollapsibleList.tsx
      symbol: CollapsibleList
    - scanner: typescript
      file: apps/web/src/features/entity/queries/bulk-delete-result.ts
      symbol: BulkDeleteFailure
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/shared.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/utils/filter.ts
      symbol: unreadFilterFn
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/index.ts
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/folder-destinations.ts
    - scanner: typescript
      file: apps/web/src/features/entity/components/GithubLabelPill.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/components/ProjectBreadCrumb.tsx
      symbol: ProjectBreadCrumb
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-notification/mobile-notification-stacks.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/email.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/core/rename.ts
    - scanner: typescript
      file: apps/web/src/features/entity/owner/owner.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-property/entity-key-properties.tsx
      symbol: EntityKeyProperties
    - scanner: typescript
      file: apps/web/src/features/entity/types/drag.ts
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/BulkDeleteView.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/queries/key.ts
    - scanner: typescript
      file: apps/web/src/features/entity/bulk-edit/move-entities-to-folder.ts
      symbol: createMoveEntitiesToFolder
    - scanner: typescript
      file: apps/web/src/features/entity/utils/draggable.ts
    - scanner: typescript
      file: apps/web/src/features/entity/utils/company-properties.ts
    - scanner: typescript
      file: apps/web/src/features/entity/extractors/entity-title.tsx
      symbol: EntityTitle
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/row-end.tsx
      symbol: RowEnd
    - scanner: typescript
      file: apps/web/src/features/entity/extractors-search/search-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/entity/EntitySelectionToolbar.tsx
    - scanner: typescript
      file: apps/web/src/features/entity/utils/shared.ts
    - scanner: typescript
      file: apps/web/src/features/entity/composed/list-entity/narrow-inbox-layout.tsx
      symbol: NarrowInboxLayout
    - scanner: typescript
      file: apps/web/src/features/entity/views/PrAgentSessionsChip.tsx
      symbol: PrAgentSessionsChip
  technology: SolidJS
  group: Shell
description: Workspace UI for entity
---

Goes through the `Entity` namespace like every other composed row rather than reaching into the extractors directly. Beyond matching them: the barrel exports this module before `./entity`, so importing an extractor here would start one mid-cycle and leave `entity.ts` reading a me

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/entity/queries/email.ts](../../../../../../apps/web/src/features/entity/queries/email.ts) | [apps/web/src/features/property/editor/hooks/useEntitiesForProperty.ts](../../../../../../apps/web/src/features/property/editor/hooks/useEntitiesForProperty.ts) | Invokes supplied callback: disabled | typescript |
| [apps/web/src/features/entity/queries/email.ts](../../../../../../apps/web/src/features/entity/queries/email.ts) | [apps/web/src/features/property/editors/selectors/PropertyEntitySelector.tsx](../../../../../../apps/web/src/features/property/editors/selectors/PropertyEntitySelector.tsx) | Invokes supplied callback: disabled | typescript |
| [apps/web/src/features/entity/utils/draggable.ts](../../../../../../apps/web/src/features/entity/utils/draggable.ts) | [apps/web/src/features/crm/views/record-row.tsx](../../../../../../apps/web/src/features/crm/views/record-row.tsx) | Invokes supplied callback: deferUntilInteraction | typescript |
| [apps/web/src/features/entity/utils/draggable.ts](../../../../../../apps/web/src/features/entity/utils/draggable.ts) | [apps/web/src/features/next-soup/soup-view/views/tasks/TaskListEntity.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/views/tasks/TaskListEntity.tsx) | Invokes supplied callback: deferUntilInteraction | typescript |
