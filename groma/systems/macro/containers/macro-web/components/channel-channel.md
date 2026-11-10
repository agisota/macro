---
type: C4 Component
title: Channel
status: stable
groma:
  id: channel-channel
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/Channel.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/UnifiedEditInput.tsx
      symbol: UnifiedEditInput
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ChannelJoinLinkButton.tsx
      symbol: ChannelJoinLinkButton
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallAudioSink.tsx
      symbol: CallAudioSink
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ThreadList.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadCollapsedIndicator.tsx
      symbol: ThreadCollapsedIndicator
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/clear-composer.ts
      symbol: clearComposer
    - scanner: typescript
      file: apps/web/src/features/channel/Call/is-program-participant.ts
      symbol: isProgramParticipant
    - scanner: typescript
      file: apps/web/src/features/channel/Media/MediaVideo.tsx
      symbol: MediaVideo
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/CreateBotTokenDialog.tsx
      symbol: CreateBotTokenDialog
    - scanner: typescript
      file: apps/web/src/features/channel/Input/create-typing-tracker.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotCreationResult.tsx
      symbol: BotCreationResult
    - scanner: typescript
      file: apps/web/src/features/channel/components/ChannelPicture.tsx
      symbol: ChannelPicture
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadTypingIndicator.tsx
      symbol: ThreadTypingIndicator
    - scanner: typescript
      file: apps/web/src/features/channel/queries/prefetch-channel-target.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Media/MediaImage.tsx
      symbol: MediaImage
    - scanner: typescript
      file: apps/web/src/features/channel/Media/media-items.ts
    - scanner: typescript
      file: apps/web/src/features/channel/queries/static-media-download.ts
      symbol: mediaDownloadSource
    - scanner: typescript
      file: apps/web/src/features/channel/Call/auto-rejoin.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/message-payload.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/attachment-utils.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/FormatRibbon.tsx
      symbol: FormatRibbon
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/persistence.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotDetailPage.tsx
      symbol: BotDetail
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotCreatePage.tsx
      symbol: BotCreate
    - scanner: typescript
      file: apps/web/src/features/channel/Input/create-collapsed-input-state.ts
      symbol: createCollapsedInputState
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/ChannelAttachmentEntitySection.tsx
      symbol: ChannelAttachmentEntitySection
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-tabs.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotDeleteDialog.tsx
      symbol: BotDeleteDialog
    - scanner: typescript
      file: apps/web/src/features/channel/views/pending-direct-message.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Message/context.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallStartedNotifier.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Mobile/MessageActionDrawerManager.tsx
      symbol: MaybeMessageActionDrawerManager
    - scanner: typescript
      file: apps/web/src/features/channel/Input/DropOverlay.tsx
      symbol: DropOverlay
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/StandaloneThread.ts
      symbol: StandaloneThread
    - scanner: typescript
      file: apps/web/src/features/channel/use-channel-participants.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/EmojiReactionPopover.tsx
      symbol: EmojiReactionPopover
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-message-selection.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/create-thread-reply-view.ts
      symbol: createThreadReplyView
    - scanner: typescript
      file: apps/web/src/features/channel/use-message-participants.ts
      symbol: useMessageParticipants
    - scanner: typescript
      file: apps/web/src/features/channel/Input/create-input-state.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/MutedMicrophoneBadge.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/types.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/call-discussion.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Root.tsx
      symbol: Root
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ChannelBotRow.tsx
      symbol: ChannelBotRow
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyAuthor.tsx
      symbol: ThreadReplyAuthor
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelLoading.tsx
      symbol: ChannelLoading
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/create-target-reply-scroller.ts
    - scanner: typescript
      file: apps/web/src/features/channel/views/channel-invite-modal.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/desktop-screen-capture.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/NewDivider.tsx
      symbol: NewDivider
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/message-grouping-meta.ts
    - scanner: typescript
      file: apps/web/src/features/channel/components/RequestToJoinPanel.tsx
      symbol: RequestToJoinPanel
    - scanner: typescript
      file: apps/web/src/features/channel/queries/system-activity.ts
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/Root.tsx
      symbol: Root
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/unified-input-manager.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/FormatButtons.tsx
      symbol: FormatButtons
    - scanner: typescript
      file: apps/web/src/features/channel/Call/native-call-state.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/native-call-platform.ts
      symbol: isNativeCallEnabled
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ActiveCallLink.tsx
      symbol: ActiveCallLink
    - scanner: typescript
      file: apps/web/src/features/channel/Input/Root.tsx
      symbol: Root
    - scanner: typescript
      file: apps/web/src/features/channel/Call/screen-share.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/index.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsSearchInput.tsx
      symbol: ParticipantsSearchInput
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/context.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallSessionController.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/botForm.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyChannelInput.tsx
      symbol: ThreadReplyChannelInput
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-link.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallOverlay.tsx
      symbol: CallOverlay
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-message-editor.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-channel-drag-state.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/message-element-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/UnreadNotificationsOverlay.tsx
      symbol: UnreadNotificationsOverlay
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/ReadonlyThread.tsx
      symbol: ReadonlyThread
    - scanner: typescript
      file: apps/web/src/features/channel/Message/MentionedImages.tsx
      symbol: MentionedImages
    - scanner: typescript
      file: apps/web/src/features/channel/Input/InputActions.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadTerminalRail.tsx
      symbol: ThreadTerminalRail
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ScrollToBottomOverlay.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Content.tsx
      symbol: Content
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/GuestCallChat.tsx
      symbol: GuestCallChat
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadActionsFooter.tsx
      symbol: ThreadActionsFooter
    - scanner: typescript
      file: apps/web/src/features/channel/use-chat-v3-agents-flag.ts
      symbol: useChatV3AgentsFlag
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/EditableThread.tsx
      symbol: EditableThread
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsListItem.tsx
      symbol: ParticipantsListItem
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-resolution.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-target-message-controller.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/createBotAvatarUpload.ts
      symbol: createBotAvatarUpload
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/macroAi.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/SenderName.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/entity-mention.ts
      symbol: entityToDocumentMentionInfo
    - scanner: typescript
      file: apps/web/src/features/channel/Call/meeting-invitation-resolution.ts
    - scanner: typescript
      file: apps/web/src/features/channel/channel-picture.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ChannelTeamSettingsPanel.tsx
      symbol: ChannelTeamSettingsPanel
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/build-call-message-link.ts
      symbol: buildCallMessageLink
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-channel-unread-navigation.ts
      symbol: createChannelUnreadNavigation
    - scanner: typescript
      file: apps/web/src/features/channel/Input/configured-markdown-editor.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ChannelCallButton.tsx
      symbol: ChannelCallButton
    - scanner: typescript
      file: apps/web/src/features/channel/Message/SwipeToReplyRow.tsx
      symbol: MaybeSwipeToReplyRow
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/file-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallParticipantsList.tsx
      symbol: CallParticipantsList
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/MediaGallery.tsx
      symbol: MediaGallery
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/unread-thread-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/Editor.tsx
      symbol: Editor
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/CredentialField.tsx
      symbol: CredentialField
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsAddPanel.tsx
      symbol: ParticipantsAddPanel
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Attachments.tsx
      symbol: Attachments
    - scanner: typescript
      file: apps/web/src/features/channel/Message/DateDivider.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-audio-receiver-stats.ts
      symbol: startReceiverStatsSampling
    - scanner: typescript
      file: apps/web/src/features/channel/Input/create-input-commands.ts
      symbol: createInputCommands
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ring-coordination.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/ChannelCreatedIndicator.tsx
      symbol: ChannelCreatedIndicator
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/channel-entity.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelTitleMenu.tsx
      symbol: ChannelTitleMenu
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/SectionHeader.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/DirectMessageEmptyState.tsx
      symbol: DirectMessageEmptyState
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/components/CallChatPanel.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/utils/thread-rail-geometry.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallEventSync.tsx
      symbol: CallEventSync
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallControls/CallControls.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ChannelCallAutoJoin.tsx
      symbol: ChannelCallAutoJoin
    - scanner: typescript
      file: apps/web/src/features/channel/Call/use-start-channel-call.tsx
      symbol: useStartChannelCall
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/ChannelAttachmentMediaSection.tsx
      symbol: ChannelAttachmentMediaSection
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-unread-destination-registry.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/index.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallControls/CallControlBar.tsx
      symbol: CallControlBar
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/webhook.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/render-icon.tsx
      symbol: renderIcon
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotInviteSelect.tsx
      symbol: BotInviteSelect
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallControls/CallControlsDefaultAndPanelRow.tsx
      symbol: CallControlsDefaultAndPanelRow
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/create-thread-hotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ParticipantAvatarBackground.tsx
      symbol: ParticipantAvatarBackground
    - scanner: typescript
      file: apps/web/src/features/channel/Input/InputFlag.tsx
      symbol: InputFlag
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/OutsideMessagesPopup.tsx
      symbol: OutsideMessagesPopup
    - scanner: typescript
      file: apps/web/src/features/channel/Input/attachment-tracker.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Timestamp.tsx
      symbol: Timestamp
    - scanner: typescript
      file: apps/web/src/features/channel/Media/MediaGrid.tsx
      symbol: MediaGrid
    - scanner: typescript
      file: apps/web/src/features/channel/Call/livekit-loader.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadRow.tsx
      symbol: ThreadRow
    - scanner: typescript
      file: apps/web/src/features/channel/Input/mentions-tracker.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/channel-tab-icons.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Message/HoverActions.tsx
      symbol: HoverActions
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-channel-find-bar.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyInput.tsx
      symbol: ThreadReplyInput
    - scanner: typescript
      file: apps/web/src/features/channel/Call/join-channel-call.ts
      symbol: joinChannelCall
    - scanner: typescript
      file: apps/web/src/features/channel/Call/latest-async-request-queue.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/native-call-lifecycle.ts
      symbol: bindNativeCallLifecycle
    - scanner: typescript
      file: apps/web/src/features/channel/Input/types.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ChannelCallTab.tsx
      symbol: ChannelCallTab
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/formatting.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/microphone-access.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/utils/message-actions.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/select-trailing-paragraph.ts
      symbol: $selectTrailingParagraph
    - scanner: typescript
      file: apps/web/src/features/channel/scroll-utils.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/ScreenSourcePicker.tsx
      symbol: pickScreenSource
    - scanner: typescript
      file: apps/web/src/features/channel/tour.ts
      symbol: CHANNEL_TOUR
    - scanner: typescript
      file: apps/web/src/features/channel/Input/ThreadInput.tsx
      symbol: ThreadInput
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/UnifiedReplyInput.tsx
      symbol: UnifiedReplyInput
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsList.tsx
      symbol: ParticipantsList
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadRepliesBridgeRail.tsx
      symbol: ThreadRepliesBridgeRail
    - scanner: typescript
      file: apps/web/src/features/channel/Message/browser-selection.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/use-channel-bot-management.ts
      symbol: useChannelBotManagement
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/components/CallChatBody.tsx
      symbol: CallChatBody
    - scanner: typescript
      file: apps/web/src/features/channel/Message/list-meta.ts
      symbol: ChannelMessageListMeta
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/ChannelCallPanel.tsx
      symbol: ChannelCallPanel
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/target-message.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-channel-keyboard-handler.ts
      symbol: createChannelKeyboardHandler
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotProfileFields.tsx
      symbol: BotProfileFields
    - scanner: typescript
      file: apps/web/src/features/channel/Message/highlightOverlay.ts
      symbol: createSearchHighlightOverlay
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Slot.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Input/ChannelInput.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/outside-messages.ts
      symbol: outsideMessages
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/thread-manager.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/DropZone.tsx
      symbol: DropZone
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-channel-message-actions.ts
    - scanner: typescript
      file: apps/web/src/features/channel/primitives/create-channel-invites.ts
      symbol: createChannelInvites
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/format-call-elapsed.ts
      symbol: formatCallElapsed
    - scanner: typescript
      file: apps/web/src/features/channel/Media/MediaViewerDialog.tsx
      symbol: MediaViewerDialog
    - scanner: typescript
      file: apps/web/src/features/channel/composer-arrival-focus.ts
      symbol: arrivalFocusesComposer
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyInputConnector.tsx
      symbol: ThreadReplyInputConnector
    - scanner: typescript
      file: apps/web/src/features/channel/Input/upload-attachments.ts
      symbol: uploadInputAttachments
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/botPermissions.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/features/channel/core/access-request.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/CallChatHistory.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/use-callkit-theme-sync.ts
      symbol: useCallKitThemeSync
    - scanner: typescript
      file: apps/web/src/features/channel/touch-drag.ts
      symbol: watchTouchDrag
    - scanner: typescript
      file: apps/web/src/features/channel/components/SystemActivityRow.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/channel-tabs.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotDetailActions.tsx
      symbol: BotDetailActions
    - scanner: typescript
      file: apps/web/src/features/channel/Message/ActionMenu.tsx
      symbol: ActionMenu
    - scanner: typescript
      file: apps/web/src/features/channel/Message/SenderIcon.tsx
      symbol: SenderIcon
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallControls/CallSettingsMenu.tsx
      symbol: CallSettingsMenu
    - scanner: typescript
      file: apps/web/src/features/channel/Call/meeting-invitation-events.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/PastCallLine.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/channel-avatar.tsx
      symbol: ChannelAvatar
    - scanner: typescript
      file: apps/web/src/features/channel/Message/MediaPreview.tsx
      symbol: MediaPreview
    - scanner: typescript
      file: apps/web/src/features/channel/Message/index.ts
    - scanner: typescript
      file: apps/web/src/features/channel/queries/my-access-request.ts
      symbol: useMyChannelAccessRequestState
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/message-list-meta.ts
      symbol: buildChannelMessageListMeta
    - scanner: typescript
      file: apps/web/src/features/channel/core/system-activity.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/ChannelInputContainer.tsx
      symbol: ChannelInputContainer
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallControls/CallSharingMenu.tsx
      symbol: CallSharingMenu
    - scanner: typescript
      file: apps/web/src/features/channel/Input/ActionButton.tsx
      symbol: InputActionButton
    - scanner: typescript
      file: apps/web/src/features/channel/channel-invite-button.tsx
      symbol: ChannelInviteButton
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/Replies.tsx
      symbol: Replies
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/message-editing.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/BotIcon.tsx
      symbol: BotIcon
    - scanner: typescript
      file: apps/web/src/features/channel/Call/use-call.ts
      symbol: useCall
    - scanner: typescript
      file: apps/web/src/features/channel/Input/Input.ts
      symbol: Input
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/CallChat.tsx
      symbol: CallChat
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyMonorail.tsx
      symbol: ThreadReplyMonorail
    - scanner: typescript
      file: apps/web/src/features/channel/Input/ComposerAddMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/channel-icon.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/link.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-panel-breakpoints.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-identity.ts
    - scanner: typescript
      file: apps/web/src/features/channel/unified-input-mode.ts
      symbol: isUnifiedInputMode
    - scanner: typescript
      file: apps/web/src/features/channel/Input/DraftComposer.tsx
      symbol: DraftComposer
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelDropZone.tsx
      symbol: ChannelDropZone
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-scroll-compensation.ts
      symbol: createScrollCompensation
    - scanner: typescript
      file: apps/web/src/features/channel/Call/use-callkit.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ActiveCallMessage.tsx
      symbol: ActiveCallMessage
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/ChannelMultiSelect.tsx
      symbol: ChannelMultiSelect
    - scanner: typescript
      file: apps/web/src/features/channel/primitives/pending-direct-messages.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-entity-drop-zone.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/CallRootLine.tsx
      symbol: CallRootLine
    - scanner: typescript
      file: apps/web/src/features/channel/ChannelAccessDenied.tsx
      symbol: ChannelAccessDenied
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/thread-paginator.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Media/MediaImageActions.tsx
      symbol: MediaImageActions
    - scanner: typescript
      file: apps/web/src/features/channel/components/ChannelTopIcon.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ChannelThread.tsx
      symbol: ChannelThread
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelTabContext.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/queries/keys.ts
      symbol: guestCallChatKey
    - scanner: typescript
      file: apps/web/src/features/channel/Call/LivekitJsCallController.ts
      symbol: createLivekitJsCallController
    - scanner: typescript
      file: apps/web/src/features/channel/Message/FromPill.tsx
      symbol: FromPill
    - scanner: typescript
      file: apps/web/src/features/channel/Call/microphone-blocked-toast.tsx
      symbol: showMicrophoneBlockedToast
    - scanner: typescript
      file: apps/web/src/features/channel/Message/EditedIndicator.tsx
      symbol: EditedIndicator
    - scanner: typescript
      file: apps/web/src/features/channel/Input/SendAction.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/InlineMessageEditor.tsx
      symbol: MessageEditorContent
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/botChannelOptions.ts
    - scanner: typescript
      file: apps/web/src/features/channel/components/AccessRequestActivityRow.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/use-channel-tab-items.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotAgentSection.tsx
      symbol: BotAgentSection
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/botSettingsState.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/use-toggle-share-with-team.ts
      symbol: useActiveCallTeamShare
    - scanner: typescript
      file: apps/web/src/features/channel/Calls/channel-calls-query.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelTopBarLiveIndicators.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotFormSection.tsx
      symbol: BotFormSection
    - scanner: typescript
      file: apps/web/src/features/channel/Message/agent-session-link.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/Layout.tsx
      symbol: Layout
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Layout.tsx
      symbol: Layout
    - scanner: typescript
      file: apps/web/src/features/channel/Message/ReactionChip.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/DebugSuspense.tsx
      symbol: DebugSuspense
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyButton.tsx
      symbol: ThreadReplyButton
    - scanner: typescript
      file: apps/web/src/features/channel/Call/screen-share-error.ts
      symbol: ScreenShareError
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/Thread.ts
      symbol: Thread
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallParticipantAvatars.tsx
      symbol: CallParticipantAvatars
    - scanner: typescript
      file: apps/web/src/features/channel/components/ChannelUnavailable.tsx
      symbol: ChannelUnavailable
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/queries/use-call-chat.ts
      symbol: useCallChat
    - scanner: typescript
      file: apps/web/src/features/channel/Call/open-channel-call-tab.ts
      symbol: openChannelCallTab
    - scanner: typescript
      file: apps/web/src/features/channel/Call/create-controls-visibility.ts
      symbol: createControlsVisibility
    - scanner: typescript
      file: apps/web/src/features/channel/Call/TrackView.tsx
      symbol: TrackView
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/ChannelSurface.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Input/context.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/utils/sendable-content.ts
      symbol: hasSendableInputContent
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsEmptyState.tsx
      symbol: ParticipantsEmptyState
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotAvatar.tsx
      symbol: BotAvatar
    - scanner: typescript
      file: apps/web/src/features/channel/Call/callkit-drawer-theme.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/AttachmentEntityList.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/CallDiscussionContent.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/create-thread-replies-fetch-gate.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/create-target-reply-navigation-controller.ts
      symbol: createTargetReplyNavigationController
    - scanner: typescript
      file: apps/web/src/features/channel/components/ChannelMutedIndicator.tsx
      symbol: ChannelMutedIndicator
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-channel-hotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/index.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/utils/thread-reply-indicator-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotAdvancedSection.tsx
      symbol: BotAdvancedSection
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/ChannelAttachmentsTab.tsx
      symbol: ChannelAttachmentsTab
    - scanner: typescript
      file: apps/web/src/features/channel/Message/AgentBadge.tsx
      symbol: AgentBadge
    - scanner: typescript
      file: apps/web/src/features/channel/Message/ChannelMessage.tsx
      symbol: ChannelMessage
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-media-telemetry.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/NewMeetingButton.tsx
      symbol: NewMeetingButton
    - scanner: typescript
      file: apps/web/src/features/channel/Message/AgentSessionLink.tsx
      symbol: AgentSessionLink
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ChannelParticipantsTab.tsx
      symbol: ChannelParticipantsTab
    - scanner: typescript
      file: apps/web/src/features/channel/Mobile/message-action-drawer-context.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Message.ts
      symbol: Message
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsActionSheet.tsx
      symbol: ParticipantsActionSheet
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/focus-request.ts
    - scanner: typescript
      file: apps/web/src/features/channel/use-agent-mention-users.ts
    - scanner: typescript
      file: apps/web/src/features/channel/activity-tracker.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/CollapsedAttachmentPreview.tsx
      symbol: CollapsedAttachmentPreview
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/channel-actions.ts
      symbol: CHANNEL_ACTION_VIEW_CONTEXT
    - scanner: typescript
      file: apps/web/src/features/channel/Input/accepted-file-types.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ChannelBotsPanel.tsx
      symbol: ChannelBotsPanel
    - scanner: typescript
      file: apps/web/src/features/channel/StandaloneThread/ParentMessage.tsx
      symbol: ParentMessage
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyList.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/constants.ts
      symbol: NEAR_BOTTOM_THRESHOLD
    - scanner: typescript
      file: apps/web/src/features/channel/Participants/ParticipantsMobileLayout.tsx
      symbol: ParticipantsMobileLayout
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadRootRail.tsx
      symbol: ThreadRootRail
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/BotWebhooksSection.tsx
      symbol: BotWebhooksSection
    - scanner: typescript
      file: apps/web/src/features/channel/Calls/use-channel-calls-source.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallControls/CallMediaControls.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Input/create-input-view.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-delete-message-confirmation.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/util.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Mobile/ActionDrawer.tsx
      symbol: ActionDrawer
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadRepliesContainer.tsx
      symbol: ThreadRepliesContainer
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyRailDecorations.tsx
      symbol: ThreadReplyRailDecorations
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/reply-list-meta.ts
      symbol: buildThreadReplyListMeta
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/queries/use-guest-call-chat.ts
      symbol: useGuestCallChat
    - scanner: typescript
      file: apps/web/src/features/channel/use-channel-bot-mention-users.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-events.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Calls/ChannelCallsTab.tsx
      symbol: ChannelCallsTab
    - scanner: typescript
      file: apps/web/src/features/channel/CreateChannelModal.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Message/Reactions.tsx
      symbol: Reactions
    - scanner: typescript
      file: apps/web/src/features/channel/Thread/ThreadReplyRail.tsx
      symbol: ThreadReplyRail
    - scanner: typescript
      file: apps/web/src/features/channel/SystemActivity.tsx
      symbol: SystemActivity
    - scanner: typescript
      file: apps/web/src/features/channel/Message/MessageFlag.tsx
      symbol: MessageFlag
    - scanner: typescript
      file: apps/web/src/features/channel/Input/Attachments.tsx
      symbol: Attachments
    - scanner: typescript
      file: apps/web/src/features/channel/Call/CallContext.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Channel/create-scroll-lifecycle.ts
      symbol: createScrollLifecycle
    - scanner: typescript
      file: apps/web/src/features/channel/Attachments/AttachmentEntityRow.tsx
      symbol: AttachmentEntityRow
    - scanner: typescript
      file: apps/web/src/features/channel/Message/MentionedRoutineTemplates.tsx
      symbol: MentionedRoutineTemplates
    - scanner: typescript
      file: apps/web/src/features/channel/Bots/MintCredential.tsx
  technology: SolidJS
