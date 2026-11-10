---
type: C4 Component
title: Marketing page
status: stable
groma:
  id: desktopdownloads
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/desktopDownloads.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceCalendar.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmEnrichmentDemo.tsx
      symbol: CrmEnrichmentDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/channels/ChannelWorkSurface.tsx
      symbol: ChannelWorkSurface
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallStories.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageFounderLetter.tsx
      symbol: HomepageFounderLetter
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/AgentComposer.tsx
      symbol: AgentComposer
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallSession.tsx
      symbol: createCallSession
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/product/ProductPage.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageCrm.tsx
      symbol: HomepageCrm
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CompanyPipelineEntry.tsx
      symbol: CompanyPipelineEntry
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/ReviewChanges.tsx
      symbol: ReviewChanges
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/EmailShell.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/model-picker/ProviderIcon.tsx
      symbol: ModelIcon
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createCrmDemoWorkspace.ts
      symbol: createCrmDemoWorkspace
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageClosing.tsx
      symbol: HomepageClosing
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/PageVignette.tsx
      symbol: PageVignette
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/ComposerLayout.tsx
      symbol: Layout
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/animateGithubFlow.ts
      symbol: animateGithubFlow
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/DemoTags.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/comparisons/FeatureComparisons.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/model-picker/modelCatalog.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TasksWorkspace.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/sales/DemoBookingInline.tsx
      symbol: DemoBookingInline
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/SearchBar.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createWorkspaceDemo.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/EmailAvatar.tsx
      symbol: EmailAvatar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/FeaturePage.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/review-fixtures.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/deploy-agent-demo.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailSharingDemo.tsx
      symbol: EmailSharingDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailInboxDemo.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailComparison.tsx
      symbol: EmailComparison
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/proposalWorkspace.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/ActionButton.tsx
      symbol: InputActionButton
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/homepage/CrmPipelineScene.tsx
      symbol: CrmPipelineScene
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageWorkspaceCrm.tsx
      symbol: HomepageWorkspaceCrm
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmCaptureDemo.tsx
      symbol: CrmCaptureDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/githubProject.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallRecord.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailDemoSource.tsx
      symbol: EmailDemoSource
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/TaskNotebook.tsx
      symbol: TaskNotebook
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/NorthwindSession.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentProjectDemo.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailAgenticEditingDemo.tsx
      symbol: EmailAgenticEditingDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/workspace-home-feed.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/migration-comparisons.ts
      symbol: migrationComparisons
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageTrustBadges.tsx
      symbol: HomepageTrustBadges
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoCursor.tsx
      symbol: DemoCursor
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/AgentTranscript.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageConversation.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/workspace-demo.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/ReviewPrMention.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/demo-pointer.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageUnification.tsx
      symbol: HomepageUnification
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/createDemoPointer.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmComparison.tsx
      symbol: CrmComparison
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/EmailRows.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/animateOpenSource.ts
      symbol: animateOpenSource
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallChannel.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/TaskProperties.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/createTasksWorkspace.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceSidebar.tsx
      symbol: WorkspaceSidebar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentStories.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/crm-hero-data.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/EmailThread.tsx
      symbol: EmailThread
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentSharingDemo.tsx
      symbol: DocumentSharingDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TaskContextDemo.tsx
      symbol: TaskContextDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/animateHomepageCta.ts
      symbol: animateHomepageCta
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmFollowupDemo.tsx
      symbol: CrmFollowupDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/crm-demo.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceTasks.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/homepage-demo-content.ts
      symbol: homepageChatData
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceCompanies.tsx
      symbol: WorkspaceCompanies
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageFeatureDetails.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmFeatureIllustrations.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/workspace-parity-fixtures.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createProductWalkthrough.ts
      symbol: createProductWalkthrough
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/MessageRow.tsx
      symbol: MessageRow
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoMarkdown.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TaskStories.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageTestimonials.tsx
      symbol: HomepageTestimonials
    - scanner: typescript
      file: apps/marketing/src/features/marketing/views/ProductChannelsPage.tsx
      symbol: RouteChannels
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmRecordWorkspace.tsx
      symbol: CrmRecordWorkspace
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceHomeFeed.tsx
      symbol: WorkspaceHomeFeed
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoMention.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentMentionsDemo.tsx
      symbol: DocumentMentionsDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageFeatureHeading.tsx
      symbol: HomepageFeatureHeading
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceSpreadsheet.tsx
      symbol: WorkspaceSpreadsheet
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createEmailDemoGeneration.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/spreadsheet-demo-data.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/channels/ChannelStories.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageSpreadsheet.tsx
      symbol: HomepageSpreadsheet
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createEmailWalkthrough.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageSidebar.tsx
      symbol: HomepageSidebar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/dummy-workspace.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/MessageCard.tsx
      symbol: MessageCard
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoCompanyKanban.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/tasksWorkspaceData.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/animateDemoEntrance.ts
      symbol: animateDemoEntrance
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/NorthwindCollaboration.tsx
      symbol: NorthwindCollaboration
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoAgentChip.tsx
      symbol: DemoAgentChip
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceChannel.tsx
      symbol: WorkspaceChannel
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageMobileOpenSource.tsx
      symbol: HomepageMobileOpenSource
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/preloadHomepageDemo.ts
      symbol: preloadHomepageDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/views/ProductDocumentsPage.tsx
      symbol: RouteDocuments
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/LaunchConversation.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageEmailCompose.tsx
      symbol: HomepageEmailCompose
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TaskCreationFlow.tsx
      symbol: TaskCreationFlow
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/tutorial-videos.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/SpreadsheetRecordPreview.tsx
      symbol: SpreadsheetRecordPreview
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageAgentLogos.tsx
      symbol: HomepageAgentLogos
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceAgents.tsx
      symbol: WorkspaceAgents
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/product/ProductGraphics.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/sales-savings.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/GithubWorkflow.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/ChatSidebar.tsx
      symbol: ChatSidebar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageWorkspaceTasks.tsx
      symbol: HomepageWorkspaceTasks
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/AgentStories.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/ReviewStories.tsx
      symbol: ReviewInboxDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepagePullRequest.tsx
      symbol: HomepagePullRequest
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentShareSheet.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/documentScene.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createFrameEscape.ts
      symbol: createFrameEscape
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageTaskConversation.tsx
      symbol: HomepageTaskConversation
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoInteractionBoundary.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageMention.tsx
      symbol: HomepageMention
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentOrganizationDemo.tsx
      symbol: DocumentOrganizationDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/crm-followup-data.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageWorkspaceCalendar.tsx
      symbol: HomepageWorkspaceCalendar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/views/ProductReviewsPage.tsx
      symbol: RouteGithub
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/taskChannelHistory.ts
      symbol: taskChannelHistory
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/model-picker/ModelCatalogPicker.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoStageIcon.tsx
      symbol: CrmStageIcon
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/northwindScenario.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DeferredDemo.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/EmailReply.tsx
      symbol: EmailReply
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceEventDetails.tsx
      symbol: WorkspaceEventDetails
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TaskProjectView.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TasksWorkspaceControls.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoPrDocument.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/homepage-demo-people.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoViewSidebar.tsx
      symbol: ViewSidebar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/ReviewHome.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoNavGlyph.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/demo-email.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/product/ProductWorkspace.tsx
      symbol: ProductWorkspace
    - scanner: typescript
      file: apps/marketing/src/features/marketing/views/SalesPage.tsx
      symbol: RouteTour
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageAgentTrace.tsx
      symbol: HomepageAgentTrace
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/call-fixtures.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/call-project.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageDemoCarousel.tsx
      symbol: HomepageDemoCarousel
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageWorkspace.tsx
      symbol: HomepageWorkspace
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TasksWorkspaceSidebar.tsx
      symbol: TasksWorkspaceSidebar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/homepage-demo-scenes.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/AgentWorkflowStories.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/workspace-chat-fixtures.ts
      symbol: sampleWorkspaceChannels
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/SiteHeader.tsx
      symbol: SiteHeader
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageBlog.tsx
      symbol: HomepageBlog
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageSections.tsx
      symbol: HomepageSections
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/FolderComposerMockup.tsx
      symbol: FolderComposerMockup
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocMentionMenu.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/pricing-comparison.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/observeDemoTakeover.ts
      symbol: observeDemoTakeover
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createDemoPointer.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallsComparison.tsx
      symbol: CallsComparison
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TasksDemos.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/reviews/ReviewPullRequest.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/feature-comparisons.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageReassurance.tsx
      symbol: HomepageReassurance
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmRecordDemo.tsx
      symbol: CrmRecordDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/savings-calculator.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocumentFrame.tsx
      symbol: DocumentFrame
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/agentDemoData.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/email-demo-story.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/workspace-fixtures.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/views/ProductCallsPage.tsx
      symbol: RouteCalls
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageVersionHistory.tsx
      symbol: HomepageVersionHistory
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/TaskComposer.tsx
      symbol: TaskComposer
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/property-identifiers.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallTeamMemoryDemo.tsx
      symbol: CallTeamMemoryDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoMentionMenu.tsx
      symbol: DemoMentionMenu
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/TutorialVideoDialog.tsx
      symbol: TutorialVideoDialog
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/CompanyRecord.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceEmail.tsx
      symbol: WorkspaceEmail
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/workflowData.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/pricing/SavingsCalculator.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallOverlay.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/channels/channelProject.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/PropertyValueIcon.tsx
      symbol: PropertyValueIcon
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailDesktopDemo.tsx
      symbol: EmailDesktopDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/WorkspaceDocuments.tsx
      symbol: WorkspaceDocuments
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/agents/AgentSession.tsx
      symbol: AgentSession
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallFollowupAnswer.tsx
      symbol: CallFollowupAnswer
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoBookingDialog.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageGithub.tsx
      symbol: HomepageGithub
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoDeployDiff.tsx
      symbol: DemoDeployDiff
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageWorkspaceList.tsx
      symbol: HomepageWorkspaceList
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageScrollCue.tsx
      symbol: HomepageScrollCue
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/documentProject.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/demoTypingActions.ts
      symbol: demoTypingActions
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageOpenSource.tsx
      symbol: HomepageOpenSource
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/demo-mentions.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/calls/CallHero.tsx
      symbol: CallHeroDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/DummyWorkspace.tsx
      symbol: DummyWorkspace
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/taskProject.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/frozen/ChannelComposer.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepagePipelineDemo.tsx
      symbol: HomepagePipelineDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailAccountsDemo.tsx
      symbol: EmailAccountsDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoWorkspaceChrome.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/homepage/HomepageScene.tsx
      symbol: HomepageScene
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/WorkspaceDesktopDemo.tsx
      symbol: WorkspaceDesktopDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/DetailPanel.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageInteractiveDemo.tsx
      symbol: HomepageInteractiveDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/core/navigation.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/DemoAgentMessage.tsx
      symbol: AgentMessage
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/CreatePalette.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createDemoComposerLayout.ts
      symbol: createDemoComposerLayout
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/documents/DocMention.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/views/ProductAgentsPage.tsx
      symbol: RouteAgents
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TasksComparison.tsx
      symbol: TasksComparison
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/crm/CrmHeroSidebar.tsx
      symbol: CrmHeroSidebar
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/email-fixtures.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailKeyboardDemo.tsx
      symbol: EmailKeyboardDemo
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/TaskMention.tsx
      symbol: TaskMention
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/attachLandingBrake.ts
      symbol: attachLandingBrake
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/email/EmailFeatureGraphics.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/tasks/TasksFeatureGraphics.tsx
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/productPagePreview.ts
      symbol: isEmbeddedProductPage
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/HomepageCollaborativeDoc.tsx
      symbol: HomepageCollaborativeDoc
    - scanner: typescript
      file: apps/marketing/src/features/marketing/primitives/createDummyWorkspace.ts
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/sales/SalesCalculator.tsx
      symbol: SalesCalculator
    - scanner: typescript
      file: apps/marketing/src/features/marketing/components/workspace/frozen/SearchPalette.tsx
  technology: SolidJS
description: Public site page or component
---

Marketing source apps/marketing/src/features/marketing/core/desktopDownloads.ts.
