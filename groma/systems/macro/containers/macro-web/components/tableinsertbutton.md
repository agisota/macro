---
type: C4 Component
title: TableInsertButton
status: stable
groma:
  id: tableinsertbutton
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/TableInsertButton.tsx
      symbol: TableInsertButton
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/MagicChipPullRequest.tsx
      symbol: MagicChipPullRequest
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/ThemeMention.tsx
      symbol: ThemeMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/MarkdownShell.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/links/linksPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/await/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/element-event/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/pluginManager.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/EmojiMenu.tsx
      symbol: EmojiMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/convertDocumentMentionsToLinks.ts
      symbol: convertDocumentMentionsToLinks
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/hooks/useBookingLinkMention.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/ContactMention.tsx
      symbol: ContactMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/AgentSessionMention.tsx
      symbol: AgentSessionMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/progress/progressPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/emojis/emojisPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/FocusClickTarget.tsx
      symbol: FocusClickTarget
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/AgentCommandsMenu/filterCommands.ts
      symbol: filterCommands
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/LazyDecorator.tsx
      symbol: LazyDecorator
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/drag-insert/dragInsertPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/keyboard-focus/keyboardFocusPlugin.ts
      symbol: keyboardFocusPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/popup/popupPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/insert-database.ts
      symbol: insertNewDatabase
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/editing/registerMarkdownEditing.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/skills/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SkillsMenu/PullRequestRow.tsx
      symbol: PullRequestRow
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/generate/generatePlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/normalize-enter/normalizeEnterPlugin.ts
      symbol: normalizeEnterPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/hooks/useEmailSearchMention.ts
      symbol: useEmailSearchMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/listToTablePlugin.ts
      symbol: listToTablePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableListTab.ts
      symbol: registerTableListTab
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/NodeAccessoryRenderer.tsx
      symbol: NodeAccessoryRenderer
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/model.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/mentions/mentionsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/theme.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/custom-delete/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/FloatingEquationMenu.tsx
      symbol: FloatingEquationMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/diff/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/ios-cursor-scroll/iosCursorScrollPlugin.ts
      symbol: iosCursorScrollPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MentionTooltip.tsx
      symbol: MentionTooltip
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/FloatingGifMenu.tsx
      symbol: FloatingGifMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/popup/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/draggable-block/draggableBlockPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/utils/botMention.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/gif/uploadGif.ts
      symbol: uploadGif
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/shared/removeNodeAndRestoreSelection.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/custom-caret/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/FloatingLinkMenu.tsx
      symbol: FloatingLinkMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/wordcount/wordcountPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/shared/registerInlineMenuTrigger.ts
      symbol: registerInlineMenuTrigger
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/MarkdownShellContent.tsx
      symbol: MarkdownShellContent
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/flush.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/relay.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/Await.tsx
      symbol: Await
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/list-swipe-indent/listSwipeIndentPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/snippets/snippetInsertion.ts
      symbol: $replaceAwaitNodeWithSnippet
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/code/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/custom-delete/customDeletePlugin.ts
      symbol: customDeletePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/UserMention.tsx
      symbol: UserMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/gif/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MediaButtons.tsx
      symbol: MediaButtons
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/AgentSessionMentionLabel.tsx
      symbol: AgentSessionMentionLabel
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/InlineFollowupMenu.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MediaLoadingPlaceholder.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/enterKeyUtils.ts
      symbol: shouldInsertNewlineOnEnter
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/single-line/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/keyboard-focus/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/insert-text/insertTextPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/paste/PasteActionsMenu.tsx
      symbol: PasteActionsMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/normalize-triple-click/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/block-decorator-navigation/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/tailContext.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/BookingLinkMention.tsx
      symbol: BookingLinkMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tags/tagsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/blame-tooltip/blameTooltipPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/directive/glueToElement.ts
      symbol: glueToElement
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/comments/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/DiffInsert.tsx
      symbol: DiffInsert
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/debug/MarkdownParseTestPage.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/gif/gifPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableDelete.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checkbox-to-task/checkboxDetection.ts
      symbol: $getSelectedCheckboxes
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/directive/floatWithElement.ts
      symbol: floatWithElement
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist-controls/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/code/codePlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/restore-focus/restoreFocusPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/PullRequestMention.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/LexicalInteractiveBoundary.tsx
      symbol: LexicalInteractiveBoundary
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/AgentContext.tsx
      symbol: AgentContext
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/wordcount/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/AgentActivity.tsx
      symbol: AgentActivity
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/components/MentionsMenuItem.tsx
      symbol: MentionsMenuItem
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/element-event/elementEventPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/GenerateMenu.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/available-actions.ts
      symbol: availableActions
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/drag-insert/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableSelectAll.ts
      symbol: registerTableSelectAll
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/horizontal-rules/horizontalRulePlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/actions.ts
      symbol: ACTIONS
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/Watermark.tsx
      symbol: Watermark
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/text-paste/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/create-magic-chip-model.ts
      symbol: createMagicChipModel
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/native-ios-backspace/nativeIosBackspacePlugin.ts
      symbol: nativeIosBackspacePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/vite.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/cursor.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/editing/entityDrop.ts
      symbol: useEditorEntityDrop
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/diff/diffPlugin.ts
      symbol: diffPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/restore-focus/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/debug/EditorTestPage.tsx
      symbol: EditorTestPage
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SkillsMenu/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/shared/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/mentions/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/task-list/TaskListControls.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/markdown-paste/markdownPastePlugin.ts
      symbol: markdownPastePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/status/Progress.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/ReplyTarget.tsx
      symbol: ReplyTarget
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/generate/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/undo.ts
      symbol: registerLoroHistory
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/skills/skillsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/block-decorator-navigation/blockDecoratorNavigationPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/horizontal-rules/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/popup/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/ios-cursor-scroll/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/citationsUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/TableDeleteButtons.tsx
      symbol: TableDeleteButtons
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/MarkdownConfigBuilder.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/presentation.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/hooks/useEntityMention.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/emojis/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/keyboard-shortcuts/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/mapping.ts
      symbol: $findLoroContainerForLexicalNode
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/create-has-multiline-structure.ts
      symbol: createHasMultilineStructure
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/progress/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/CollabProvider.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/mentionsUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/file-paste/filePastePlugin.ts
      symbol: filePastePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/TableCellResizer.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/DatabaseQuery.tsx
      symbol: DatabaseQuery
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/ActionsMenu.tsx
      symbol: ActionMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SkillsMenu/SkillActions.tsx
      symbol: SkillActions
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/paste/PasteTextViewer.tsx
      symbol: PasteTextViewer
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/context/FloatingMenuContext.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableCellResizerPlugin.ts
      symbol: tableCellResizerPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/DatabaseCard.tsx
      symbol: DatabaseCard
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/MentionsMenuController.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/QuoteReplyPreview.tsx
      symbol: QuoteReplyPreview
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/await/awaitPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/document-metadata/documentMetadataPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/links/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/list-swipe-indent/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/searchHighlight.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/accessory/CodeBoxAccessory.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/keyboard-shortcuts/keyboardShortcutsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/init.ts
      symbol: initializeLexical
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/generate/context.ts
      symbol: getContext
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/custom-caret/customCaretPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/markdown-shortcuts/markdownShortcutsPlugin.ts
      symbol: markdownShortcutsPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableCellResize.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/text-paste/textPastePlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/katex/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checkbox-to-task/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/task-list/task-list-assignee-names.ts
      symbol: useTaskListAssigneeNames
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/media/listItemImages.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/actionsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/TagsMenu.tsx
      symbol: TagsMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/GroupMention.tsx
      symbol: GroupMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/context/LexicalWrapperContext.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/node-accessory/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/dom-factory/diff-factory.tsx
      symbol: registerDiffNodeFactory
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/ComposerEditor.tsx
      symbol: ComposerEditor
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/CursorSystemNotification.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/Highlights.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableTabInsertRow.ts
      symbol: registerTableTabInsertRow
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableTestUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/remote-cursor.tsx
      symbol: useRemoteCursors
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/file-paste/desktopPasteboardFiles.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/node-accessory/nodeAccessoryPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/utils/mobileSort.ts
      symbol: sortMobileMentions
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/single-line/singleLinePlugin.ts
      symbol: singleLinePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/Snapshot.tsx
      symbol: Snapshot
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/FloatingFormatMenu.tsx
      symbol: FloatingFormatMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/BlockLink.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/editing/MarkdownEditingOverlays.tsx
      symbol: MarkdownEditingOverlays
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/UnknownMention.tsx
      symbol: UnknownMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableTouchDragGuard.ts
      symbol: registerTableTouchDragGuard
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/constants.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tags/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/ResizeHandle.tsx
      symbol: ResizeHandle
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/commands.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/DocumentCard.tsx
      symbol: DocumentCard
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/searchHighlightTarget.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SnippetsMenu/SnippetsMenu.tsx
      symbol: SnippetsMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/blame-tooltip/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist-controls/checklistControlsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/utils/entityUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/LinkWithPreview.tsx
      symbol: LinkWithPreview
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SkillsMenu/SkillsMenu.tsx
      symbol: SkillsMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableTouchSelection.ts
      symbol: tableTouchSelectionPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tab-indentation/tabIndentationPlugin.ts
      symbol: tabIndentationPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/accessory/GenerateAccessory.tsx
      symbol: GenerateAccessory
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/utils/mention-ranking.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/media/mediaPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/oracles.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/snippets/snippetsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/pinned-properties/pinnedPropertiesPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/word-navigation/wordNavigationPlugin.ts
      symbol: wordNavigationPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/ChannelMessageThreadCard.tsx
      symbol: ChannelMessageThreadCard
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/ConnectApp.tsx
      symbol: ConnectApp
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/StaticMarkdown.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/document-metadata/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/findAndReplacePlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/dragInsertUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MarkdownImage.tsx
      symbol: MarkdownImage
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/trailing-paragraph/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/directive/iosFloatingMiddleware.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checkbox-to-task/checkboxToTaskPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/location/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/hooks/useCalendarEventMention.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/gif/klipy.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/LexicalAwareness.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/BuilderTestPage.tsx
      symbol: BuilderTestPage
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/pinned-properties/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist-controls/collect.ts
      symbol: $collectChecklistMeta
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/MagicChip.tsx
      symbol: MagicChip
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/normalize-enter/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/reconcile.ts
      symbol: $reconcileLexicalState
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/draggable-block/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/file-paste/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MarkdownVideo.tsx
      symbol: MarkdownVideo
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/AgentCommandsMenu/AgentCommandRow.tsx
      symbol: AgentCommandRow
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SnippetsMenu/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/getFloatingSearchHighlightStyle.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/shared/inlineMenu.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/useMenuKeyboardNavigation.ts
      symbol: useMenuKeyboardNavigation
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/insert-text/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/directive/floatWithSelection.ts
      symbol: floatWithSelection
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/DraggableBlockMenu.tsx
      symbol: DraggableBlockMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/location/locationPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist/checklistPlugin.ts
      symbol: checklistPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/FloatingTableMenu.tsx
      symbol: FloatingTableMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checkbox-to-task/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/bridge.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/markdown-paste/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/blame-tooltip/BlameTooltip.tsx
      symbol: BlameTooltip
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/trailing-paragraph/trailingParagraphPlugin.ts
      symbol: trailingParagraphPlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/selection-data/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/DateMention.tsx
      symbol: DateMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/HtmlRender.tsx
      symbol: HtmlRender
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/createLayoutTick.ts
      symbol: createLayoutTick
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/selection-data/selectionDataPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/snippets/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tablePickerPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/MagicChipView.tsx
      symbol: MagicChipView
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/HorizontalRule.tsx
      symbol: HorizontalRule
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/buildHandleFromConfig.ts
      symbol: buildHandleFromConfig
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/media/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/normalize-triple-click/normalizeTripleClickPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/agent-commands/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/paste/ReferencedText.tsx
      symbol: ReferencedText
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/harness.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/context/MarkdownHostContext.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/builder/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/debug/LexicalStateDebugger.tsx
      symbol: LexicalStateDebugger
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/setEditorStateFromHtml.ts
      symbol: setEditorStateFromHtml
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/TableSelectionActionBar.tsx
      symbol: TableSelectionActionBar
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/status/Wordcount.tsx
      symbol: Wordcount
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/code/deleteCodeNode.ts
      symbol: deleteCodeNode
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/components/ItemBin.tsx
      symbol: ItemBin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/fileUploadUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/hooks/createMentionPageLoader.ts
      symbol: createMentionPageLoader
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/TagMention.tsx
      symbol: TagMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/AccountManagerRequest.tsx
      symbol: AccountManagerRequest
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/node-transform/nodeTransformPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/listToTable.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/comments/commentPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tableMove.ts
      symbol: $moveCellRange
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/paste/usePasteNode.ts
      symbol: usePasteNode
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/MentionsMenu.tsx
      symbol: MentionsMenu
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/DragInsertIndicator.tsx
      symbol: DragInsertIndicator
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/markdown-shortcuts/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/links/autoLink.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/agent-commands/agentCommandsPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/SkillsMenu/McpRow.tsx
      symbol: McpRow
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/misc/TableMoveHandle.tsx
      symbol: TableMoveHandle
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/PasteNode.tsx
      symbol: PasteNode
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/version.ts
      symbol: MARKDOWN_VERSION_COUNTER
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist-controls/applyChecklistDom.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/node-transform/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checkbox-to-task/checkboxParsing.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/shared/utils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/MarkdownTextarea.tsx
      symbol: MarkdownTextarea
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/utils/convertBookingLinkMentionsToLinks.ts
      symbol: convertBookingLinkMentionsToLinks
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/utils/mentionHandlers.ts
      symbol: createItemHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/DocumentMention.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/hooks/useUsersMention.ts
      symbol: useUsersMention
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/DecoratorRenderer.tsx
      symbol: DecoratorRenderer
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tab-indentation/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/katex/katexPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/checklist-controls/model.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/Equation.tsx
      symbol: Equation
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/plugins/tables/tablePlugin.ts
      symbol: tablePlugin
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/index.ts
  technology: SolidJS
