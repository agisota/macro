---
type: C4 Component
title: Property
status: stable
groma:
  id: entitycollectionproperty
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/property/side-panel/properties/EntityCollectionProperty.tsx
    - scanner: typescript
      file: apps/web/src/features/property/editors/popover/PopoverEditor.tsx
    - scanner: typescript
      file: apps/web/src/features/property/component/modal/Modals.tsx
      symbol: Modals
    - scanner: typescript
      file: apps/web/src/features/property/tags/TagPicker.tsx
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyLabel.tsx
      symbol: PropertyLabel
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/PropertyEntitySelector.tsx
      symbol: PropertyEntitySelector
    - scanner: typescript
      file: apps/web/src/features/property/hooks/useEntityProperties.ts
      symbol: useEntityProperties
    - scanner: typescript
      file: apps/web/src/features/property/side-panel/properties/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/component/CollectionEmptyState.tsx
    - scanner: typescript
      file: apps/web/src/features/property/component/propertyValue/PropertyTooltip.tsx
      symbol: PropertyTooltip
    - scanner: typescript
      file: apps/web/src/features/property/utils/position.ts
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyCaret.tsx
      symbol: PropertyCaret
    - scanner: typescript
      file: apps/web/src/features/property/tags/EntityRowTags.tsx
    - scanner: typescript
      file: apps/web/src/features/property/debug/PropertyDebug.tsx
      symbol: PropertyDebug
    - scanner: typescript
      file: apps/web/src/features/property/utils/typeGuards.ts
    - scanner: typescript
      file: apps/web/src/features/property/core/Slot.tsx
      symbol: Slot
    - scanner: typescript
      file: apps/web/src/features/property/component/propertyValue/UserGroup.tsx
      symbol: UserGroup
    - scanner: typescript
      file: apps/web/src/features/property/editors/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/utils/transforms.ts
    - scanner: typescript
      file: apps/web/src/features/property/component/ProjectLinkPill.tsx
      symbol: ProjectLinkPill
    - scanner: typescript
      file: apps/web/src/features/property/tags/use-tag-filter-group.tsx
    - scanner: typescript
      file: apps/web/src/features/property/component/SourceLinkPill.tsx
      symbol: SourceLinkPill
    - scanner: typescript
      file: apps/web/src/features/property/side-panel/properties/PropertyRowActions.tsx
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/InlineNumberEditor.tsx
      symbol: InlineNumberEditor
    - scanner: typescript
      file: apps/web/src/features/property/editors/popover/EntityEditor.tsx
    - scanner: typescript
      file: apps/web/src/features/property/tags/tag-drag-and-drop.tsx
    - scanner: typescript
      file: apps/web/src/features/property/queries/agent-assignees.ts
      symbol: useAgentAssignees
    - scanner: typescript
      file: apps/web/src/features/property/component/ListPropertyValue.tsx
      symbol: ListPropertyValue
    - scanner: typescript
      file: apps/web/src/features/property/editors/popover/DateRangeEditor.tsx
      symbol: DateRangeEditor
    - scanner: typescript
      file: apps/web/src/features/property/component/modal/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/tag-sets-context.tsx
    - scanner: typescript
      file: apps/web/src/features/property/editor/hooks/useEntitiesForProperty.ts
      symbol: useEntitiesForProperty
    - scanner: typescript
      file: apps/web/src/features/property/tags/components/branch-tag-icon.tsx
      symbol: BranchTagIcon
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyEditTrigger.tsx
    - scanner: typescript
      file: apps/web/src/features/property/component/modal/CreatePropertyModal.tsx
      symbol: CreatePropertyModal
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyIcon.tsx
      symbol: PropertyIcon
    - scanner: typescript
      file: apps/web/src/features/property/extractors/property-pill-classes.ts
      symbol: propertyPillClasses
    - scanner: typescript
      file: apps/web/src/features/property/tags/tag-picker-session.ts
    - scanner: typescript
      file: apps/web/src/features/property/hooks/usePropertyUserDisplay.ts
      symbol: usePropertyUserDisplay
    - scanner: typescript
      file: apps/web/src/features/property/side-panel/properties/entity-collection-drop.ts
    - scanner: typescript
      file: apps/web/src/features/property/constants.ts
    - scanner: typescript
      file: apps/web/src/features/property/utils/validation.ts
    - scanner: typescript
      file: apps/web/src/features/property/utils/focus.ts
    - scanner: typescript
      file: apps/web/src/features/property/utils/entityConversion.ts
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyUserStack.tsx
      symbol: PropertyUserStack
    - scanner: typescript
      file: apps/web/src/features/property/utils/suggestedProperties.ts
    - scanner: typescript
      file: apps/web/src/features/property/component/propertyValue/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/utils/parse-property-draft.ts
      symbol: parsePropertyDraft
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/OptionCheckBox.tsx
      symbol: OptionCheckBox
    - scanner: typescript
      file: apps/web/src/features/property/hooks/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/PropertyEditor.tsx
      symbol: PropertyEditor
    - scanner: typescript
      file: apps/web/src/features/property/mocks/mockProperties.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/types.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/hooks/useBooleanEditor.ts
      symbol: useBooleanEditor
    - scanner: typescript
      file: apps/web/src/features/property/hooks/usePropertyEditor.ts
      symbol: usePropertyEditor
    - scanner: typescript
      file: apps/web/src/features/property/tags/components/tag-tree.tsx
      symbol: TagTree
    - scanner: typescript
      file: apps/web/src/features/property/api/converters.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/InlineEditor.tsx
      symbol: InlineEditor
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/PropertyOptionSelector.tsx
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/scoped-user-options.ts
      symbol: scopedUserOptions
    - scanner: typescript
      file: apps/web/src/features/property/composed/PropertyDisplay.tsx
    - scanner: typescript
      file: apps/web/src/features/property/utils/errorHandling.ts
      symbol: ERROR_MESSAGES
    - scanner: typescript
      file: apps/web/src/features/property/tags/tagNavigation.ts
    - scanner: typescript
      file: apps/web/src/features/property/editor/PropertyEditorModal.tsx
    - scanner: typescript
      file: apps/web/src/features/property/component/PropertyValuePill.tsx
      symbol: PropertyValuePill
    - scanner: typescript
      file: apps/web/src/features/property/tags/useDocTags.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/InlineTextEditor.tsx
      symbol: InlineTextEditor
    - scanner: typescript
      file: apps/web/src/features/property/tags/entityTagging.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/TagsRow.tsx
      symbol: TagsRow
    - scanner: typescript
      file: apps/web/src/features/property/component/propertyValue/PropertyValueIcon.tsx
      symbol: PropertyValueIcon
    - scanner: typescript
      file: apps/web/src/features/property/tags/list-tag-options.ts
    - scanner: typescript
      file: apps/web/src/features/property/hooks/usePropertySelection.ts
      symbol: usePropertySelection
    - scanner: typescript
      file: apps/web/src/features/property/core/Layout.tsx
      symbol: Layout
    - scanner: typescript
      file: apps/web/src/features/property/tags/use-tag-team-sharing-flag.ts
      symbol: useTagTeamSharingFlag
    - scanner: typescript
      file: apps/web/src/features/property/utils/select-options.ts
    - scanner: typescript
      file: apps/web/src/features/property/property.ts
      symbol: Property
    - scanner: typescript
      file: apps/web/src/features/property/component/propertyValue/EntityIcon.tsx
      symbol: EntityIcon
    - scanner: typescript
      file: apps/web/src/features/property/utils/PropertyDataTypeIcon.tsx
      symbol: PropertyDataTypeIcon
    - scanner: typescript
      file: apps/web/src/features/property/editor/hooks/useSaveProperties.ts
      symbol: useSavePropertyForMultiEntitites
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/entityUtils.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/components/color-swatches.tsx
      symbol: ColorSwatches
    - scanner: typescript
      file: apps/web/src/features/property/tags/DroppedTagApplier.tsx
      symbol: DroppedTagApplier
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyChips.tsx
      symbol: PropertyChips
    - scanner: typescript
      file: apps/web/src/features/property/hooks/usePropertyEntityDisplay.tsx
      symbol: usePropertyEntityDisplay
    - scanner: typescript
      file: apps/web/src/features/property/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/core/tag-tree.ts
    - scanner: typescript
      file: apps/web/src/features/property/core/Root.tsx
      symbol: Root
    - scanner: typescript
      file: apps/web/src/features/property/editor/hooks/useAllProperties.ts
      symbol: useAllProperties
    - scanner: typescript
      file: apps/web/src/features/property/component/AddPropertyButton.tsx
      symbol: AddPropertyButton
    - scanner: typescript
      file: apps/web/src/features/property/utils/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/hooks/useInlineEditor.ts
      symbol: useInlineEditor
    - scanner: typescript
      file: apps/web/src/features/property/core/context.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/InlineLinkEditor.tsx
      symbol: InlineLinkEditor
    - scanner: typescript
      file: apps/web/src/features/property/editor/state/propertyEditor.ts
    - scanner: typescript
      file: apps/web/src/features/property/core/pinned-property-ids.ts
      symbol: resolvePinnedPropertyIds
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyAddButton.tsx
      symbol: PropertyAddButton
    - scanner: typescript
      file: apps/web/src/features/property/side-panel/properties/EntityPropertiesSection.tsx
    - scanner: typescript
      file: apps/web/src/features/property/utils/display.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/popover/DateEditor.tsx
    - scanner: typescript
      file: apps/web/src/features/property/editors/popover/EditorPopover.tsx
      symbol: EditorPopover
    - scanner: typescript
      file: apps/web/src/features/property/tags/tag-options.ts
      symbol: useTagOptions
    - scanner: typescript
      file: apps/web/src/features/property/side-panel/properties/EntityTagsSection.tsx
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyPill.tsx
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/InlineBooleanEditor.tsx
      symbol: InlineBooleanEditor
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyRemoveButton.tsx
      symbol: PropertyRemoveButton
    - scanner: typescript
      file: apps/web/src/features/property/context/PropertiesContext.tsx
    - scanner: typescript
      file: apps/web/src/features/property/tags/SidebarTagsSection.tsx
    - scanner: typescript
      file: apps/web/src/features/property/identifiers.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/TagEditorDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/property/utils/sort.ts
    - scanner: typescript
      file: apps/web/src/features/property/utils/formatting.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/popover/SelectEditor.tsx
      symbol: SelectEditor
    - scanner: typescript
      file: apps/web/src/features/property/editor/entity-property-editor.tsx
      symbol: EntityPropertyEditor
    - scanner: typescript
      file: apps/web/src/features/property/tags/TagPill.tsx
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyText.tsx
      symbol: PropertyText
    - scanner: typescript
      file: apps/web/src/features/property/types.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/tagColors.ts
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyEmpty.tsx
    - scanner: typescript
      file: apps/web/src/features/property/extractors/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/TagDot.tsx
      symbol: TagDot
    - scanner: typescript
      file: apps/web/src/features/property/tags/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/extractors/PropertyTooltip.tsx
      symbol: PropertyTooltip
    - scanner: typescript
      file: apps/web/src/features/property/editors/selectors/PropertyDateSelector.tsx
      symbol: PropertyDateSelector
    - scanner: typescript
      file: apps/web/src/features/property/tags/useSoupResolvedTags.ts
  technology: SolidJS
description: Property icon, text, chips, and empty glyphs.
---

The readme says it mirrors `entity`: small extractors compose under `Property.Root`. A pick shows from save until the source emits a newer property. Debug page is `/props-debug` and is `LOCAL_ONLY`. Task and project lists request muted empty glyphs. `email-thread` imports `InlineFetchedEntityTagsPill` from `@property/tags` (`email-thread/email-thread.tsx:6`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/property/editors/selectors/PropertyOptionSelector.tsx](../../../../../../apps/web/src/features/property/editors/selectors/PropertyOptionSelector.tsx) | [apps/web/src/features/projects/views/project-picker.tsx](../../../../../../apps/web/src/features/projects/views/project-picker.tsx) | Invokes supplied callbacks: itemCount, onSelect | typescript |
| [apps/web/src/features/property/tags/tag-drag-and-drop.tsx](../../../../../../apps/web/src/features/property/tags/tag-drag-and-drop.tsx) | [apps/web/src/features/soup/SoupEntityContextMenu.tsx](../../../../../../apps/web/src/features/soup/SoupEntityContextMenu.tsx) | Invokes supplied callback: disabled | typescript |
