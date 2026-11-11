---
type: C4 Component
title: Namespace
status: stable
groma:
  id: agents-namespace
  parent: webhook
  code:
    - scanner: typescript
      file: packages/sdk/src/entities/agents/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/github-pull-requests/pull-request.ts
    - scanner: typescript
      file: packages/sdk/src/entities/forms/namespace.ts
      symbol: FormNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/crm/pipeline-entry.ts
    - scanner: typescript
      file: packages/sdk/src/entities/search/namespace.ts
      symbol: SearchNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/channels/access-request.ts
      symbol: ChannelAccessRequest
    - scanner: typescript
      file: packages/sdk/src/entities/databases/database.ts
    - scanner: typescript
      file: packages/sdk/src/entities/entity-mentions/namespace.ts
      symbol: EntityMentionNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/initiatives/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/tasks/task.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calls/call-record.ts
      symbol: CallRecord
    - scanner: typescript
      file: packages/sdk/src/entities/workspace/namespace.ts
      symbol: WorkspaceNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/me/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/properties/namespace.ts
      symbol: PropertiesNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/workspace/items.ts
    - scanner: typescript
      file: packages/sdk/src/entities/activity/entity.ts
      symbol: activityEntity
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/queued-action.ts
      symbol: QueuedAction
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/replacement.ts
      symbol: CalendarReplacement
    - scanner: typescript
      file: packages/sdk/src/entities/chats/namespace.ts
      symbol: ChatNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/foreign/foreign-entity.ts
      symbol: ForeignEntity
    - scanner: typescript
      file: packages/sdk/src/entities/connected-apps/connected-app.ts
    - scanner: typescript
      file: packages/sdk/src/entities/connected-apps/namespace.ts
      symbol: ConnectedAppNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/calls/connection.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calls/message.ts
      symbol: CallMessage
    - scanner: typescript
      file: packages/sdk/src/entities/external-chat/participant.ts
      symbol: ExternalChatParticipant
    - scanner: typescript
      file: packages/sdk/src/entities/account-managers/grant.ts
      symbol: AccountManagerGrant
    - scanner: typescript
      file: packages/sdk/src/entities/documents/system-skill.ts
      symbol: SystemSkill
    - scanner: typescript
      file: packages/sdk/src/entities/canvases/canvas.ts
    - scanner: typescript
      file: packages/sdk/src/entities/initiatives/initiative.ts
    - scanner: typescript
      file: packages/sdk/src/entities/external-chat/namespace.ts
      symbol: ExternalChatsNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/harnesses/harness.ts
      symbol: Harness
    - scanner: typescript
      file: packages/sdk/src/entities/foreign/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/tasks/namespace.ts
      symbol: TaskNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/email/label.ts
      symbol: Label
    - scanner: typescript
      file: packages/sdk/src/entities/entity.ts
    - scanner: typescript
      file: packages/sdk/src/entities/channels/namespace.ts
      symbol: ChannelNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/search/types.ts
    - scanner: typescript
      file: packages/sdk/src/entities/images/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/crm/contact.ts
      symbol: Contact
    - scanner: typescript
      file: packages/sdk/src/entities/email/message.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/view.ts
    - scanner: typescript
      file: packages/sdk/src/entities/channels/activity.ts
      symbol: ChannelActivity
    - scanner: typescript
      file: packages/sdk/src/entities/saved-views/saved-view.ts
    - scanner: typescript
      file: packages/sdk/src/entities/databases/query.ts
    - scanner: typescript
      file: packages/sdk/src/entities/connected-apps/connector.ts
    - scanner: typescript
      file: packages/sdk/src/entities/databases/view.ts
      symbol: DatabaseView
    - scanner: typescript
      file: packages/sdk/src/entities/databases/namespace.ts
      symbol: DatabaseNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/calendar.ts
      symbol: Calendar
    - scanner: typescript
      file: packages/sdk/src/entities/email/link.ts
      symbol: Link
    - scanner: typescript
      file: packages/sdk/src/entities/reference.ts
      symbol: EntityReference
    - scanner: typescript
      file: packages/sdk/src/entities/bots/bot.ts
    - scanner: typescript
      file: packages/sdk/src/entities/projects/namespace.ts
      symbol: ProjectNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/web/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/databases/saved-query.ts
    - scanner: typescript
      file: packages/sdk/src/entities/routines/routine.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/review.ts
    - scanner: typescript
      file: packages/sdk/src/entities/notifications/notification.ts
      symbol: Notification
    - scanner: typescript
      file: packages/sdk/src/entities/spreadsheets/spreadsheet.ts
    - scanner: typescript
      file: packages/sdk/src/entities/documents/markdown.ts
    - scanner: typescript
      file: packages/sdk/src/entities/documents/version.ts
      symbol: DocumentVersion
    - scanner: typescript
      file: packages/sdk/src/entities/databases/webhook.ts
      symbol: DatabaseWebhook
    - scanner: typescript
      file: packages/sdk/src/entities/referrals/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/documents/document.ts
    - scanner: typescript
      file: packages/sdk/src/entities/entity-mentions/mention.ts
      symbol: EntityMention
    - scanner: typescript
      file: packages/sdk/src/entities/routines/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calls/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/documents/text-comment.ts
    - scanner: typescript
      file: packages/sdk/src/entities/pins/namespace.ts
      symbol: PinsNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/email/thread.ts
    - scanner: typescript
      file: packages/sdk/src/entities/documents/office-files.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/origin.ts
    - scanner: typescript
      file: packages/sdk/src/entities/databases/row.ts
      symbol: DatabaseRow
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/namespace.ts
      symbol: AgentSessionNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/notifications/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/users/namespace.ts
      symbol: UserNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/webhooks/webhook.ts
      symbol: Webhook
    - scanner: typescript
      file: packages/sdk/src/entities/account-managers/namespace.ts
      symbol: AccountManagerNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/agents/agent.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/agent-session.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/conversation.ts
    - scanner: typescript
      file: packages/sdk/src/entities/chats/generation.ts
    - scanner: typescript
      file: packages/sdk/src/entities/api-keys/namespace.ts
      symbol: ApiKeyNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/workspace/types.ts
    - scanner: typescript
      file: packages/sdk/src/entities/harnesses/namespace.ts
      symbol: HarnessNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/documents/comment.ts
      symbol: Comment
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/event.ts
    - scanner: typescript
      file: packages/sdk/src/entities/whatsapp/namespace.ts
      symbol: WhatsAppNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/external-chat/upload.ts
      symbol: ExternalChatUpload
    - scanner: typescript
      file: packages/sdk/src/entities/users/user.ts
    - scanner: typescript
      file: packages/sdk/src/entities/favorites/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/booking-namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/api-keys/api-key.ts
      symbol: UserApiKey
    - scanner: typescript
      file: packages/sdk/src/entities/messages/discussion.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/booking-link.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calls/participant.ts
      symbol: CallParticipant
    - scanner: typescript
      file: packages/sdk/src/entities/email/draft.ts
    - scanner: typescript
      file: packages/sdk/src/entities/sharing/access.ts
    - scanner: typescript
      file: packages/sdk/src/entities/channels/post.ts
    - scanner: typescript
      file: packages/sdk/src/entities/external-chat/chat.ts
    - scanner: typescript
      file: packages/sdk/src/entities/sharing/permissions.ts
    - scanner: typescript
      file: packages/sdk/src/entities/external-chat/message.ts
      symbol: ExternalChatMessage
    - scanner: typescript
      file: packages/sdk/src/entities/databases/column.ts
      symbol: DatabaseColumn
    - scanner: typescript
      file: packages/sdk/src/entities/forms/section.ts
      symbol: FormSection
    - scanner: typescript
      file: packages/sdk/src/entities/activity/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/teams/namespace.ts
      symbol: TeamNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/projects/project.ts
      symbol: Project
    - scanner: typescript
      file: packages/sdk/src/entities/databases/table.ts
      symbol: DatabaseTable
    - scanner: typescript
      file: packages/sdk/src/entities/channels/picture.ts
      symbol: ChannelPicture
    - scanner: typescript
      file: packages/sdk/src/entities/images/image.ts
    - scanner: typescript
      file: packages/sdk/src/entities/email/attachment.ts
    - scanner: typescript
      file: packages/sdk/src/entities/crm/pipeline.ts
    - scanner: typescript
      file: packages/sdk/src/entities/forms/response.ts
      symbol: FormResponse
    - scanner: typescript
      file: packages/sdk/src/entities/crm/pipelines.ts
      symbol: PipelineNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/workspace/query.ts
    - scanner: typescript
      file: packages/sdk/src/entities/forms/form.ts
    - scanner: typescript
      file: packages/sdk/src/entities/unfurls/namespace.ts
      symbol: UnfurlNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/memory/namespace.ts
      symbol: MemoryNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/channels/labels.ts
      symbol: ChannelLabelsNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/saved-views/namespace.ts
      symbol: SavedViewsNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/forms/question.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/code-execution.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calls/errors.ts
    - scanner: typescript
      file: packages/sdk/src/entities/properties/property-definition.ts
      symbol: PropertyDefinition
    - scanner: typescript
      file: packages/sdk/src/entities/channels/channel.ts
    - scanner: typescript
      file: packages/sdk/src/entities/documents/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/whatsapp/account.ts
      symbol: WhatsAppAccount
    - scanner: typescript
      file: packages/sdk/src/entities/meetings/meeting.ts
      symbol: Meeting
    - scanner: typescript
      file: packages/sdk/src/entities/whatsapp/chat.ts
    - scanner: typescript
      file: packages/sdk/src/entities/calendar/booking.ts
      symbol: Booking
    - scanner: typescript
      file: packages/sdk/src/entities/crm/company.ts
      symbol: Company
    - scanner: typescript
      file: packages/sdk/src/entities/external-chat/send.ts
      symbol: ExternalChatSend
    - scanner: typescript
      file: packages/sdk/src/entities/documents/ai-edit.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/tool-approval.ts
      symbol: ToolApproval
    - scanner: typescript
      file: packages/sdk/src/entities/email/namespace.ts
    - scanner: typescript
      file: packages/sdk/src/entities/channels/message.ts
    - scanner: typescript
      file: packages/sdk/src/entities/meetings/namespace.ts
      symbol: MeetingNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/properties/property-option.ts
      symbol: PropertyOption
    - scanner: typescript
      file: packages/sdk/src/entities/harnesses/pairing.ts
    - scanner: typescript
      file: packages/sdk/src/entities/bots/token.ts
      symbol: BotToken
    - scanner: typescript
      file: packages/sdk/src/entities/github-pull-requests/namespace.ts
      symbol: GithubPullRequestNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/email/filter.ts
    - scanner: typescript
      file: packages/sdk/src/entities/search/options.ts
    - scanner: typescript
      file: packages/sdk/src/entities/bots/namespace.ts
      symbol: BotsNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/ai/namespace.ts
      symbol: AiNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/messages/thread.ts
    - scanner: typescript
      file: packages/sdk/src/entities/agent-sessions/activity.ts
    - scanner: typescript
      file: packages/sdk/src/entities/teams/invite.ts
      symbol: TeamInvite
    - scanner: typescript
      file: packages/sdk/src/entities/chats/chat.ts
      symbol: Chat
    - scanner: typescript
      file: packages/sdk/src/entities/teams/team.ts
    - scanner: typescript
      file: packages/sdk/src/entities/channels/thread.ts
      symbol: Thread
    - scanner: typescript
      file: packages/sdk/src/entities/crm/namespace.ts
      symbol: CrmNamespace
    - scanner: typescript
      file: packages/sdk/src/entities/documents/anchor.ts
      symbol: DocumentAnchor
    - scanner: typescript
      file: packages/sdk/src/entities/webhooks/namespace.ts
      symbol: WebhooksNamespace
  technology: TypeScript
description: Shared package sdk
---

A coding agent the caller can start a session as right now: a built-in persona such as Cursor once its runtime is connected, or one of their configured coding agents whose runtime is reachable.