description: TableInsertButton inside the signed-in client.
---

How close (px) the pointer must be to a row/column border for the button to show.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/component/LexicalMarkdown/editing/entityDrop.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/editing/entityDrop.ts) | [apps/web/src/features/block-md/component/MarkdownEditor.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownEditor.tsx) | Invokes supplied callback: canEdit | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/plugins/blame-tooltip/blameTooltipPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/blame-tooltip/blameTooltipPlugin.ts) | [apps/web/src/features/block-md/component/MarkdownEditor.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownEditor.tsx) | Invokes supplied callback: setState | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/findAndReplacePlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/find-and-replace/findAndReplacePlugin.ts) | [apps/web/src/features/block-md/component/MarkdownEditor.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownEditor.tsx) | Invokes supplied callbacks: getListOffset, setListOffset | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/plugins/location/locationPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/location/locationPlugin.ts) | [apps/web/src/features/block-md/component/MarkdownEditor.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownEditor.tsx) | Invokes supplied callbacks: mutation, onRevokeLocation, selectionChange | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/plugins/popup/popupPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/popup/popupPlugin.ts) | [apps/web/src/features/block-md/component/MarkdownPopup.tsx](../../../../../../apps/web/src/features/block-md/component/MarkdownPopup.tsx) | Invokes supplied callbacks: $allowEmptySelection, setSelection | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/plugins/tags/tagsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/tags/tagsPlugin.ts) | [apps/web/src/features/block-md/component/TitleEditor.tsx](../../../../../../apps/web/src/features/block-md/component/TitleEditor.tsx) | Invokes supplied callback: onCreateTag | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts) | [apps/web/src/features/agents-view/components/ChatComposer.tsx](../../../../../../apps/web/src/features/agents-view/components/ChatComposer.tsx) | Invokes supplied callback: mode | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts) | [apps/web/src/features/block-agent/ui/AgentInput.tsx](../../../../../../apps/web/src/features/block-agent/ui/AgentInput.tsx) | Invokes supplied callback: mode | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts) | [apps/web/src/features/channel/Input/ChannelInput.tsx](../../../../../../apps/web/src/features/channel/Input/ChannelInput.tsx) | Invokes supplied callback: mode | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts) | [apps/web/src/features/channel/Input/DraftComposer.tsx](../../../../../../apps/web/src/features/channel/Input/DraftComposer.tsx) | Invokes supplied callback: mode | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts) | [apps/web/src/lib/core/comments/discussion/DiscussionInput.tsx](../../../../../../apps/web/src/lib/core/comments/discussion/DiscussionInput.tsx) | Invokes supplied callback: mode | typescript |
| [apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/utils/create-composer-layout.ts) | [apps/web/src/lib/core/component/AI/component/input/ChatInput.tsx](../../../../../../apps/web/src/lib/core/component/AI/component/input/ChatInput.tsx) | Invokes supplied callback: mode | typescript |
