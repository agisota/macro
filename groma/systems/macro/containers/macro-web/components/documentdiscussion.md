---
type: C4 Component
title: Component DocumentDiscussion
status: stable
groma:
  id: documentdiscussion
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-md/component/DocumentDiscussion.tsx
      symbol: DocumentDiscussion
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TitleEditor.tsx
      symbol: TitleEditor
    - scanner: typescript
      file: apps/web/src/features/block-md/util/taskComposerProperties.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/queries/ai-edit.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownEditor.tsx
      symbol: MarkdownEditor
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/messageCommentsResource.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/useMarkdownDocumentDownload.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/history/activityRows.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/DispatchAgentMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/component/FormatTools.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/queries/markdown-document-operations.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/history/HistorySessionList.tsx
      symbol: HistorySessionList
    - scanner: typescript
      file: apps/web/src/features/block-md/component/markdownEditorLoadingState.ts
      symbol: isMarkdownEditorLoading
    - scanner: typescript
      file: apps/web/src/features/block-md/component/ModalsProvider.tsx
      symbol: ModalsProvider
    - scanner: typescript
      file: apps/web/src/features/block-md/component/should-autofocus-document.ts
      symbol: shouldAutofocusDocument
    - scanner: typescript
      file: apps/web/src/features/block-md/component/RecoverTaskDrafts.tsx
      symbol: RecoverTaskDrafts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownPopup.tsx
      symbol: MarkdownPopup
    - scanner: typescript
      file: apps/web/src/features/block-md/component/InlineTaskGithubPullRequests.tsx
      symbol: InlineTaskGithubPullRequests
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/CommentThreadDrawer.tsx
      symbol: CommentThreadDrawer
    - scanner: typescript
      file: apps/web/src/features/block-md/component/InlineTaskProperties.tsx
      symbol: InlineTaskProperties
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/CommentMargin.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TaskComposerPropertyEditor.tsx
      symbol: TaskComposerPropertyEditor
    - scanner: typescript
      file: apps/web/src/features/block-md/util/insertAtSavedPoint.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MediaSelector.tsx
      symbol: MediaSelector
    - scanner: typescript
      file: apps/web/src/features/block-md/component/InlinePropertyValue.tsx
      symbol: InlinePropertyValue
    - scanner: typescript
      file: apps/web/src/features/block-md/util/documentComposerProperties.ts
      symbol: createDocumentComposerTags
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/MessageCommentsProvider.tsx
      symbol: MessageCommentsProvider
    - scanner: typescript
      file: apps/web/src/features/block-md/component/useMarkdownCommands.ts
      symbol: registerMarkdownCommands
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownDocument.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownNameProvider.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/queries/markdown-document.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/util/createEnterOwningControl.ts
      symbol: createEnterOwningControl
    - scanner: typescript
      file: apps/web/src/features/block-md/queries/create-document-with-tags.ts
      symbol: createDocumentWithTags
    - scanner: typescript
      file: apps/web/src/features/block-md/history/timestampIndex.ts
      symbol: buildTimestampIndex
    - scanner: typescript
      file: apps/web/src/features/block-md/history/diffAuthorColorPlugin.ts
      symbol: diffAuthorColorPlugin
    - scanner: typescript
      file: apps/web/src/features/block-md/plugins/keyboardNavigation.ts
      symbol: keyNavigationPlugin
    - scanner: typescript
      file: apps/web/src/features/block-md/util/taskComposerStorage.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownDetailBreadcrumbItem.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/markdown-route.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownOutline.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/component/Block.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/history/HistoryOverlay.tsx
      symbol: HistoryOverlay
    - scanner: typescript
      file: apps/web/src/features/block-md/primitives/create-markdown-route-navigation.ts
      symbol: createMarkdownRouteNavigation
    - scanner: typescript
      file: apps/web/src/features/block-md/component/useMarkdownDocumentTools.tsx
      symbol: useMarkdownDocumentTools
    - scanner: typescript
      file: apps/web/src/features/block-md/component/MarkdownCollabProvider.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/history/utils.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/Notebook.tsx
      symbol: Notebook
    - scanner: typescript
      file: apps/web/src/features/block-md/ai-edit/applyAiOps.ts
      symbol: applyAiOps
    - scanner: typescript
      file: apps/web/src/features/block-md/types.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/util/taskComposerSubmissions.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/FindAndReplace.tsx
      symbol: FindAndReplace
    - scanner: typescript
      file: apps/web/src/features/block-md/util/taskComposerDraftSchema.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/context/markdown-document-state.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/constants.ts
      symbol: URL_PARAMS
    - scanner: typescript
      file: apps/web/src/features/block-md/history/HistoryWorkspace.tsx
      symbol: HistoryWorkspace
    - scanner: typescript
      file: apps/web/src/features/block-md/component/SkillDescriptionField.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/commentOperations.ts
      symbol: useDeleteNewComments
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TaskDuplicateMatches.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/primitives/create-pinned-properties.ts
      symbol: createPinnedProperties
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/messageCommentOperations.ts
      symbol: useCreateMessageComment
    - scanner: typescript
      file: apps/web/src/features/block-md/history/timeline.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/history/HistoryScrubber.tsx
      symbol: HistoryScrubber
    - scanner: typescript
      file: apps/web/src/features/block-md/views/compose-document.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/publishCommentMark.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/history/sessionize.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/useTaskBranchNameHotkey.ts
      symbol: useTaskBranchNameHotkey
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/commentMarkCleanup.ts
      symbol: createCommentMarkCleanup
    - scanner: typescript
      file: apps/web/src/features/block-md/history/UserHoverTag.tsx
      symbol: UserHoverTag
    - scanner: typescript
      file: apps/web/src/features/block-md/observability.ts
      symbol: stampLoroSnapshotState
    - scanner: typescript
      file: apps/web/src/features/block-md/history/author.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/ComposeSkill.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/component/CommentButton.tsx
      symbol: CommentButton
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TouchSelectionToolbar.tsx
      symbol: TouchSelectionToolbar
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TaskDuplicateList.tsx
      symbol: SimilarTasksSection
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/commentType.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TableInsert.tsx
      symbol: TableInsert
    - scanner: typescript
      file: apps/web/src/features/block-md/history/createTimelineScales.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/LocalCommentDraft.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/context/markdown-document-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/commentLayout.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/history/HistoryToolbar.tsx
      symbol: HistoryToolbar
    - scanner: typescript
      file: apps/web/src/features/block-md/history/HistoryContext.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/component/sidepanel/MarkdownSidePanelSections.tsx
      symbol: MarkdownSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-md/component/EditorSystemMessage.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/component/TopBar.tsx
      symbol: TopBar
  technology: SolidJS
  group: Docs
description: Markdown notebook block.
---

The readme states the direction, not a finished API. Drive and home document routes treat `md`, `task`, `snippet`, and `skill` as markdown URL params (`routes/routes.ts:329-338`, `routes/routes.ts:438-446`). The editor implementation was not opened in this pass.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-md/util/documentComposerProperties.ts](../../../../../../apps/web/src/features/block-md/util/documentComposerProperties.ts) | [apps/web/src/features/universal-input/actions.ts](../../../../../../apps/web/src/features/universal-input/actions.ts) | Invokes supplied callbacks: onChange, values | typescript |
| [apps/web/src/features/block-md/util/taskComposerProperties.ts](../../../../../../apps/web/src/features/block-md/util/taskComposerProperties.ts) | [apps/web/src/features/universal-input/task-fields.tsx](../../../../../../apps/web/src/features/universal-input/task-fields.tsx) | Invokes supplied callbacks: additionalPropertyIds, values | typescript |
