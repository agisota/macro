---
type: C4 Component
title: Email client
status: stable
groma:
  id: apidraftoutputbodytext
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputBodyText.ts
      symbol: ApiDraftOutputBodyText
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/scheduling.ts
      symbol: schedulingClient
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadList.ts
      symbol: ThreadList
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiPaginatedThreadCursor.ts
      symbol: ApiPaginatedThreadCursor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerSenderName.ts
      symbol: ApiThreadPreviewCursorInnerSenderName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputDbId.ts
      symbol: ApiDraftOutputDbId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationDescription.ts
      symbol: CalendarInvitationDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/createLabelResponse.ts
      symbol: CreateLabelResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftContactInfo.ts
      symbol: ApiDraftContactInfo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfNineEvent.ts
      symbol: RefreshEmailEventOneOfNineEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputBcc.ts
      symbol: ApiDraftInputBcc
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventCreatorName.ts
      symbol: CalendarEventCreatorName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageListVisibility.ts
      symbol: MessageListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentForwarded.ts
      symbol: AttachmentForwarded
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/previewViewStandardLabel.ts
      symbol: PreviewViewStandardLabel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageProviderThreadId.ts
      symbol: MessageProviderThreadId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertScheduledMessageParams.ts
      symbol: UpsertScheduledMessageParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageOperationResponseOperation.ts
      symbol: MessageOperationResponseOperation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventReminderOverride.ts
      symbol: EventReminderOverride
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listEmailFiltersResponse.ts
      symbol: ListEmailFiltersResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getThreadMessagesHandlerParams.ts
      symbol: GetThreadMessagesHandlerParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageSentAt.ts
      symbol: MessageSentAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageBodyMacro.ts
      symbol: ApiMessageBodyMacro
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxSettingsOperation.ts
      symbol: MailboxSettingsOperation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfSeven.ts
      symbol: InvitationResolutionOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOneoneEvent.ts
      symbol: RefreshEmailEventOneOfOneoneEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentContentId.ts
      symbol: ApiAttachmentContentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageFrom.ts
      symbol: ApiMessageFrom
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventSourceContentLocation.ts
      symbol: CalendarEventSourceContentLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageSentAt.ts
      symbol: ApiMessageSentAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/settingsReadReceiptsEnabled.ts
      symbol: SettingsReadReceiptsEnabled
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputThreadDbId.ts
      symbol: ApiDraftOutputThreadDbId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTime.ts
      symbol: EventTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/archiveThreadsRequest.ts
      symbol: ArchiveThreadsRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContactEmailAddress.ts
      symbol: ApiContactEmailAddress
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfThreeKind.ts
      symbol: MailboxActionOneOfThreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorAllOfFrecencyScore.ts
      symbol: ApiThreadPreviewCursorAllOfFrecencyScore
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/parsedMessageFrom.ts
      symbol: ParsedMessageFrom
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/unblockSenderRequest.ts
      symbol: UnblockSenderRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelType.ts
      symbol: LabelType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactOriginalPhotoUrl.ts
      symbol: ContactOriginalPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfOneoneValue.ts
      symbol: MailboxActionOneOfOneoneValue
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationLocation.ts
      symbol: CalendarInvitationLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageOperationResponse.ts
      symbol: MessageOperationResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageProviderThreadId.ts
      symbol: ApiMessageProviderThreadId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventRecipientName.ts
      symbol: ForwardCalendarEventRecipientName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationConferenceUrl.ts
      symbol: CalendarInvitationConferenceUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOf.ts
      symbol: InvitationDateTimeOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageSubject.ts
      symbol: MessageSubject
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentSizeBytes.ts
      symbol: ApiMessageAttachmentSizeBytes
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentDraftContentId.ts
      symbol: AttachmentDraftContentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOnefive.ts
      symbol: RefreshEmailEventOneOfOnefive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarAttendee.ts
      symbol: CalendarAttendee
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageGlobalId.ts
      symbol: ApiMessageGlobalId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageResolutionAction.ts
      symbol: ApiMessageResolutionAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationParticipantName.ts
      symbol: InvitationParticipantName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertScheduledRequestUserConfirmation.ts
      symbol: UpsertScheduledRequestUserConfirmation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertScheduledRequest.ts
      symbol: UpsertScheduledRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventErrorCode.ts
      symbol: ForwardCalendarEventErrorCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiLabelListVisibility.ts
      symbol: ApiLabelListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxSettingsChange.ts
      symbol: MailboxSettingsChange
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/initResponse.ts
      symbol: InitResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageFrom.ts
      symbol: MessageFrom
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/deleteDraftParams.ts
      symbol: DeleteDraftParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentFilename.ts
      symbol: ApiMessageAttachmentFilename
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationRecurrence.ts
      symbol: CalendarInvitationRecurrence
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadStateRequest.ts
      symbol: UpdateThreadStateRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/userProvider.ts
      symbol: UserProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/initErrorCodeResponse.ts
      symbol: InitErrorCodeResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/parsedMessageSubject.ts
      symbol: ParsedMessageSubject
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOfFive.ts
      symbol: InvitationDateTimeOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listBackfillJobsResponse.ts
      symbol: ListBackfillJobsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageReadReceiptLastOpenedAt.ts
      symbol: MessageReadReceiptLastOpenedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addForwardedAttachmentResponseMimeType.ts
      symbol: AddForwardedAttachmentResponseMimeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationStart.ts
      symbol: CalendarInvitationStart
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContact.ts
      symbol: ApiContact
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfSevenKind.ts
      symbol: InvitationResolutionOneOfSevenKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachment.ts
      symbol: Attachment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageSnippet.ts
      symbol: MessageSnippet
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoName.ts
      symbol: ContactInfoName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContactInfoPhotoUrl.ts
      symbol: ApiContactInfoPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addForwardedAttachmentResponseSizeBytes.ts
      symbol: AddForwardedAttachmentResponseSizeBytes
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputDbId.ts
      symbol: ApiDraftInputDbId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/patchSettingsResponse.ts
      symbol: PatchSettingsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorProviderId.ts
      symbol: ThreadPreviewCursorProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/conferenceProvider.ts
      symbol: ConferenceProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoWithInteraction.ts
      symbol: ContactInfoWithInteraction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getBackfillJobResponse.ts
      symbol: GetBackfillJobResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageOperationRemoteVersion.ts
      symbol: ApiMessageOperationRemoteVersion
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTimeOneOfFourKind.ts
      symbol: EventTimeOneOfFourKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageLabelId.ts
      symbol: ApiMessageLabelId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/blockSenderRequest.ts
      symbol: BlockSenderRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadProviderId.ts
      symbol: ApiThreadProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/createDraftRequest.ts
      symbol: CreateDraftRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerSenderPhotoUrl.ts
      symbol: ApiThreadPreviewCursorInnerSenderPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertEmailFilterRequestEmailDomain.ts
      symbol: UpsertEmailFilterRequestEmailDomain
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listContactsResponseContacts.ts
      symbol: ListContactsResponseContacts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageLabelName.ts
      symbol: ApiMessageLabelName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentFilename.ts
      symbol: AttachmentFilename
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentForwardedProviderAttachmentId.ts
      symbol: ApiAttachmentForwardedProviderAttachmentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getThreadResponse.ts
      symbol: GetThreadResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentMimeType.ts
      symbol: ApiAttachmentMimeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoWithInteractionAllOf.ts
      symbol: ContactInfoWithInteractionAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/unresolvedSignatureImagesError.ts
      symbol: UnresolvedSignatureImagesError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/resyncResponse.ts
      symbol: ResyncResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOf.ts
      symbol: InvitationResolutionOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageInternalDateTs.ts
      symbol: ApiMessageInternalDateTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/removeDraftAttachmentParams.ts
      symbol: RemoveDraftAttachmentParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelTypeProperty.ts
      symbol: LabelTypeProperty
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageProviderId.ts
      symbol: MessageProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentSizeBytes.ts
      symbol: AttachmentSizeBytes
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOf.ts
      symbol: RefreshEmailEventOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentDraftContentId.ts
      symbol: ApiAttachmentDraftContentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOnefiveEvent.ts
      symbol: RefreshEmailEventOneOfOnefiveEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadProjectResponseOldProjectId.ts
      symbol: UpdateThreadProjectResponseOldProjectId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/emlFile.ts
      symbol: EmlFile
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertScheduledRequestIncludeSignature.ts
      symbol: UpsertScheduledRequestIncludeSignature
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputProviderThreadId.ts
      symbol: ApiDraftInputProviderThreadId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputHeadersJson.ts
      symbol: ApiDraftInputHeadersJson
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputBcc.ts
      symbol: ApiDraftOutputBcc
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContactSfsPhotoUrl.ts
      symbol: ApiContactSfsPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentDataUrl.ts
      symbol: AttachmentDataUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutput.ts
      symbol: ApiDraftOutput
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventConferenceUrl.ts
      symbol: CalendarEventConferenceUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadListNextPageToken.ts
      symbol: ThreadListNextPageToken
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationParticipantParticipationStatus.ts
      symbol: InvitationParticipantParticipationStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageSizeEstimate.ts
      symbol: ApiMessageSizeEstimate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getAttachmentDocumentIDResponse.ts
      symbol: GetAttachmentDocumentIDResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentSfsId.ts
      symbol: ApiMessageAttachmentSfsId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelMessageListVisibility.ts
      symbol: LabelMessageListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/backfillStatus.ts
      symbol: BackfillStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageSnippet.ts
      symbol: ApiMessageSnippet
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentDraft.ts
      symbol: AttachmentDraft
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageBodyReplyless.ts
      symbol: ApiMessageBodyReplyless
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventCreatorEmail.ts
      symbol: CalendarEventCreatorEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfEvent.ts
      symbol: RefreshEmailEventOneOfEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationOrganizer.ts
      symbol: CalendarInvitationOrganizer
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputBodyText.ts
      symbol: ApiDraftInputBodyText
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventDescription.ts
      symbol: CalendarEventDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiLabel.ts
      symbol: ApiLabel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxAction.ts
      symbol: MailboxAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadLatestInboundMessageTs.ts
      symbol: ApiThreadLatestInboundMessageTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addDraftAttachmentRequestUploadId.ts
      symbol: AddDraftAttachmentRequestUploadId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationDtstamp.ts
      symbol: CalendarInvitationDtstamp
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachment.ts
      symbol: ApiAttachment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentSfsId.ts
      symbol: AttachmentSfsId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/emptyResponse.ts
      symbol: EmptyResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxOperation.ts
      symbol: MailboxOperation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageBodyText.ts
      symbol: ApiMessageBodyText
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerViewedAt.ts
      symbol: ApiThreadPreviewCursorInnerViewedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageProviderId.ts
      symbol: ApiMessageProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoLegacyPhotoUrl.ts
      symbol: ContactInfoLegacyPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addDraftAttachmentParams.ts
      symbol: AddDraftAttachmentParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentReferenceUrl.ts
      symbol: ApiMessageAttachmentReferenceUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputTo.ts
      symbol: ApiDraftInputTo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfThreeKind.ts
      symbol: InvitationResolutionOneOfThreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOfKind.ts
      symbol: InvitationDateTimeOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiSortMethod.ts
      symbol: ApiSortMethod
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageOperationState.ts
      symbol: ApiMessageOperationState
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/copyCalendarEventRequest.ts
      symbol: CopyCalendarEventRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/removeForwardedAttachmentParams.ts
      symbol: RemoveForwardedAttachmentParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTransparency.ts
      symbol: EventTransparency
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageLabelMessageListVisibility.ts
      symbol: ApiMessageLabelMessageListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfFive.ts
      symbol: RefreshEmailEventOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addForwardedAttachmentParams.ts
      symbol: AddForwardedAttachmentParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactName.ts
      symbol: ContactName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadProjectId.ts
      symbol: ApiThreadProjectId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfNineKind.ts
      symbol: InvitationResolutionOneOfNineKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageOperation.ts
      symbol: ApiMessageOperation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/accessLevel.ts
      symbol: AccessLevel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageReplyingToId.ts
      symbol: MessageReplyingToId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/createLabelRequest.ts
      symbol: CreateLabelRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventStatus.ts
      symbol: EventStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listLabelsResponse.ts
      symbol: ListLabelsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageHeadersJson.ts
      symbol: MessageHeadersJson
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageBodyHtmlSanitized.ts
      symbol: MessageBodyHtmlSanitized
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfSevenEvent.ts
      symbol: RefreshEmailEventOneOfSevenEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageScheduledSendTime.ts
      symbol: ApiMessageScheduledSendTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertEmailFilterRequest.ts
      symbol: UpsertEmailFilterRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/patchSettingsRequest.ts
      symbol: PatchSettingsRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfo.ts
      symbol: ContactInfo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarOccurrence.ts
      symbol: CalendarOccurrence
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventCalendarId.ts
      symbol: CalendarEventCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listContactsResponse.ts
      symbol: ListContactsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputCc.ts
      symbol: ApiDraftOutputCc
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageProviderHistoryId.ts
      symbol: MessageProviderHistoryId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/backfillJob.ts
      symbol: BackfillJob
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContactName.ts
      symbol: ApiContactName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateLabelBatchRequest.ts
      symbol: UpdateLabelBatchRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageOperationStatus.ts
      symbol: ApiMessageOperationStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfThree.ts
      symbol: RefreshEmailEventOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/linkPhotoUrl.ts
      symbol: LinkPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/resolveMessageOperationRequest.ts
      symbol: ResolveMessageOperationRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentForwardedMimeType.ts
      symbol: ApiAttachmentForwardedMimeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/viewerCapabilities.ts
      symbol: ViewerCapabilities
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOnefiveTraceparent.ts
      symbol: RefreshEmailEventOneOfOnefiveTraceparent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/backfillJobStatus.ts
      symbol: BackfillJobStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/value.ts
      symbol: Value
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventType.ts
      symbol: EventType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputProviderId.ts
      symbol: ApiDraftOutputProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getThreadCalendarInvitations200.ts
      symbol: GetThreadCalendarInvitations200
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContactInfo.ts
      symbol: ApiContactInfo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/settings.ts
      symbol: Settings
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/transferDraftRequest.ts
      symbol: TransferDraftRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentForwardedSizeBytes.ts
      symbol: AttachmentForwardedSizeBytes
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiEmailFilterEmailDomain.ts
      symbol: ApiEmailFilterEmailDomain
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputBodyMacro.ts
      symbol: ApiDraftInputBodyMacro
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfThreeEvent.ts
      symbol: RefreshEmailEventOneOfThreeEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/initUserParams.ts
      symbol: InitUserParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentProviderId.ts
      symbol: ApiMessageAttachmentProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfSevenKind.ts
      symbol: MailboxActionOneOfSevenKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfFiveEvent.ts
      symbol: RefreshEmailEventOneOfFiveEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerSenderEmail.ts
      symbol: ApiThreadPreviewCursorInnerSenderEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageSubject.ts
      symbol: ApiMessageSubject
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationComment.ts
      symbol: CalendarInvitationComment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getScheduledMessagesParams.ts
      symbol: GetScheduledMessagesParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfSeven.ts
      symbol: MailboxActionOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfNine.ts
      symbol: RefreshEmailEventOneOfNine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertScheduledResponse.ts
      symbol: UpsertScheduledResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarMutationApiError.ts
      symbol: CalendarMutationApiError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfFiveKind.ts
      symbol: InvitationResolutionOneOfFiveKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/transferRecoveryResponse.ts
      symbol: TransferRecoveryResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageOperationIssue.ts
      symbol: ApiMessageOperationIssue
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOneone.ts
      symbol: RefreshEmailEventOneOfOneone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEvent.ts
      symbol: RefreshEmailEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorSenderEmail.ts
      symbol: ThreadPreviewCursorSenderEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadLatestNonSpamMessageTs.ts
      symbol: ApiThreadLatestNonSpamMessageTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getScheduledResponse.ts
      symbol: GetScheduledResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentForwardedFilename.ts
      symbol: AttachmentForwardedFilename
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageReadReceipt.ts
      symbol: MessageReadReceipt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorAllOf.ts
      symbol: ApiThreadPreviewCursorAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateLabelBatchResponse.ts
      symbol: UpdateLabelBatchResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageProviderHistoryId.ts
      symbol: ApiMessageProviderHistoryId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadProjectRequestProjectId.ts
      symbol: UpdateThreadProjectRequestProjectId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursor.ts
      symbol: ThreadPreviewCursor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationStatus.ts
      symbol: CalendarInvitationStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/previewView.ts
      symbol: PreviewView
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageBodyHtmlSanitized.ts
      symbol: ApiMessageBodyHtmlSanitized
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addForwardedAttachmentResponse.ts
      symbol: AddForwardedAttachmentResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/syncStatus.ts
      symbol: SyncStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageScheduledSendTime.ts
      symbol: MessageScheduledSendTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadLatestInboundMessageTs.ts
      symbol: ThreadLatestInboundMessageTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolution.ts
      symbol: InvitationResolution
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarOccurrenceRecurrenceId.ts
      symbol: CalendarOccurrenceRecurrenceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelLabelListVisibility.ts
      symbol: LabelLabelListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfOneoneKind.ts
      symbol: InvitationResolutionOneOfOneoneKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInput.ts
      symbol: ApiDraftInput
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfKind.ts
      symbol: MailboxActionOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/deleteScheduledDraftParams.ts
      symbol: DeleteScheduledDraftParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTimeOneOfFour.ts
      symbol: EventTimeOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOnethreeEvent.ts
      symbol: RefreshEmailEventOneOfOnethreeEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfOnethree.ts
      symbol: InvitationResolutionOneOfOnethree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/errorResponse.ts
      symbol: ErrorResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentContentId.ts
      symbol: ApiMessageAttachmentContentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/transferRecoveryResponseCommitted.ts
      symbol: TransferRecoveryResponseCommitted
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addForwardedAttachmentResponseFilename.ts
      symbol: AddForwardedAttachmentResponseFilename
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/link.ts
      symbol: Link
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationMethod.ts
      symbol: InvitationMethod
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentMimeType.ts
      symbol: ApiMessageAttachmentMimeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getThreadParams.ts
      symbol: GetThreadParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/completeDraftAttachmentParams.ts
      symbol: CompleteDraftAttachmentParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentSizeBytes.ts
      symbol: ApiAttachmentSizeBytes
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftContactInfoName.ts
      symbol: ApiDraftContactInfoName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertEmailFilterResponse.ts
      symbol: UpsertEmailFilterResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadLatestOutboundMessageTs.ts
      symbol: ApiThreadLatestOutboundMessageTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contact.ts
      symbol: Contact
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfOneone.ts
      symbol: InvitationResolutionOneOfOneone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationEnd.ts
      symbol: CalendarInvitationEnd
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadLatestOutboundMessageTs.ts
      symbol: ThreadLatestOutboundMessageTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarMutationErrorCode.ts
      symbol: CalendarMutationErrorCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfNine.ts
      symbol: InvitationResolutionOneOfNine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attendeeResponseStatus.ts
      symbol: AttendeeResponseStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiEmailFilterEmailAddress.ts
      symbol: ApiEmailFilterEmailAddress
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfThree.ts
      symbol: InvitationResolutionOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageLabel.ts
      symbol: ApiMessageLabel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitation.ts
      symbol: CalendarInvitation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/scheduledSendStatus.ts
      symbol: ScheduledSendStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventOrganizerName.ts
      symbol: CalendarEventOrganizerName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactSfsPhotoUrl.ts
      symbol: ContactSfsPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getPreviewsCursorParamsSortMethod.ts
      symbol: GetPreviewsCursorParamsSortMethod
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentDraft.ts
      symbol: ApiAttachmentDraft
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelListVisibility.ts
      symbol: LabelListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/cancelBackfillParams.ts
      symbol: CancelBackfillParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventRequest.ts
      symbol: ForwardCalendarEventRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addDraftAttachmentRequest.ts
      symbol: AddDraftAttachmentRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/backfillJobLinkId.ts
      symbol: BackfillJobLinkId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageLabelType.ts
      symbol: ApiMessageLabelType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOfThree.ts
      symbol: InvitationDateTimeOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentFilename.ts
      symbol: ApiAttachmentFilename
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputProviderId.ts
      symbol: ApiDraftInputProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThread.ts
      symbol: ApiThread
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInner.ts
      symbol: ApiThreadPreviewCursorInner
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/label.ts
      symbol: Label
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentMimeType.ts
      symbol: AttachmentMimeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoPhotoUrl.ts
      symbol: ContactInfoPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageBodyText.ts
      symbol: MessageBodyText
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/copyCalendarEventRequestCalendarId.ts
      symbol: CopyCalendarEventRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputSendTime.ts
      symbol: ApiDraftOutputSendTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/createDraftResponse.ts
      symbol: CreateDraftResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentContentId.ts
      symbol: AttachmentContentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/parsedMessageBodyParsed.ts
      symbol: ParsedMessageBodyParsed
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventOrganizerEmail.ts
      symbol: CalendarEventOrganizerEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOfThreeKind.ts
      symbol: InvitationDateTimeOneOfThreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventSourceContentCreatorName.ts
      symbol: CalendarEventSourceContentCreatorName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactEmailAddress.ts
      symbol: ContactEmailAddress
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentForwardedSizeBytes.ts
      symbol: ApiAttachmentForwardedSizeBytes
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarAttendeeComment.ts
      symbol: CalendarAttendeeComment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationTitle.ts
      symbol: CalendarInvitationTitle
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfFive.ts
      symbol: InvitationResolutionOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfOnethreeKind.ts
      symbol: InvitationResolutionOneOfOnethreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadProjectRequest.ts
      symbol: UpdateThreadProjectRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/parsedMessageInternalDateTs.ts
      symbol: ParsedMessageInternalDateTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/sendMessageRequest.ts
      symbol: SendMessageRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/guestPolicy.ts
      symbol: GuestPolicy
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageReadReceiptFirstOpenedAt.ts
      symbol: MessageReadReceiptFirstOpenedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventRecipient.ts
      symbol: ForwardCalendarEventRecipient
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getActiveBackfillJobResponse.ts
      symbol: GetActiveBackfillJobResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelId.ts
      symbol: LabelId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiPaginatedThreadCursorNextCursor.ts
      symbol: ApiPaginatedThreadCursorNextCursor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfOneone.ts
      symbol: MailboxActionOneOfOneone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventRequestBodyText.ts
      symbol: ForwardCalendarEventRequestBodyText
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOfFiveKind.ts
      symbol: InvitationDateTimeOneOfFiveKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getPreviewsCursorParamsLimit.ts
      symbol: GetPreviewsCursorParamsLimit
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadReadReceipts.ts
      symbol: ThreadReadReceipts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputReplyingToId.ts
      symbol: ApiDraftInputReplyingToId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventReminders.ts
      symbol: EventReminders
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessage.ts
      symbol: ApiMessage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfOnethree.ts
      symbol: RefreshEmailEventOneOfOnethree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTimeOneOfFiveTimeZone.ts
      symbol: InvitationDateTimeOneOfFiveTimeZone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputBodyHtml.ts
      symbol: ApiDraftInputBodyHtml
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadLabelRequest.ts
      symbol: UpdateThreadLabelRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addDraftAttachmentResponse.ts
      symbol: AddDraftAttachmentResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelInfo.ts
      symbol: LabelInfo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageScheduledSendStatus.ts
      symbol: ApiMessageScheduledSendStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventSourceContentCreatorEmail.ts
      symbol: CalendarEventSourceContentCreatorEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxOperationState.ts
      symbol: MailboxOperationState
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfOneoneKind.ts
      symbol: MailboxActionOneOfOneoneKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentForwarded.ts
      symbol: ApiAttachmentForwarded
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/addForwardedAttachmentRequest.ts
      symbol: AddForwardedAttachmentRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventVisibility.ts
      symbol: EventVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/backfillJobThreadsRequestedLimit.ts
      symbol: BackfillJobThreadsRequestedLimit
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/transferDraftResponse.ts
      symbol: TransferDraftResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getPreviewsCursorParams.ts
      symbol: GetPreviewsCursorParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadLatestNonSpamMessageTs.ts
      symbol: ThreadLatestNonSpamMessageTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/labelName.ts
      symbol: LabelName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoLegacy.ts
      symbol: ContactInfoLegacy
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentReferenceUrl.ts
      symbol: AttachmentReferenceUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadSummary.ts
      symbol: ThreadSummary
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputIncludeSignature.ts
      symbol: ApiDraftInputIncludeSignature
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationLastModified.ts
      symbol: CalendarInvitationLastModified
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventConferenceProvider.ts
      symbol: CalendarEventConferenceProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachment.ts
      symbol: ApiMessageAttachment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadLabelsResponse.ts
      symbol: UpdateThreadLabelsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentForwardedProviderAttachmentId.ts
      symbol: AttachmentForwardedProviderAttachmentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadStateField.ts
      symbol: ThreadStateField
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/message.ts
      symbol: Message
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/initResponseBackfillJobId.ts
      symbol: InitResponseBackfillJobId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/sendMessageResponse.ts
      symbol: SendMessageResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputBodyMacro.ts
      symbol: ApiDraftOutputBodyMacro
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputHeadersJson.ts
      symbol: ApiDraftOutputHeadersJson
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentForwardedFilename.ts
      symbol: ApiAttachmentForwardedFilename
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiLabelType.ts
      symbol: ApiLabelType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listLinksResponse.ts
      symbol: ListLinksResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursor.ts
      symbol: ApiThreadPreviewCursor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/previewsInboxCursorParams.ts
      symbol: PreviewsInboxCursorParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/archiveThreadRequest.ts
      symbol: ArchiveThreadRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfNineKind.ts
      symbol: MailboxActionOneOfNineKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationParticipant.ts
      symbol: InvitationParticipant
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageAttachmentDataUrl.ts
      symbol: ApiMessageAttachmentDataUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/contactInfoLegacyName.ts
      symbol: ContactInfoLegacyName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationResolutionOneOfKind.ts
      symbol: InvitationResolutionOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTimeOneOfKind.ts
      symbol: EventTimeOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/listBlockedResponse.ts
      symbol: ListBlockedResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOf.ts
      symbol: MailboxActionOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationRecurrenceIdRaw.ts
      symbol: CalendarInvitationRecurrenceIdRaw
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentForwardedMimeType.ts
      symbol: AttachmentForwardedMimeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputCc.ts
      symbol: ApiDraftInputCc
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiAttachmentProviderAttachmentId.ts
      symbol: ApiAttachmentProviderAttachmentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerName.ts
      symbol: ApiThreadPreviewCursorInnerName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageListVisibility.ts
      symbol: ApiMessageListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputTo.ts
      symbol: ApiDraftOutputTo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadProviderId.ts
      symbol: ThreadProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEvent.ts
      symbol: CalendarEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventSourceContent.ts
      symbol: CalendarEventSourceContent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorName.ts
      symbol: ThreadPreviewCursorName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/archiveThreadsResponse.ts
      symbol: ArchiveThreadsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventResponse.ts
      symbol: ForwardCalendarEventResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/createDraftRequestSendTime.ts
      symbol: CreateDraftRequestSendTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfNine.ts
      symbol: MailboxActionOneOfNine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorSenderName.ts
      symbol: ThreadPreviewCursorSenderName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/parsedMessage.ts
      symbol: ParsedMessage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/refreshEmailEventOneOfSeven.ts
      symbol: RefreshEmailEventOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/sharedInboxConflictResponse.ts
      symbol: SharedInboxConflictResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfFiveKind.ts
      symbol: MailboxActionOneOfFiveKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftInputThreadDbId.ts
      symbol: ApiDraftInputThreadDbId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/forwardCalendarEventError.ts
      symbol: ForwardCalendarEventError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageBodyMacro.ts
      symbol: MessageBodyMacro
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/attachmentProviderId.ts
      symbol: AttachmentProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageReplyingToId.ts
      symbol: ApiMessageReplyingToId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarAttendeeDisplayName.ts
      symbol: CalendarAttendeeDisplayName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventSourceContentDescription.ts
      symbol: CalendarEventSourceContentDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageInternalDateTs.ts
      symbol: MessageInternalDateTs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarEventLocation.ts
      symbol: CalendarEventLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/settingsSignatureOnRepliesForwards.ts
      symbol: SettingsSignatureOnRepliesForwards
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiEmailFilter.ts
      symbol: ApiEmailFilter
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputReplyingToId.ts
      symbol: ApiDraftOutputReplyingToId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/resolveMessageOperationRequestRemoteVersion.ts
      symbol: ResolveMessageOperationRequestRemoteVersion
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/invitationDateTime.ts
      symbol: InvitationDateTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/upsertEmailFilterRequestEmailAddress.ts
      symbol: UpsertEmailFilterRequestEmailAddress
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageSizeEstimate.ts
      symbol: MessageSizeEstimate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/messageGlobalId.ts
      symbol: MessageGlobalId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputBodyHtml.ts
      symbol: ApiDraftOutputBodyHtml
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerProviderId.ts
      symbol: ApiThreadPreviewCursorInnerProviderId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfThree.ts
      symbol: MailboxActionOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiThreadPreviewCursorInnerSnippet.ts
      symbol: ApiThreadPreviewCursorInnerSnippet
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorSnippet.ts
      symbol: ThreadPreviewCursorSnippet
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTimeOneOfTimeZone.ts
      symbol: EventTimeOneOfTimeZone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorSenderPhotoUrl.ts
      symbol: ThreadPreviewCursorSenderPhotoUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/calendarInvitationRecurrenceId.ts
      symbol: CalendarInvitationRecurrenceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageOperationIssueProperty.ts
      symbol: ApiMessageOperationIssueProperty
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/threadPreviewCursorViewedAt.ts
      symbol: ThreadPreviewCursorViewedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/getAttachmentResponse.ts
      symbol: GetAttachmentResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/mailboxActionOneOfFive.ts
      symbol: MailboxActionOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/updateThreadProjectResponse.ts
      symbol: UpdateThreadProjectResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftOutputProviderThreadId.ts
      symbol: ApiDraftOutputProviderThreadId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/eventTimeOneOf.ts
      symbol: EventTimeOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/thread.ts
      symbol: Thread
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/settingsSignature.ts
      symbol: SettingsSignature
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiContactInfoName.ts
      symbol: ApiContactInfoName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiMessageLabelLabelListVisibility.ts
      symbol: ApiMessageLabelLabelListVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/generated/schemas/apiDraftContactInfoPhotoUrl.ts
      symbol: ApiDraftContactInfoPhotoUrl
  technology: TypeScript
  group: Service clients
description: Mailbox client for the Macro email host
---

Lists threads, drafts, and sends mail through the email service. Gmail backfill status is a Macro route, not a Gmail API call.
