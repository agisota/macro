---
type: C4 Component
title: Agents view
status: stable
groma:
  id: preferred-repository
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/preferred-repository.ts
      symbol: createPreferredRepository
    - scanner: typescript
      file: apps/web/src/features/agents-view/queries/composer-prompt.ts
      symbol: buildAgentPrompt
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/agent-picker-groups.ts
      symbol: agentPickerGroups
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/AgentSessionListItem.tsx
      symbol: AgentSessionListItem
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/open-composer.ts
      symbol: openAgentComposer
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/Topbar.tsx
      symbol: Topbar
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/mode.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/preferred-inmem-model.ts
      symbol: createPreferredInmemModel
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/ConversationListControls.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/route.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/agent-kind.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/RepositoryPicker.tsx
      symbol: RepositoryPicker
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/roster.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/composer-draft.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentSessionPane.tsx
      symbol: AgentSessionPane
    - scanner: typescript
      file: apps/web/src/features/agents-view/context/data-mode.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentSessionSkeleton.tsx
      symbol: AgentSessionSkeleton
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/session-code-details.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/route-views.tsx
      symbol: AgentsRouteView
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/workspace-mode.ts
      symbol: createWorkspaceMode
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/conversation-filters.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/format-age.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/mobile-agent-composer.tsx
      symbol: MobileAgentComposer
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/conversation-list-view.ts
      symbol: createConversationListView
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentsSidebar.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/preferred-effort.ts
      symbol: createPreferredEffort
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/ModelSelector.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/ComposerAddMenu.tsx
      symbol: AgentComposerAddMenu
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/AgentPicker.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/repository.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/tour.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/open-page.ts
      symbol: openAgentsPage
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/MobileAgentPicker.tsx
      symbol: MobileAgentPicker
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentPickerIdentity.tsx
      symbol: AgentPickerIdentity
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentSessionRow.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentSessionCodeDetails.tsx
      symbol: AgentSessionCodeDetails
    - scanner: typescript
      file: apps/web/src/features/agents-view/primitives/recent-repositories.ts
      symbol: createRecentRepositories
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/conversation-state.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/queries/agent-roster-source.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/AgentsView.tsx
      symbol: AgentsView
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentGlyph.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/AgentSessionListSkeleton.tsx
      symbol: AgentSessionListSkeleton
    - scanner: typescript
      file: apps/web/src/features/agents-view/queries/reachable-repositories.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/views/NewChatPage.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/open-pull-requests.ts
      symbol: selectOpenPullRequests
    - scanner: typescript
      file: apps/web/src/features/agents-view/queries/agent-conversations-query.ts
      symbol: agentConversationsQuery
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/recent-conversations.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/components/ChatComposer.tsx
    - scanner: typescript
      file: apps/web/src/features/agents-view/agents-view-skeleton.tsx
      symbol: AgentsViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/agents-view/core/pages.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/queries/composer-models.ts
    - scanner: typescript
      file: apps/web/src/features/agents-view/queries/repository-branches.ts
  technology: SolidJS
  group: Agents
description: Agents sidebar workspace and legacy Soup list.
---

`route-views.tsx` lazy-loads `SoupView` from `next-soup` for the legacy list, `AgentsView` from this feature, `RoutinesPage` from `routines`, and `IntegrationsPage` from `settings`. Routine create, detail, and list routes all render `AgentsRouteView` (`app-router-view.tsx:351-363`). Agent, coder, and agent-chat routes share the mount key `agents-workspace` (`routes/routes.ts:361-393`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/agents-view/route-views.tsx](../../../../../../apps/web/src/features/agents-view/route-views.tsx) | [apps/web/src/features/routines/routines-page.tsx](../../../../../../apps/web/src/features/routines/routines-page.tsx) | lazy-loads routines page | dynamic import |
| [apps/web/src/features/agents-view/route-views.tsx](../../../../../../apps/web/src/features/agents-view/route-views.tsx) | [apps/web/src/features/next-soup/soup-view/soup-view.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/soup-view.tsx) | lazy-loads legacy agents list | dynamic import |
| [apps/web/src/features/agents-view/route-views.tsx](../../../../../../apps/web/src/features/agents-view/route-views.tsx) | [apps/web/src/features/settings/IntegrationsPage.tsx](../../../../../../apps/web/src/features/settings/IntegrationsPage.tsx) | lazy-loads integrations page | dynamic import |