description: Channel message surface, calls, and create-channel modal.
---

`CreateChannelModal` is mounted by `AppChrome` for an authenticated member (`Layout.tsx:316`). `Root.tsx` mounts `CallProvider`, `CallKitSync`, `CallStartedNotifier`, and `FullScreenCallPrompt` from this feature's `Call` folder (`Root.tsx:14-17`, `Root.tsx:233-240`). External chat reuses channel input and message components but not channel queries (`external-chat/AGENTS.md`, opened). Alias `@channel` points here.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/channel/Bots/use-channel-bot-management.ts](../../../../../../apps/web/src/features/channel/Bots/use-channel-bot-management.ts) | [apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx](../../../../../../apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx) | Invokes supplied callback: openParticipants | typescript |
| [apps/web/src/features/channel/Call/call-events.ts](../../../../../../apps/web/src/features/channel/Call/call-events.ts) | [apps/web/src/features/block-call/sidebar/incoming-calls.ts](../../../../../../apps/web/src/features/block-call/sidebar/incoming-calls.ts) | Invokes supplied callback: onCallStarted | typescript |
| [apps/web/src/features/channel/Call/call-lifecycle.ts](../../../../../../apps/web/src/features/channel/Call/call-lifecycle.ts) | [apps/web/src/lib/queries/call/call.ts](../../../../../../apps/web/src/lib/queries/call/call.ts) | Invokes supplied callbacks: lookup, requestToken | typescript |
| [apps/web/src/features/channel/Call/meeting-invitation-events.ts](../../../../../../apps/web/src/features/channel/Call/meeting-invitation-events.ts) | [apps/web/src/features/meetings/incoming-meeting-invitations.tsx](../../../../../../apps/web/src/features/meetings/incoming-meeting-invitations.tsx) | Invokes supplied callbacks: onAnswered, onInvited | typescript |
| [apps/web/src/features/channel/channel-picture.ts](../../../../../../apps/web/src/features/channel/channel-picture.ts) | [apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx](../../../../../../apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx) | Invokes supplied callbacks: canEdit, channelId | typescript |
| [apps/web/src/features/channel/Channel/create-channel-message-actions.ts](../../../../../../apps/web/src/features/channel/Channel/create-channel-message-actions.ts) | [apps/web/src/lib/core/messages/MessageThread.tsx](../../../../../../apps/web/src/lib/core/messages/MessageThread.tsx) | Invokes supplied callbacks: buildLink, canModerate, canWrite, parent | typescript |
| [apps/web/src/features/channel/Channel/create-message-editor.ts](../../../../../../apps/web/src/features/channel/Channel/create-message-editor.ts) | [apps/web/src/lib/core/messages/MessageThread.tsx](../../../../../../apps/web/src/lib/core/messages/MessageThread.tsx) | Invokes supplied callbacks: onEditEnded, parent | typescript |
| [apps/web/src/features/channel/Input/create-collapsed-input-state.ts](../../../../../../apps/web/src/features/channel/Input/create-collapsed-input-state.ts) | [apps/web/src/lib/core/comments/discussion/DiscussionInput.tsx](../../../../../../apps/web/src/lib/core/comments/discussion/DiscussionInput.tsx) | Invokes supplied callback: attachFiles | typescript |
| [apps/web/src/features/channel/Input/create-input-state.ts](../../../../../../apps/web/src/features/channel/Input/create-input-state.ts) | [apps/web/src/features/sharing/native-share-sheet/NativeShareSheet.tsx](../../../../../../apps/web/src/features/sharing/native-share-sheet/NativeShareSheet.tsx) | Invokes supplied callback: clearInput | typescript |
| [apps/web/src/features/channel/Input/create-input-state.ts](../../../../../../apps/web/src/features/channel/Input/create-input-state.ts) | [apps/web/src/lib/core/messages/create-message-composer.ts](../../../../../../apps/web/src/lib/core/messages/create-message-composer.ts) | Invokes supplied callback: restoreEditor | typescript |
| [apps/web/src/features/channel/Input/create-typing-tracker.ts](../../../../../../apps/web/src/features/channel/Input/create-typing-tracker.ts) | [apps/web/src/lib/core/messages/create-message-composer.ts](../../../../../../apps/web/src/lib/core/messages/create-message-composer.ts) | Invokes supplied callbacks: onStartTyping, onStopTyping | typescript |
| [apps/web/src/features/channel/Input/upload-attachments.ts](../../../../../../apps/web/src/features/channel/Input/upload-attachments.ts) | [apps/web/src/features/agents-view/views/NewChatPage.tsx](../../../../../../apps/web/src/features/agents-view/views/NewChatPage.tsx) | Invokes supplied callback: uploadFile | typescript |
| [apps/web/src/features/channel/Input/upload-attachments.ts](../../../../../../apps/web/src/features/channel/Input/upload-attachments.ts) | [apps/web/src/features/block-agent/component/AgentComposer.tsx](../../../../../../apps/web/src/features/block-agent/component/AgentComposer.tsx) | Invokes supplied callback: uploadFile | typescript |
| [apps/web/src/features/channel/Input/upload-attachments.ts](../../../../../../apps/web/src/features/channel/Input/upload-attachments.ts) | [apps/web/src/features/sharing/native-share-sheet/NativeShareSheet.tsx](../../../../../../apps/web/src/features/sharing/native-share-sheet/NativeShareSheet.tsx) | Invokes supplied callback: uploadFile | typescript |
| [apps/web/src/features/channel/Input/upload-attachments.ts](../../../../../../apps/web/src/features/channel/Input/upload-attachments.ts) | [apps/web/src/lib/core/component/ForwardMessageComposer.tsx](../../../../../../apps/web/src/lib/core/component/ForwardMessageComposer.tsx) | Invokes supplied callback: uploadFile | typescript |
