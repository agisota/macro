---
type: C4 Component
title: Block agent
status: stable
groma:
  id: animatednumber
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/AnimatedNumber.tsx
      symbol: AnimatedNumber
    - scanner: typescript
      file: apps/web/src/features/block-agent/views/PresentedReviewPart.tsx
      symbol: PresentedReviewPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentSessionChipShell.tsx
      symbol: ChipShell
    - scanner: typescript
      file: apps/web/src/features/block-agent/debug/replay/interceptor.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/AgentInput.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/OutputToolCall.tsx
      symbol: OutputToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentSplitHeader.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/TaskNotificationPart.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/ToolCallPart.tsx
      symbol: ToolCallPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/tool-approval-wording.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentModelMenuItem.tsx
      symbol: AgentModelMenuItem
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/WorkingLine.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/thought-streaming.ts
      symbol: thoughtIsStreaming
    - scanner: typescript
      file: apps/web/src/features/block-agent/primitives/tool-group-disclosure.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/ElicitationPart.tsx
      symbol: ElicitationPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/Thought.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ComposerNotice.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/prompt-origin.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/image-input.ts
      symbol: IMAGE_INPUT_WARNING
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/sidepanel/AgentSidePanelSections.tsx
      symbol: AgentSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/reply-selection.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/resolve-session-id.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/shared.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/CodeExecutionToolCall.tsx
      symbol: CodeExecutionToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/ToolApprovalRequest.tsx
      symbol: ToolApprovalRequest
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/QuestionAnswers.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/WorkingDots.tsx
      symbol: WorkingDots
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/create-agent-session.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentTaskChip.tsx
      symbol: AgentTaskChip
    - scanner: typescript
      file: apps/web/src/features/block-agent/core/search-location.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/index.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/DisplayResultsToolCall.tsx
      symbol: DisplayResultsToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/debug/replay/Replay.tsx
      symbol: AgentReplay
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/diff-workers.ts
      symbol: useDiffWorkers
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/configure-session-model.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/FoldedTerminal.tsx
      symbol: FoldedTerminal
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/code-execution.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/UserToolCall.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/primitives/session-composer-draft.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/views/CodeExecutionPart.tsx
      symbol: CodeExecutionPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/PromptFooter.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/session-status.ts
      symbol: sessionStatus
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/AgentSessionContext.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/SearchToolCall.tsx
      symbol: SearchToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/open-prompt-origin.ts
      symbol: useOpenPromptOrigin
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ActionLine.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/ReplyToSelection.tsx
      symbol: ReplyToSelection
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentComposer.tsx
      symbol: AgentComposer
    - scanner: typescript
      file: apps/web/src/features/block-agent/components/runtime-refusal-row.tsx
      symbol: RuntimeRefusalRow
    - scanner: typescript
      file: apps/web/src/features/block-agent/debug/replay/driver.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentSessionReadMarker.tsx
      symbol: AgentSessionReadMarker
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/tool-groups.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/MacroToolCall.tsx
      symbol: MacroToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/queries/issue-session-action.ts
      symbol: issueSessionAction
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/PermissionRequest.tsx
      symbol: PermissionRequest
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/DisclosureCaret.tsx
      symbol: DisclosureCaret
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/Block.tsx
      symbol: BlockAgent
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ToolStatusTitle.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/PermissionPart.tsx
      symbol: PermissionPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/FoldedPathList.tsx
      symbol: FoldedPathList
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/ExchangeToolCall.tsx
      symbol: ExchangeToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/primitives/create-agent-route-target.ts
      symbol: createAgentRouteTarget
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/PlanPart.tsx
      symbol: PlanPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/live-turn.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentPullRequestChip.tsx
      symbol: AgentPullRequestChip
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentPreviewBanner.tsx
      symbol: AgentPreviewBanner
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/PathsToolCall.tsx
      symbol: PathsToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentMessage.tsx
      symbol: Message
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/PierreDiff.tsx
      symbol: PierreDiff
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/auto-archive-file-operations.tsx
      symbol: useAutoArchiveFileOperations
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/steer.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/SessionStatusPill.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/hideIncompleteMacroXml.ts
      symbol: hideIncompleteMacroXml
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentConnections.tsx
      symbol: AgentConnections
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/TextPart.tsx
      symbol: TextPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ToolErrorCard.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/CountSummary.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/Transcript.tsx
      symbol: Transcript
    - scanner: typescript
      file: apps/web/src/features/block-agent/views/LiveToolGroup.tsx
      symbol: LiveToolGroup
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/session-config.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/notification-message.ts
      symbol: isNotificationMessage
    - scanner: typescript
      file: apps/web/src/features/block-agent/components/session-event-row.tsx
      symbol: SessionEventRow
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/SubagentToolCall.tsx
      symbol: SubagentToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/attachment-menu.tsx
      symbol: agentAttachmentItems
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/pending-session.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/debug/replay/recording.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/TextShimmer.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/compose-agent-session-options.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ToolCard.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ToolApprovalCard.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/debug/Gallery.tsx
      symbol: AgentUiGallery
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/prompt-action.ts
      symbol: promptActionOf
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/create-queue-controller.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/FoldedAnsiText.tsx
      symbol: FoldedAnsiText
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/types.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/session-summary.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/primitives/create-connector-continuation.ts
      symbol: createConnectorContinuation
    - scanner: typescript
      file: apps/web/src/features/block-agent/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/agent-session-provider.tsx
      symbol: AgentSessionProvider
    - scanner: typescript
      file: apps/web/src/features/block-agent/agent-route.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/AttachmentPart.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/QueuedPrompts.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/EffortSelector.tsx
      symbol: EffortSelector
    - scanner: typescript
      file: apps/web/src/features/block-agent/primitives/create-tool-approval-controller.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/AgentModelSelector.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/TerminalToolCall.tsx
      symbol: TerminalToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/EditToolCall.tsx
      symbol: EditToolCall
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/FoldedOutput.tsx
      symbol: FoldedOutput
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/DiffChanges.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/session-notifications.ts
      symbol: timelineNotifications
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/ArchivedSessionFooter.tsx
      symbol: ArchivedSessionFooter
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/TodoList.tsx
      symbol: TodoList
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/session-start-mode.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/model-groups.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/confirm-session-control.ts
      symbol: confirmSessionControl
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/ToolGroup.tsx
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/ToolApprovalPart.tsx
      symbol: ToolApprovalPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/parts/ControlPart.tsx
      symbol: ControlPart
    - scanner: typescript
      file: apps/web/src/features/block-agent/context/recent-agent-selections.ts
      symbol: createRecentAgentSelections
    - scanner: typescript
      file: apps/web/src/features/block-agent/state/control-message.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/queries/change-session-archive-state.ts
      symbol: changeSessionArchiveState
    - scanner: typescript
      file: apps/web/src/features/block-agent/ui/FailureNoticeCard.tsx
  technology: SolidJS
  group: Agents
