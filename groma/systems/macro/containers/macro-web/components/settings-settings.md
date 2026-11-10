---
type: C4 Component
title: Settings
status: stable
groma:
  id: settings-settings
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/settings/Settings.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/TeamMembers.tsx
      symbol: TeamMembers
    - scanner: typescript
      file: apps/web/src/features/settings/views/billing-preview.tsx
      symbol: BillingPreview
    - scanner: typescript
      file: apps/web/src/features/settings/components/team-seat-plan-select.tsx
      symbol: TeamSeatPlanSelect
    - scanner: typescript
      file: apps/web/src/features/settings/Notifications.tsx
      symbol: Notifications
    - scanner: typescript
      file: apps/web/src/features/settings/Account.tsx
      symbol: Account
    - scanner: typescript
      file: apps/web/src/features/settings/connections/catalog-rows.tsx
      symbol: CatalogRows
    - scanner: typescript
      file: apps/web/src/features/settings/connections/leftover-row.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/primitives.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/Agents.tsx
      symbol: Agents
    - scanner: typescript
      file: apps/web/src/features/settings/components/desktop-app.tsx
      symbol: DesktopAppDownload
    - scanner: typescript
      file: apps/web/src/features/settings/IntegrationsPage.tsx
      symbol: IntegrationsPage
    - scanner: typescript
      file: apps/web/src/features/settings/teamMemberPermissions.ts
    - scanner: typescript
      file: apps/web/src/features/settings/agentSettingsState.ts
    - scanner: typescript
      file: apps/web/src/features/settings/mcp-auth-attempt.ts
    - scanner: typescript
      file: apps/web/src/features/settings/Admin.tsx
      symbol: Admin
    - scanner: typescript
      file: apps/web/src/features/settings/AccountManagers.tsx
      symbol: AccountManagers
    - scanner: typescript
      file: apps/web/src/features/settings/components/where-it-runs-option.tsx
      symbol: WhereItRunsOption
    - scanner: typescript
      file: apps/web/src/features/settings/NativeAppInfo.tsx
      symbol: NativeAppInfo
    - scanner: typescript
      file: apps/web/src/features/settings/agentMcpServers.ts
    - scanner: typescript
      file: apps/web/src/features/settings/bot-settings-user-action.ts
      symbol: createBotSettingsUserCardAction
    - scanner: typescript
      file: apps/web/src/features/settings/components/team-invite-row.tsx
      symbol: TeamInviteRow
    - scanner: typescript
      file: apps/web/src/features/settings/connections/slack-channel-import/model.ts
    - scanner: typescript
      file: apps/web/src/features/settings/core/signature-html.ts
      symbol: requiresHtmlEditing
    - scanner: typescript
      file: apps/web/src/features/settings/BotSettingsList.tsx
      symbol: BotSettingsList
    - scanner: typescript
      file: apps/web/src/features/settings/Integrations.tsx
      symbol: IntegrationsSection
    - scanner: typescript
      file: apps/web/src/features/settings/context/mobile-settings.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/MobileSettingsSheet.tsx
      symbol: MobileSettingsSheet
    - scanner: typescript
      file: apps/web/src/features/settings/AgentSettings.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/PipedreamAppPicker.tsx
      symbol: PipedreamAppPicker
    - scanner: typescript
      file: apps/web/src/features/settings/connections/integrations-list.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/pastedHyperlinkHref.ts
      symbol: pastedHyperlinkHref
    - scanner: typescript
      file: apps/web/src/features/settings/teamInviteResend.ts
    - scanner: typescript
      file: apps/web/src/features/settings/components/app-info.tsx
      symbol: AppInfo
    - scanner: typescript
      file: apps/web/src/features/settings/components/auto-archive-setting.tsx
      symbol: AutoArchiveSetting
    - scanner: typescript
      file: apps/web/src/features/settings/LanguageSettings.tsx
      symbol: LanguageSettings
    - scanner: typescript
      file: apps/web/src/features/settings/teamSettingsGroups.ts
      symbol: useTeamSettingsGroups
    - scanner: typescript
      file: apps/web/src/features/settings/core/agent-api-key.ts
    - scanner: typescript
      file: apps/web/src/features/settings/GitHub.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/components/signature-workspace.tsx
      symbol: SignatureWorkspace
    - scanner: typescript
      file: apps/web/src/features/settings/app-build.ts
    - scanner: typescript
      file: apps/web/src/features/settings/connections/provider-meta.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/connections/slack-channel-import/SlackChannelImportFlow.tsx
      symbol: SlackChannelImportFlow
    - scanner: typescript
      file: apps/web/src/features/settings/connections/connection-more.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/components/settings-search-results.tsx
      symbol: SettingsSearchResults
    - scanner: typescript
      file: apps/web/src/features/settings/components/runtime-options.tsx
      symbol: RuntimeOptions
    - scanner: typescript
      file: apps/web/src/features/settings/components/machines-request-badge.tsx
      symbol: MachinesRequestBadge
    - scanner: typescript
      file: apps/web/src/features/settings/account-deletion-feedback.ts
    - scanner: typescript
      file: apps/web/src/features/settings/codex/views/CodexHarness.tsx
      symbol: CodexHarness
    - scanner: typescript
      file: apps/web/src/features/settings/connections/disconnect-confirm.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/components/agent-setup-strips.tsx
      symbol: AgentSetupStrips
    - scanner: typescript
      file: apps/web/src/features/settings/connections/view-state.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/connections/ai-grant-actions.tsx
      symbol: AiGrantActions
    - scanner: typescript
      file: apps/web/src/features/settings/components/local-runtime-prompt.tsx
      symbol: LocalRuntimePrompt
    - scanner: typescript
      file: apps/web/src/features/settings/connections/model.ts
    - scanner: typescript
      file: apps/web/src/features/settings/connections/use-connections-model.ts
      symbol: useConnectionsModel
    - scanner: typescript
      file: apps/web/src/features/settings/Billing.tsx
      symbol: Billing
    - scanner: typescript
      file: apps/web/src/features/settings/components/runtime-setup-steps.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/components/signature-form.tsx
      symbol: SignatureForm
    - scanner: typescript
      file: apps/web/src/features/settings/components/pending-requests-section.tsx
      symbol: PendingRequestsSection
    - scanner: typescript
      file: apps/web/src/features/settings/components/appearance-mode-picker.tsx
      symbol: AppearanceModePicker
    - scanner: typescript
      file: apps/web/src/features/settings/Granola.tsx
      symbol: GranolaCard
    - scanner: typescript
      file: apps/web/src/features/settings/connections/slack-channel-import/SlackChannelImportCard.tsx
      symbol: SlackChannelImportCard
    - scanner: typescript
      file: apps/web/src/features/settings/Team.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/signatureImageResizer.ts
      symbol: setupImageResizer
    - scanner: typescript
      file: apps/web/src/features/settings/queries/inbox-settings-operations.ts
      symbol: useInboxSettingsOperations
    - scanner: typescript
      file: apps/web/src/features/settings/connections/integration-items.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/components/coding-preferences-setting.tsx
      symbol: CodingPreferencesSetting
    - scanner: typescript
      file: apps/web/src/features/settings/connections/PipedreamAiProvider.tsx
      symbol: PipedreamAiProvider
    - scanner: typescript
      file: apps/web/src/features/settings/codex/core/types.ts
    - scanner: typescript
      file: apps/web/src/features/settings/Appearance.tsx
      symbol: Appearance
    - scanner: typescript
      file: apps/web/src/features/settings/runtimeSettingsState.ts
    - scanner: typescript
      file: apps/web/src/features/settings/SignatureEditor.tsx
      symbol: SignatureEditor
    - scanner: typescript
      file: apps/web/src/features/settings/SettingsTabContent.tsx
      symbol: SettingsTabContent
    - scanner: typescript
      file: apps/web/src/features/settings/components/settings-select.tsx
      symbol: SettingsSelect
    - scanner: typescript
      file: apps/web/src/features/settings/components/billing-settings-view.tsx
      symbol: BillingSettingsView
    - scanner: typescript
      file: apps/web/src/features/settings/connections/native-actions.ts
      symbol: useNativeMcpActions
    - scanner: typescript
      file: apps/web/src/features/settings/components/teammate-runtimes-section.tsx
      symbol: TeammateRuntimesSection
    - scanner: typescript
      file: apps/web/src/features/settings/connections/capability-row.ts
      symbol: capabilityFacts
    - scanner: typescript
      file: apps/web/src/features/settings/TeamSidebarAction.tsx
      symbol: TeamSidebarAction
    - scanner: typescript
      file: apps/web/src/features/settings/Bots.tsx
      symbol: Bots
    - scanner: typescript
      file: apps/web/src/features/settings/components/current-plan-card.tsx
      symbol: CurrentPlanCard
    - scanner: typescript
      file: apps/web/src/features/settings/route-views.tsx
      symbol: SettingsRouteView
    - scanner: typescript
      file: apps/web/src/features/settings/TeamGeneral.tsx
      symbol: TeamGeneral
    - scanner: typescript
      file: apps/web/src/features/settings/ApiKeys.tsx
      symbol: ApiKeys
    - scanner: typescript
      file: apps/web/src/features/settings/teamSlug.ts
    - scanner: typescript
      file: apps/web/src/features/settings/MobileApp.tsx
      symbol: MobileApp
    - scanner: typescript
      file: apps/web/src/features/settings/codex/components/CodexConnection.tsx
      symbol: CodexConnection
    - scanner: typescript
      file: apps/web/src/features/settings/connections/import-action.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/connections/add-custom-mcp-dialog.tsx
      symbol: AddCustomMcpDialog
    - scanner: typescript
      file: apps/web/src/features/settings/core/billing-state.ts
    - scanner: typescript
      file: apps/web/src/features/settings/TeamInviteLinkSection.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/integration-ui.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/Agent.tsx
      symbol: Agent
    - scanner: typescript
      file: apps/web/src/features/settings/components/billing-plan-card.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/core/settings-target.ts
      symbol: settingsTarget
    - scanner: typescript
      file: apps/web/src/features/settings/SignatureSection.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/Email.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/core/settings-search.ts
    - scanner: typescript
      file: apps/web/src/features/settings/email-settings.tsx
      symbol: EmailSettings
    - scanner: typescript
      file: apps/web/src/features/settings/MutedItemRow.tsx
      symbol: MutedItemRow
    - scanner: typescript
      file: apps/web/src/features/settings/DefaultRepository.tsx
      symbol: DefaultRepository
    - scanner: typescript
      file: apps/web/src/features/settings/core/cursor-api-key.ts
    - scanner: typescript
      file: apps/web/src/features/settings/Shortcuts.tsx
      symbol: Shortcuts
    - scanner: typescript
      file: apps/web/src/features/settings/components/local-runtime-card.tsx
      symbol: LocalRuntimeCard
    - scanner: typescript
      file: apps/web/src/features/settings/connections/integrations-view.tsx
      symbol: IntegrationsView
    - scanner: typescript
      file: apps/web/src/features/settings/Harness.tsx
      symbol: Harness
    - scanner: typescript
      file: apps/web/src/features/settings/DesktopApp.tsx
      symbol: DesktopApp
    - scanner: typescript
      file: apps/web/src/features/settings/RuntimePairingPage.tsx
      symbol: RuntimePairingPage
    - scanner: typescript
      file: apps/web/src/features/settings/CursorConnectPage.tsx
      symbol: CursorConnectPage
    - scanner: typescript
      file: apps/web/src/features/settings/components/connected-runtimes-section.tsx
    - scanner: typescript
      file: apps/web/src/features/settings/InboxSettingsOperations.tsx
      symbol: InboxSettingsOperations
    - scanner: typescript
      file: apps/web/src/features/settings/components/cursor-default-model.tsx
      symbol: CursorDefaultModel
    - scanner: typescript
      file: apps/web/src/features/settings/components/settings-sidebar.tsx
      symbol: SettingsSidebar
    - scanner: typescript
      file: apps/web/src/features/settings/components/instructions-editor.tsx
      symbol: AgentInstructionsEditor
    - scanner: typescript
      file: apps/web/src/features/settings/components/settings-search-target.tsx
      symbol: SettingsSearchTarget
    - scanner: typescript
      file: apps/web/src/features/settings/Tags.tsx
      symbol: Tags
  technology: SolidJS
description: Settings shell, tabs, team, and integrations page.
---

`SettingsPanelComponentWrapper` maps the slug with `settingsSlugToTab`, defaulting to Account, and does not remount when the tab changes. `SettingsRouteView` lazy-loads this feature (`lazy-route-views.ts:110-112`). `agents-view` lazy-loads `IntegrationsPage` from here (`agents-view/route-views.tsx:29-31`). `AppChrome` wraps authenticated chrome in `MobileSettingsProvider` from this feature (`Layout.tsx:29`).
