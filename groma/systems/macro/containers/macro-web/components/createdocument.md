---
type: C4 Component
title: CreateDocument
status: stable
groma:
  id: createdocument
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CreateDocument.tsx
      symbol: createDocumentHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Memory.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/uploadToChat.ts
      symbol: useUploadAttachment
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/ChatMessages.tsx
      symbol: ChatMessages
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/useAiDataConsent.tsx
      symbol: useAiDataConsentGate
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/storage.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ToolRenderer.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadMetadata.tsx
      symbol: readMetadataHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ChannelMutations.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/types/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/calendar/DraftComposer.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ChannelMessageMutations.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/attachments.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/signal/speed.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/model-label.ts
      symbol: modelLabel
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ListLabels.tsx
      symbol: listLabelsHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/UpdateThreadLabels.tsx
      symbol: updateThreadLabelsHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadSkill.tsx
      symbol: readSkillHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/ChatInput.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/buildChatEditor.ts
      symbol: buildChatEditor
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/stream/StreamStatus.tsx
      symbol: StreamStatus
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/deriveName.ts
      symbol: deriveChatName
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/AssistantMessage.tsx
      symbol: AssistantMessage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/mentionPlugin.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/signal/attachment.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CalendarTools.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/BaseTool.tsx
      symbol: BaseTool
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/LoadTools.tsx
      symbol: loadToolsHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/WordDocument.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/EditDocument.tsx
      symbol: editDocumentHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/chatAttachmentMention.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/ChatMessageMarkdown.tsx
      symbol: ChatMessageMarkdown
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/DiscoverConnectors.tsx
      symbol: discoverConnectorsHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Tool.tsx
      symbol: Tool
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/signal/globalAttachments.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/splitStream.ts
      symbol: characters
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/calendar/event-preview-model.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/util.tsx
      symbol: Item
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadContent.tsx
      symbol: readContentHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/hook/useEntityDropAttachment.ts
      symbol: useEntityDropAttachment
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ListTags.tsx
      symbol: listTagsHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Agents.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/MoveToProject.tsx
      symbol: moveToProjectHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Notifications.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/UploadFile.tsx
      symbol: uploadFileHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadActivity.tsx
      symbol: readActivityHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/message.ts
      symbol: asChatMessage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/InlineAi.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/TextEditorCodeExecution.tsx
      symbol: textEditorCodeExecutionHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CreateSkill.tsx
      symbol: createSkillHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/AssistantActivityGroup.tsx
      symbol: AssistantActivityGroup
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/forms/ResultDetails.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/DeleteTag.tsx
      symbol: deleteTagHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadProject.tsx
      symbol: readProjectHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/state/chatState.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ListEntities.tsx
      symbol: listEntitiesHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/parse.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SetSenderPolicy.tsx
      symbol: setSenderPolicyHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/pausableStream.ts
      symbol: pausableStream
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SendConfirmedEmail.tsx
      symbol: sendConfirmedEmailHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/calendar/ChatCompose.tsx
      symbol: CalendarChatCompose
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadChat.tsx
      symbol: readChatHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/AIChatEmptyState.tsx
      symbol: AiChatEmptyState
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Initiatives.tsx
      symbol: initiativeToolHandlers
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/forms/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CreateProject.tsx
      symbol: createProjectHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/AssistantMessageParts.tsx
      symbol: AssistantMessageParts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/SpeedToggle.tsx
      symbol: SpeedToggle
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/mockMessage.ts
      symbol: mockMessages
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/ModelSelector.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/BookingManagement.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/McpSetupCards.tsx
      symbol: McpSetupCards
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/TeamAvailability.tsx
      symbol: getTeamAvailabilityHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/handler.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/BookingLinks.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/stream/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/Component.tsx
      symbol: Debug
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/LegacyGeneratedImage.tsx
      symbol: LegacyGeneratedImage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/signal/mention-attachment-callbacks.ts
      symbol: createMentionAttachmentCallbacks
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/WebSearch.tsx
      symbol: webSearchHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/speed.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SearchSkills.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Search.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/WebFetch.tsx
      symbol: webFetchHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/attachment.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/CollapsibleMessage.tsx
      symbol: CollapsibleMessage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/useClipboardCopy.ts
      symbol: useClipboardCopy
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/DatabaseToolHandlers.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/email/ChatCompose.tsx
      symbol: ComposeTool
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/types/attachment.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Subagent.tsx
      symbol: subagentHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/UserMessage.tsx
      symbol: UserMessage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ListAgentUpdates.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/Attachment.tsx
      symbol: DebugAttachments
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/calendar/event-form-adapter.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/email/DraftComposer.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/mcpConstants.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/sendMode.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Bots.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Properties.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CodingAgents.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/ThinkingBlock.tsx
      symbol: ThinkingBlock
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/email/draft-attachments.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/Tool.tsx
      symbol: DebugTools
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Routines.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Comments.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/FormsHandlers.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/BashCodeExecution.tsx
      symbol: bashCodeExecutionHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/Attachment.tsx
      symbol: AttachmentList
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/EmptyChatState.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/HttpStream.tsx
      symbol: HttpStreamDebug
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SelfKnowledge.tsx
      symbol: selfKnowledgeHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/user-tool-review.ts
      symbol: UserToolReviewSink
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/networkProfile.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/mockData.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/legacy-generated-image.ts
      symbol: parseLegacyGeneratedImage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/buildRequest.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/modelCatalog.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CodeMode.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/openEntitiesPrompt.ts
      symbol: getOpenEntitiesPrompt
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/stream/StreamDebugger.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Forms.tsx
      symbol: formsToolHandlers
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/extendedStream.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/calendar/EventPreview.tsx
      symbol: CalendarToolEventPreview
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/EditableChatMessage.tsx
      symbol: EditableChatMessage
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadThread.tsx
      symbol: readThreadHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/signal/pendingSend.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/AgentSessionActions.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/userMessageAttachments.ts
      symbol: getVisibleUserMessageAttachments
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/model.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ImportTools.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/debug/StaticMarkdownStream.tsx
      symbol: StaticMarkdownStreamDebug
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/GetThread.tsx
      symbol: getThreadHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SendChannelMessage.tsx
      symbol: sendChannelMessageHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/state/createChatController.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/mcpServers.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CreateTag.tsx
      symbol: createTagHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Design.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Canvas.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/message/create-mobile-keyboard-scroll-pin.ts
      symbol: createMobileKeyboardScrollPin
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadAgentSession.tsx
      symbol: readAgentSessionHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/EntityLifecycle.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/GenerateImage.tsx
      symbol: generateImageHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/mockStream.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ConnectMcpServer.tsx
      symbol: connectMcpServerHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Spreadsheet.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SendEmail.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/prompts.ts
      symbol: useAdditionalInstructions
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/input/ModelCatalogPicker.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/CallRecordMutations.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/signal/tool.ts
      symbol: registerToolHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/DesignDocument.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SearchTools.tsx
      symbol: searchToolsHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Cognition.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/DatabaseTools.tsx
      symbol: databaseToolHandlers
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/context/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/EditTag.tsx
      symbol: editTagHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/email/sending-inbox.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/context/ChatContext.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/calendar/open-tool-event.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/ProviderIcon.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/constant/fileType.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/McpToolCall.tsx
      symbol: McpToolCall
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/DragDrop.tsx
      symbol: DragDropWrapper
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadChannel.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/RenameDocument.tsx
      symbol: renameDocumentHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ReadCallRecord.tsx
      symbol: readCallRecordHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/util/stream/bufferedStream.ts
      symbol: bufferedStream
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/Presentation.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ListInboxes.tsx
      symbol: listInboxesHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/ListTeamMembers.tsx
      symbol: listTeamMembersHandler
    - scanner: typescript
      file: apps/web/src/lib/core/component/AI/component/tool/SetFavorite.tsx
      symbol: setFavoriteHandler
  technology: SolidJS
description: CreateDocument inside the signed-in client.
---

Source under apps/web/src/lib/core/component/AI/component/tool/CreateDocument.tsx.
