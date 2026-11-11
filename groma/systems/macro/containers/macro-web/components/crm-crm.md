---
type: C4 Component
title: Crm crm
status: stable
groma:
  id: crm-crm
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/crm/crm.tsx
      symbol: Crm
    - scanner: typescript
      file: apps/web/src/features/crm/core/pipeline-csv.ts
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/team-config.ts
      symbol: createCrmPermissions
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/export-source.ts
      symbol: createCrmExportLoader
    - scanner: typescript
      file: apps/web/src/features/crm/navigation-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/tool-pipelines.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/export-companies.ts
    - scanner: typescript
      file: apps/web/src/features/crm/route-adapter.ts
      symbol: createCrmRoute
    - scanner: typescript
      file: apps/web/src/features/crm/task-composer.ts
      symbol: crmTaskComposerContext
    - scanner: typescript
      file: apps/web/src/features/crm/preview-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-route.ts
    - scanner: typescript
      file: apps/web/src/features/crm/context/workspace-context.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/components/list-state.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/queries/pipelines.ts
      symbol: createPipelinesSource
    - scanner: typescript
      file: apps/web/src/features/crm/views/pipeline-import.tsx
      symbol: PipelineImport
    - scanner: typescript
      file: apps/web/src/features/crm/components/crm-sidebar.tsx
      symbol: CrmSidebar
    - scanner: typescript
      file: apps/web/src/features/crm/queries/settings-commands.ts
      symbol: usePatchTeamCrmSettingsMutation
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/contact-discovery.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-list-header.tsx
      symbol: ResponsiveCompanyListHeader
    - scanner: typescript
      file: apps/web/src/features/crm/components/company-list-dialog.tsx
      symbol: CrmListDialog
    - scanner: typescript
      file: apps/web/src/features/crm/components/pipeline-entry-cards.tsx
      symbol: PipelineEntryCards
    - scanner: typescript
      file: apps/web/src/features/crm/views/add-pipeline-record.tsx
      symbol: AddPipelineRecordDialog
    - scanner: typescript
      file: apps/web/src/features/crm/queries/email-filter.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/import-companies.tsx
      symbol: CrmImport
    - scanner: typescript
      file: apps/web/src/features/crm/core/navigation.ts
    - scanner: typescript
      file: apps/web/src/features/crm/record-tasks-adapter.tsx
      symbol: CrmRecordTasks
    - scanner: typescript
      file: apps/web/src/features/crm/queries/activity-filter.ts
      symbol: crmActivityBody
    - scanner: typescript
      file: apps/web/src/features/crm/core/record.ts
    - scanner: typescript
      file: apps/web/src/features/crm/core/contact.ts
      symbol: CrmContact
    - scanner: typescript
      file: apps/web/src/features/crm/components/pipeline-dialog.tsx
      symbol: PipelineDialog
    - scanner: typescript
      file: apps/web/src/features/crm/queries/list-refresh.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-row.tsx
      symbol: CompanyListEntity
    - scanner: typescript
      file: apps/web/src/features/crm/queries/contact-suggestions.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/contact-edit.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-properties-section.tsx
      symbol: CompanyPropertiesSection
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-row.tsx
      symbol: ContactListEntity
    - scanner: typescript
      file: apps/web/src/features/crm/views/activity-section.tsx
      symbol: ActivitySection
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-header.tsx
      symbol: ContactHeader
    - scanner: typescript
      file: apps/web/src/features/crm/components/company-select.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/queries/companies.ts
    - scanner: typescript
      file: apps/web/src/features/crm/stage-adapter.ts
      symbol: createAppDealStages
    - scanner: typescript
      file: apps/web/src/features/crm/core/display-options.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/export.ts
      symbol: fetchCrmExportCompanies
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-discussion-section.tsx
      symbol: CompanyDiscussionSection
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-group-header.tsx
      symbol: CompanyGroupHeader
    - scanner: typescript
      file: apps/web/src/features/crm/components/tool-companies.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-sharing-section.tsx
      symbol: CompanySharingSection
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-visibility-filter.tsx
      symbol: RecordVisibilityFilter
    - scanner: typescript
      file: apps/web/src/features/crm/core/people.ts
    - scanner: typescript
      file: apps/web/src/features/crm/core/pipeline-entry.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-contact.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/record-header-actions.tsx
      symbol: RecordHeaderActions
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-discussion-section.tsx
      symbol: ContactDiscussionSection
    - scanner: typescript
      file: apps/web/src/features/crm/core/export.ts
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/apply-view.ts
      symbol: createApplyCrmView
    - scanner: typescript
      file: apps/web/src/features/crm/views/create-contact.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/tour.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/apply-view.ts
      symbol: useApplyCrmView
    - scanner: typescript
      file: apps/web/src/features/crm/core/saved-view.ts
    - scanner: typescript
      file: apps/web/src/features/crm/core/team-config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/activity-options.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/activity.tsx
      symbol: CrmActivityView
    - scanner: typescript
      file: apps/web/src/features/crm/components/activity-controls.tsx
      symbol: ActivityControls
    - scanner: typescript
      file: apps/web/src/features/crm/queries/pipeline-entries.ts
    - scanner: typescript
      file: apps/web/src/features/crm/record-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/crm/core/email-privacy.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-adapter.ts
      symbol: createAppCrmContext
    - scanner: typescript
      file: apps/web/src/features/crm/queries/email-privacy.ts
      symbol: createEmailPrivacySource
    - scanner: typescript
      file: apps/web/src/features/crm/views/companies.tsx
      symbol: Companies
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-detail.tsx
      symbol: Company
    - scanner: typescript
      file: apps/web/src/features/crm/queries/contact-emails.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-list-membership.tsx
      symbol: CompanyListsSection
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-contacts-section.tsx
      symbol: CompanyContactsSection
    - scanner: typescript
      file: apps/web/src/features/crm/creation-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/contact-grid-template.ts
      symbol: contactGridTemplate
    - scanner: typescript
      file: apps/web/src/features/crm/pipeline-tool-renderers.tsx
      symbol: pipelineToolHandlers
    - scanner: typescript
      file: apps/web/src/features/crm/core/stages.ts
    - scanner: typescript
      file: apps/web/src/features/crm/download-adapter.ts
      symbol: downloadCrmCsv
    - scanner: typescript
      file: apps/web/src/features/crm/core/activity-view.ts
      symbol: CrmActivityViewState
    - scanner: typescript
      file: apps/web/src/features/crm/components/stage-icon.tsx
      symbol: CrmStageIcon
    - scanner: typescript
      file: apps/web/src/features/crm/queries/pipeline-data.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-visibility-button.tsx
      symbol: CompanyVisibilityButton
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-section.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/queries/contact-edit-refresh.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/record-details-section.tsx
      symbol: RecordDetailsSection
    - scanner: typescript
      file: apps/web/src/features/crm/views/default-view.tsx
      symbol: CrmDefaultViewLoader
    - scanner: typescript
      file: apps/web/src/features/crm/queries/team-config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/collection-presets.ts
      symbol: CRM_TAB_PRESETS
    - scanner: typescript
      file: apps/web/src/features/crm/crm-tool-renderers.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/crm-actions.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-hide-action.ts
      symbol: makeHideCompanyAction
    - scanner: typescript
      file: apps/web/src/features/crm/core/record-search.ts
      symbol: recordItemMatchesSearch
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-archived-status.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/email-sync-settings.tsx
      symbol: EmailSyncSection
    - scanner: typescript
      file: apps/web/src/features/crm/queries/visibility-refresh.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-hosted-content.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/copy-link-button.tsx
      symbol: CrmCopyLinkButton
    - scanner: typescript
      file: apps/web/src/features/crm/context/crm-context.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-emails-section.tsx
      symbol: CompanyEmailsSection
    - scanner: typescript
      file: apps/web/src/features/crm/queries/contacts.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/crm-create-menu.tsx
      symbol: CrmCreateMenu
    - scanner: typescript
      file: apps/web/src/features/crm/core/import-companies.ts
    - scanner: typescript
      file: apps/web/src/features/crm/context/crm-sources.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-user-action.tsx
      symbol: createCrmUserCardAction
    - scanner: typescript
      file: apps/web/src/features/crm/crm-search.ts
      symbol: useQuickAccessCrmCompaniesQuery
    - scanner: typescript
      file: apps/web/src/features/crm/crm-link.tsx
      symbol: CrmCopyLinkButton
    - scanner: typescript
      file: apps/web/src/features/crm/components/crm-mobile-tabs.tsx
      symbol: CrmMobileTabs
    - scanner: typescript
      file: apps/web/src/features/crm/queries/company-suggestions.ts
      symbol: useQuickAccessCrmCompaniesQuery
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-properties.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-visibility-button.tsx
      symbol: ContactVisibilityButton
    - scanner: typescript
      file: apps/web/src/features/crm/core/contact-discovery.ts
      symbol: mergeDiscoveredContacts
    - scanner: typescript
      file: apps/web/src/features/crm/core/run-concurrently.ts
      symbol: runConcurrently
    - scanner: typescript
      file: apps/web/src/features/crm/views/pipeline.tsx
      symbol: PipelineView
    - scanner: typescript
      file: apps/web/src/features/crm/views/create-company.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/settings-page.ts
      symbol: createSettingsPage
    - scanner: typescript
      file: apps/web/src/features/crm/queries/keys.ts
      symbol: crmKeys
    - scanner: typescript
      file: apps/web/src/features/crm/components/pipeline-import-failures.tsx
      symbol: PipelineImportFailures
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-detail.tsx
      symbol: Contact
    - scanner: typescript
      file: apps/web/src/features/crm/queries/company-emails.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/saved-views.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/crm-settings.tsx
      symbol: Crm
    - scanner: typescript
      file: apps/web/src/features/crm/filter-adapter.tsx
      symbol: createCrmCollectionFilters
    - scanner: typescript
      file: apps/web/src/features/crm/queries/deal-stages.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/blocked-domains.ts
      symbol: useBlockedDomains
    - scanner: typescript
      file: apps/web/src/features/crm/crm-action-items.ts
      symbol: createCrmEntityActionItems
    - scanner: typescript
      file: apps/web/src/features/crm/queries/pipeline-sharing.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/lists.ts
      symbol: useCrmLists
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-list-header.tsx
      symbol: ResponsiveContactListHeader
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/import-companies.ts
    - scanner: typescript
      file: apps/web/src/features/crm/core/pipeline-record.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/export-columns.ts
      symbol: COMPANY_EXPORT_COLUMNS
    - scanner: typescript
      file: apps/web/src/features/crm/views/contact-emails-section.tsx
      symbol: ContactEmailsSection
    - scanner: typescript
      file: apps/web/src/features/crm/queries/dependencies.ts
    - scanner: typescript
      file: apps/web/src/features/crm/core/pipeline.ts
    - scanner: typescript
      file: apps/web/src/features/crm/activity-state-adapter.ts
      symbol: createCrmActivityState
    - scanner: typescript
      file: apps/web/src/features/crm/views/export-companies.tsx
      symbol: CrmExport
    - scanner: typescript
      file: apps/web/src/features/crm/components/people-display-menu.tsx
      symbol: PeopleDisplayMenu
    - scanner: typescript
      file: apps/web/src/features/crm/queries/graphql.ts
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/people-visibility.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-tabs.tsx
      symbol: RecordTabs
    - scanner: typescript
      file: apps/web/src/features/crm/components/contact-company-property.tsx
      symbol: ContactCompanyProperty
    - scanner: typescript
      file: apps/web/src/features/crm/components/pipeline-sidebar.tsx
      symbol: PipelineSidebar
    - scanner: typescript
      file: apps/web/src/features/crm/display-adapter.ts
      symbol: createAppCrmDisplayOptions
    - scanner: typescript
      file: apps/web/src/features/crm/views/saved-views-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/queries/pipeline-views.ts
    - scanner: typescript
      file: apps/web/src/features/crm/sharing-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/record-items.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/company-grid-template.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-settings.tsx
      symbol: CrmSettings
    - scanner: typescript
      file: apps/web/src/features/crm/queries/stages.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/item-detail.tsx
      symbol: CrmItemDetail
    - scanner: typescript
      file: apps/web/src/features/crm/collection-filters.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/contact-property-styles.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/filter-selections.ts
      symbol: createCrmFilterSelections
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/stage-editor.ts
      symbol: createStageEditor
    - scanner: typescript
      file: apps/web/src/features/crm/activity-filters-adapter.tsx
      symbol: createCrmActivityFilters
    - scanner: typescript
      file: apps/web/src/features/crm/queries/activity.ts
      symbol: useCrmActivityQuery
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-header.tsx
      symbol: CompanyHeader
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/default-view.ts
      symbol: createDefaultCrmView
    - scanner: typescript
      file: apps/web/src/features/crm/components/stage-requirements-dialog.tsx
      symbol: StageRequirementsDialog
    - scanner: typescript
      file: apps/web/src/features/crm/route-views.tsx
      symbol: CompaniesRouteView
    - scanner: typescript
      file: apps/web/src/features/crm/views/company-grid-layout.tsx
      symbol: CompanyGridLayout
    - scanner: typescript
      file: apps/web/src/features/crm/context/pipelines.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/record-associations.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/pipeline-transfer.ts
    - scanner: typescript
      file: apps/web/src/features/crm/views/record-row.tsx
      symbol: CrmListRow
    - scanner: typescript
      file: apps/web/src/features/crm/workspace-adapter.tsx
      symbol: createCrmWorkspace
    - scanner: typescript
      file: apps/web/src/features/crm/queries/previews.ts
    - scanner: typescript
      file: apps/web/src/features/crm/queries/saved-view-codec.ts
    - scanner: typescript
      file: apps/web/src/features/crm/crm-company.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/use-crm.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-overview.tsx
      symbol: RecordOverview
    - scanner: typescript
      file: apps/web/src/features/crm/pipeline-entries-adapter.tsx
      symbol: createCrmPipelineEntries
    - scanner: typescript
      file: apps/web/src/features/crm/views/crm-workspace.tsx
      symbol: CrmWorkspaceView
    - scanner: typescript
      file: apps/web/src/features/crm/queries/team-view-codec.ts
      symbol: parseTeamViews
    - scanner: typescript
      file: apps/web/src/features/crm/queries/pipeline-transfer.ts
      symbol: createPipelineTransfer
    - scanner: typescript
      file: apps/web/src/features/crm/context/view-commands.ts
      symbol: CrmViewCommands
    - scanner: typescript
      file: apps/web/src/features/crm/activity-tasks-adapter.tsx
      symbol: CrmActivityTasks
    - scanner: typescript
      file: apps/web/src/features/crm/views/record-detail.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/views/empty-state.tsx
      symbol: CrmEmptyState
    - scanner: typescript
      file: apps/web/src/features/crm/views/email-privacy.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/group-options.ts
      symbol: COMPANY_GROUP_OPTIONS
    - scanner: typescript
      file: apps/web/src/features/crm/core/stage-requirements.ts
    - scanner: typescript
      file: apps/web/src/features/crm/components/contact-email-property.tsx
      symbol: ContactEmailProperty
    - scanner: typescript
      file: apps/web/src/features/crm/views/record-item-list.tsx
      symbol: RecordItemList
    - scanner: typescript
      file: apps/web/src/features/crm/primitives/display-options.ts
      symbol: createCrmDisplayOptions
    - scanner: typescript
      file: apps/web/src/features/crm/pipeline-adapter.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-search.tsx
      symbol: RecordSearch
    - scanner: typescript
      file: apps/web/src/features/crm/core/company.ts
      symbol: CrmCompany
    - scanner: typescript
      file: apps/web/src/features/crm/queries/stage-requirements.ts
      symbol: useStageRequirements
    - scanner: typescript
      file: apps/web/src/features/crm/components/record-visibility-action.tsx
      symbol: RecordVisibilityAction
  technology: SolidJS
description: Customers workspace.
---

The readme says app code must import root entry points, not `views`, `primitives`, or `queries` directly. Opening a company or contact clears row notifications through `features/notifications/mark-row-seen.ts`. `CompaniesRouteView` lazy-loads `crm/route-views` (`lazy-route-views.ts:50-52`). `CommandMenu` imports `useCrmContactDiscovery` from `crm/record-adapter` (`command/CommandMenu.tsx:2`). `Layout.tsx` imports `companyCreation` and `contactCreation` from `crm/creation-adapter` (`Layout.tsx:16-18`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/crm/primitives/export-companies.ts](../../../../../../apps/web/src/features/crm/primitives/export-companies.ts) | [apps/web/src/features/entity/utils/company-properties.ts](../../../../../../apps/web/src/features/entity/utils/company-properties.ts) | Invokes supplied callback: ownerId | typescript |