description: '`agent` block and pending-session id.'
---

Load accepts a DSS id. The comment says a just-created session's id is the real one from the first frame, so a reloaded URL loads it like any other. `chat/ChatWithAgentButton.tsx` imports `startPendingSession` from this feature's `context/pending-session`. Live tracking is off.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-agent/component/auto-archive-file-operations.tsx](../../../../../../apps/web/src/features/block-agent/component/auto-archive-file-operations.tsx) | [apps/web/src/features/agents-view/components/AgentSessionPane.tsx](../../../../../../apps/web/src/features/agents-view/components/AgentSessionPane.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/features/block-agent/primitives/create-connector-continuation.ts](../../../../../../apps/web/src/features/block-agent/primitives/create-connector-continuation.ts) | [apps/web/src/lib/queries/pipedream-connectors.ts](../../../../../../apps/web/src/lib/queries/pipedream-connectors.ts) | Invokes supplied callback: connect | typescript |
| [apps/web/src/features/block-agent/primitives/create-tool-approval-controller.ts](../../../../../../apps/web/src/features/block-agent/primitives/create-tool-approval-controller.ts) | [apps/web/src/features/agent-updates/primitives/create-agent-updates.ts](../../../../../../apps/web/src/features/agent-updates/primitives/create-agent-updates.ts) | Invokes supplied callbacks: canEdit, sessionId | typescript |
| [apps/web/src/features/block-agent/primitives/create-tool-approval-controller.ts](../../../../../../apps/web/src/features/block-agent/primitives/create-tool-approval-controller.ts) | [apps/web/src/lib/queries/agent-session/tool-approvals.ts](../../../../../../apps/web/src/lib/queries/agent-session/tool-approvals.ts) | Invokes supplied callback: answer | typescript |
