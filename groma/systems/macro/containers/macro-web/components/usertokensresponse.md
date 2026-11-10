---
type: C4 Component
title: Auth client
status: stable
groma:
  id: usertokensresponse
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userTokensResponse.ts
      symbol: UserTokensResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/usageSnapshotCreditPurchase.ts
      symbol: UsageSnapshotCreditPurchase
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/language.ts
      symbol: Language
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/subscriptionStatusScheduledChange.ts
      symbol: SubscriptionStatusScheduledChange
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/upstreamErrorCode.ts
      symbol: UpstreamErrorCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/subscriptionStatusRenewalDate.ts
      symbol: SubscriptionStatusRenewalDate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/redeemGtmInviteLinkRequest.ts
      symbol: RedeemGtmInviteLinkRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamRequestName.ts
      symbol: PatchTeamRequestName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/emailConnectionProvidersParams.ts
      symbol: EmailConnectionProvidersParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamDefaultLinkShare.ts
      symbol: TeamDefaultLinkShare
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/checkoutSessionV2ResponseTrialDays.ts
      symbol: CheckoutSessionV2ResponseTrialDays
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamMember.ts
      symbol: TeamMember
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/genericSuccessResponse.ts
      symbol: GenericSuccessResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamWithMembers.ts
      symbol: TeamWithMembers
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkNote.ts
      symbol: GtmInviteLinkNote
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/denyReason.ts
      symbol: DenyReason
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestLabels.ts
      symbol: EnrichedGithubPullRequestLabels
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/resendFusionauthVerifyUserEmailRequest.ts
      symbol: ResendFusionauthVerifyUserEmailRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/emailConnectionProvidersOutlookAdminConsentUrl.ts
      symbol: EmailConnectionProvidersOutlookAdminConsentUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkRedeemedBy.ts
      symbol: GtmInviteLinkRedeemedBy
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/passwordlessRequestReferralCode.ts
      symbol: PasswordlessRequestReferralCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichGithubPullRequestsProxyRequest.ts
      symbol: EnrichGithubPullRequestsProxyRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/inviteEntry.ts
      symbol: InviteEntry
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userName.ts
      symbol: UserName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putCursorApiKeyRequest.ts
      symbol: PutCursorApiKeyRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/aBGroup.ts
      symbol: ABGroup
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/checkoutSessionMetadataFbp.ts
      symbol: CheckoutSessionMetadataFbp
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestDescription.ts
      symbol: EnrichedGithubPullRequestDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/setGithubPullRequestStateRequest.ts
      symbol: SetGithubPullRequestStateRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestAuthorId.ts
      symbol: EnrichedGithubPullRequestAuthorId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/trialEligibility.ts
      symbol: TrialEligibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamWithMembersScheduledSeatPlans.ts
      symbol: TeamWithMembersScheduledSeatPlans
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/stripeSessionResponse.ts
      symbol: StripeSessionResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatus.ts
      symbol: SystemStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/planTier.ts
      symbol: PlanTier
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentAuthorAssociation.ts
      symbol: GithubPullRequestCommentAuthorAssociation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putProfilePictureFileRequest.ts
      symbol: PutProfilePictureFileRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/initGmailLinkParams.ts
      symbol: InitGmailLinkParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestReviewState.ts
      symbol: GithubPullRequestReviewState
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInviteLinkTeam.ts
      symbol: TeamInviteLinkTeam
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchUserOnboardingRequest.ts
      symbol: PatchUserOnboardingRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamRequestSlug.ts
      symbol: PatchTeamRequestSlug
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gmailLinkStatusResponse.ts
      symbol: GmailLinkStatusResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createGtmInviteLinkRequestRecipientEmail.ts
      symbol: CreateGtmInviteLinkRequestRecipientEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamPlan.ts
      symbol: TeamPlan
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/planCatalogResponse.ts
      symbol: PlanCatalogResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/initGithubLinkParams.ts
      symbol: InitGithubLinkParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentUpdatedAt.ts
      symbol: GithubPullRequestCommentUpdatedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/autoReloadDefaults.ts
      symbol: AutoReloadDefaults
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestParticipantGithubUserIds.ts
      symbol: EnrichedGithubPullRequestParticipantGithubUserIds
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createProfilePictureUploadRequest.ts
      symbol: CreateProfilePictureUploadRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/cursorModelOption.ts
      symbol: CursorModelOption
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/currentSystemStatusAllOfUpdatedAt.ts
      symbol: CurrentSystemStatusAllOfUpdatedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/errorResponse.ts
      symbol: ErrorResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/toggleAutoJoinDomainResponseAutoJoinDomain.ts
      symbol: ToggleAutoJoinDomainResponseAutoJoinDomain
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createGtmInviteLinkRequest.ts
      symbol: CreateGtmInviteLinkRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamCrmSettingsRequest.ts
      symbol: PatchTeamCrmSettingsRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/sendDomainNoticeResponse.ts
      symbol: SendDomainNoticeResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/cursorApiKeyStatusUpdatedAt.ts
      symbol: CursorApiKeyStatusUpdatedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInviteLinkResponse.ts
      symbol: TeamInviteLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/aiBillingErrorBody.ts
      symbol: AiBillingErrorBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestRef.ts
      symbol: GithubPullRequestRef
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/checkoutSessionMetadataGaClientId.ts
      symbol: CheckoutSessionMetadataGaClientId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/checkoutSessionMetadata.ts
      symbol: CheckoutSessionMetadata
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/passwordlessStartedResponseCode.ts
      symbol: PasswordlessStartedResponseCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/statusUpdateAllOf.ts
      symbol: StatusUpdateAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestAuthorLogin.ts
      symbol: EnrichedGithubPullRequestAuthorLogin
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestStatus.ts
      symbol: GithubPullRequestStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamRole.ts
      symbol: TeamRole
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexLoginPoll.ts
      symbol: CodexLoginPoll
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/passwordlessRequest.ts
      symbol: PasswordlessRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putUserNameQueryParamsLastName.ts
      symbol: PutUserNameQueryParamsLastName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCheckRunConclusion.ts
      symbol: GithubPullRequestCheckRunConclusion
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInviteLinkTokenRequest.ts
      symbol: TeamInviteLinkTokenRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestChecks.ts
      symbol: EnrichedGithubPullRequestChecks
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestLabel.ts
      symbol: GithubPullRequestLabel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkRevokedAt.ts
      symbol: GtmInviteLinkRevokedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createCheckoutSessionV2Request.ts
      symbol: CreateCheckoutSessionV2Request
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/setGithubPullRequestDraftResponse.ts
      symbol: SetGithubPullRequestDraftResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getLegacyUserPermissionsResponse.ts
      symbol: GetLegacyUserPermissionsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestDeletions.ts
      symbol: EnrichedGithubPullRequestDeletions
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/ai-billing-types.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusOneOf.ts
      symbol: SystemStatusOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestAssignees.ts
      symbol: EnrichedGithubPullRequestAssignees
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestComment.ts
      symbol: GithubPullRequestComment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/initGithubLinkResponse.ts
      symbol: InitGithubLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexLoginState.ts
      symbol: CodexLoginState
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/savedAgentApiKey.ts
      symbol: SavedAgentApiKey
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/checkoutSessionMetadataFbc.ts
      symbol: CheckoutSessionMetadataFbc
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/passwordlessCallbackParams.ts
      symbol: PasswordlessCallbackParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestState.ts
      symbol: GithubPullRequestState
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentInReplyToId.ts
      symbol: GithubPullRequestCommentInReplyToId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestReviewSubmittedAt.ts
      symbol: GithubPullRequestReviewSubmittedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/mergeGithubPullRequestResponse.ts
      symbol: MergeGithubPullRequestResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userNameFirstName.ts
      symbol: UserNameFirstName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/agentApiKeyKey.ts
      symbol: AgentApiKeyKey
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/sendMobileWelcomeEmailRequest.ts
      symbol: SendMobileWelcomeEmailRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createCheckoutSessionV2RequestDiscount.ts
      symbol: CreateCheckoutSessionV2RequestDiscount
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestAdditions.ts
      symbol: EnrichedGithubPullRequestAdditions
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkConvertedAt.ts
      symbol: GtmInviteLinkConvertedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/joinTeamByInviteLinkResponse.ts
      symbol: JoinTeamByInviteLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/cursorApiKeyStatus.ts
      symbol: CursorApiKeyStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditPurchaseStatus.ts
      symbol: CreditPurchaseStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/changePlanResponse.ts
      symbol: ChangePlanResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexEnvironment.ts
      symbol: CodexEnvironment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexConnectionStatusEnvironmentId.ts
      symbol: CodexConnectionStatusEnvironmentId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createCheckoutSessionV2RequestPlan.ts
      symbol: CreateCheckoutSessionV2RequestPlan
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/emailConnectionProviders.ts
      symbol: EmailConnectionProviders
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/inviteToTeamRequestTeamId.ts
      symbol: InviteToTeamRequestTeamId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/updateOverageRequest.ts
      symbol: UpdateOverageRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkFirstOpenedAt.ts
      symbol: GtmInviteLinkFirstOpenedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestNumber.ts
      symbol: GithubPullRequestNumber
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentLine.ts
      symbol: GithubPullRequestCommentLine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userQuota.ts
      symbol: UserQuota
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putAgentApiKeyRequest.ts
      symbol: PutAgentApiKeyRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/passwordRequest.ts
      symbol: PasswordRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/autoReloadSnapshot.ts
      symbol: AutoReloadSnapshot
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestReviewReviewerLogin.ts
      symbol: GithubPullRequestReviewReviewerLogin
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/setGithubPullRequestDraftResponsePullRequest.ts
      symbol: SetGithubPullRequestDraftResponsePullRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamRequestUserRoleUpdates.ts
      symbol: PatchTeamRequestUserRoleUpdates
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamRequestLanguage.ts
      symbol: PatchTeamRequestLanguage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestName.ts
      symbol: EnrichedGithubPullRequestName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/scheduledSeatPlan.ts
      symbol: ScheduledSeatPlan
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditPurchaseSnapshot.ts
      symbol: CreditPurchaseSnapshot
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchUserTutorialRequest.ts
      symbol: PatchUserTutorialRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/toggleAutoJoinDomainResponse.ts
      symbol: ToggleAutoJoinDomainResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/macroApiTokenResponse.ts
      symbol: MacroApiTokenResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/sendMobileWelcomeEmailResponse.ts
      symbol: SendMobileWelcomeEmailResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/changePlanRequest.ts
      symbol: ChangePlanRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusOneOfFiveStatus.ts
      symbol: SystemStatusOneOfFiveStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusOneOfThree.ts
      symbol: SystemStatusOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/usageSnapshot.ts
      symbol: UsageSnapshot
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/cursorApiKeyStatusDefaultEffort.ts
      symbol: CursorApiKeyStatusDefaultEffort
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getNamesWithEmailRequestBody.ts
      symbol: GetNamesWithEmailRequestBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getUserLinkExistsParams.ts
      symbol: GetUserLinkExistsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInviteLinkResponseToken.ts
      symbol: TeamInviteLinkResponseToken
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/codex.ts
      symbol: codexClient
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/agentApiKey.ts
      symbol: AgentApiKey
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/linkShare.ts
      symbol: LinkShare
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestComments.ts
      symbol: EnrichedGithubPullRequestComments
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusOneOfStatus.ts
      symbol: SystemStatusOneOfStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putProfilePictureParams.ts
      symbol: PutProfilePictureParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/usageSnapshotBlockedReason.ts
      symbol: UsageSnapshotBlockedReason
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestUserLogin.ts
      symbol: GithubPullRequestUserLogin
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusOneOfThreeStatus.ts
      symbol: SystemStatusOneOfThreeStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestMergeabilityResponse.ts
      symbol: GithubPullRequestMergeabilityResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteOfferStatus.ts
      symbol: GtmInviteOfferStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestMergeabilityRequest.ts
      symbol: GithubPullRequestMergeabilityRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putUserNameQueryParamsFirstName.ts
      symbol: PutUserNameQueryParamsFirstName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCheckRunCompletedAt.ts
      symbol: GithubPullRequestCheckRunCompletedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putCursorDefaultModelRequestModelId.ts
      symbol: PutCursorDefaultModelRequestModelId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/agentSetupResponse.ts
      symbol: AgentSetupResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexEnvironmentLabel.ts
      symbol: CodexEnvironmentLabel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/permission.ts
      symbol: Permission
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/currentSystemStatusAllOf.ts
      symbol: CurrentSystemStatusAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createTeamRequest.ts
      symbol: CreateTeamRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexConnectionStatus.ts
      symbol: CodexConnectionStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createdTeamInviteLinkResponse.ts
      symbol: CreatedTeamInviteLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentAuthorLogin.ts
      symbol: GithubPullRequestCommentAuthorLogin
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getProfilePicturesRequestBody.ts
      symbol: GetProfilePicturesRequestBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/upstreamErrorResponse.ts
      symbol: UpstreamErrorResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getUserInfo.ts
      symbol: GetUserInfo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentCreatedAt.ts
      symbol: GithubPullRequestCommentCreatedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userOrganizationResponse.ts
      symbol: UserOrganizationResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamRequestDefaultLinkShare.ts
      symbol: PatchTeamRequestDefaultLinkShare
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getLegacyUserPermissionsResponseGroup.ts
      symbol: GetLegacyUserPermissionsResponseGroup
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/checkoutSessionV2Response.ts
      symbol: CheckoutSessionV2Response
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamRequest.ts
      symbol: PatchTeamRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/postGetNamesRequestBody.ts
      symbol: PostGetNamesRequestBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/sendInviteBody.ts
      symbol: SendInviteBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/ssoRequiredResponse.ts
      symbol: SsoRequiredResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestReviews.ts
      symbol: EnrichedGithubPullRequestReviews
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/currentSystemStatus.ts
      symbol: CurrentSystemStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexConnectionStatusEmail.ts
      symbol: CodexConnectionStatusEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteOffer.ts
      symbol: GtmInviteOffer
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestMergeabilityEntry.ts
      symbol: GithubPullRequestMergeabilityEntry
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userNames.ts
      symbol: UserNames
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/fetch.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/autoReloadSnapshotMonthlyBudget.ts
      symbol: AutoReloadSnapshotMonthlyBudget
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/appleLoginRequest.ts
      symbol: AppleLoginRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/planCatalogEntryAutoReloadDefaultMonthlyLimitCents.ts
      symbol: PlanCatalogEntryAutoReloadDefaultMonthlyLimitCents
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequest.ts
      symbol: EnrichedGithubPullRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putUserNameParams.ts
      symbol: PutUserNameParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInviteDetails.ts
      symbol: TeamInviteDetails
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/subscriptionStatus.ts
      symbol: SubscriptionStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createGtmInviteLinkRequestNote.ts
      symbol: CreateGtmInviteLinkRequestNote
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createAccountMergeRequest.ts
      symbol: CreateAccountMergeRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userLanguageLanguage.ts
      symbol: UserLanguageLanguage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/profilePictureUpload.ts
      symbol: ProfilePictureUpload
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkStripeSubscriptionId.ts
      symbol: GtmInviteLinkStripeSubscriptionId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/cursorModelsResponse.ts
      symbol: CursorModelsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/autoReloadMonthlyBudget.ts
      symbol: AutoReloadMonthlyBudget
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCheckRun.ts
      symbol: GithubPullRequestCheckRun
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userLanguage.ts
      symbol: UserLanguage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/cursorApiKeyStatusDefaultModelId.ts
      symbol: CursorApiKeyStatusDefaultModelId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkRedeemedAt.ts
      symbol: GtmInviteLinkRedeemedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentPullRequestReviewId.ts
      symbol: GithubPullRequestCommentPullRequestReviewId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getLegacyUserPermissionsResponseCreatedAt.ts
      symbol: GetLegacyUserPermissionsResponseCreatedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditCheckoutRequestBody.ts
      symbol: CreditCheckoutRequestBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCheckRunStartedAt.ts
      symbol: GithubPullRequestCheckRunStartedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/passwordlessStartedResponse.ts
      symbol: PasswordlessStartedResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusHistory.ts
      symbol: SystemStatusHistory
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentUrl.ts
      symbol: GithubPullRequestCommentUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/seatPlan.ts
      symbol: SeatPlan
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestReview.ts
      symbol: GithubPullRequestReview
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditPurchaseResponseSnapshot.ts
      symbol: CreditPurchaseResponseSnapshot
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userNameLastName.ts
      symbol: UserNameLastName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestMergeability.ts
      symbol: GithubPullRequestMergeability
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichGithubPullRequestsResponse.ts
      symbol: EnrichGithubPullRequestsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/initGmailLinkResponse.ts
      symbol: InitGmailLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamMemberPlanRequest.ts
      symbol: PatchTeamMemberPlanRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentPath.ts
      symbol: GithubPullRequestCommentPath
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkRecipientEmail.ts
      symbol: GtmInviteLinkRecipientEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/toggleNonAdminInvitesResponse.ts
      symbol: ToggleNonAdminInvitesResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putCursorDefaultModelRequestEffort.ts
      symbol: PutCursorDefaultModelRequestEffort
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/profilePictures.ts
      symbol: ProfilePictures
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubMergeMethod.ts
      symbol: GithubMergeMethod
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/autoReloadSnapshotMonthlySpendLimitCents.ts
      symbol: AutoReloadSnapshotMonthlySpendLimitCents
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userProfilePicture.ts
      symbol: UserProfilePicture
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/crm.ts
      symbol: patchTeamCrmSettings
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/mergeGithubPullRequestResponsePullRequest.ts
      symbol: MergeGithubPullRequestResponsePullRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/generateEmailLinkRequest.ts
      symbol: GenerateEmailLinkRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/mergeGithubPullRequestRequest.ts
      symbol: MergeGithubPullRequestRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamLanguage.ts
      symbol: TeamLanguage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/inviteToTeamRequest.ts
      symbol: InviteToTeamRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestUser.ts
      symbol: GithubPullRequestUser
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexLoginStart.ts
      symbol: CodexLoginStart
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/initOutlookLinkResponse.ts
      symbol: InitOutlookLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteOfferStatusOffer.ts
      symbol: GtmInviteOfferStatusOffer
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/initOutlookLinkParams.ts
      symbol: InitOutlookLinkParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestLabelColor.ts
      symbol: GithubPullRequestLabelColor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamUserRole.ts
      symbol: PatchTeamUserRole
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamAutoJoinDomain.ts
      symbol: TeamAutoJoinDomain
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/updateAutoReloadRequestMonthlySpendLimitCents.ts
      symbol: UpdateAutoReloadRequestMonthlySpendLimitCents
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/mergeGithubPullRequestRequestMergeMethod.ts
      symbol: MergeGithubPullRequestRequestMergeMethod
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/macroApiTokenParams.ts
      symbol: MacroApiTokenParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putUserNameQueryParams.ts
      symbol: PutUserNameQueryParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInvitesResponse.ts
      symbol: TeamInvitesResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkList.ts
      symbol: GtmInviteLinkList
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexEnvironmentRepository.ts
      symbol: CodexEnvironmentRepository
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentAuthorId.ts
      symbol: GithubPullRequestCommentAuthorId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/setGithubPullRequestDraftRequest.ts
      symbol: SetGithubPullRequestDraftRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamInviteLinkToken.ts
      symbol: TeamInviteLinkToken
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditPurchaseRequestBody.ts
      symbol: CreditPurchaseRequestBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/updateAutoReloadRequest.ts
      symbol: UpdateAutoReloadRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/publicGtmInviteLink.ts
      symbol: PublicGtmInviteLink
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/setGithubPullRequestStateResponsePullRequest.ts
      symbol: SetGithubPullRequestStateResponsePullRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/listGtmInviteLinksParams.ts
      symbol: ListGtmInviteLinksParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/statusUpdate.ts
      symbol: StatusUpdate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubLinkStatusResponse.ts
      symbol: GithubLinkStatusResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditPurchaseResponse.ts
      symbol: CreditPurchaseResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createPortalSessionRequest.ts
      symbol: CreatePortalSessionRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexConnectionStatusAccountId.ts
      symbol: CodexConnectionStatusAccountId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCheckRunUrl.ts
      symbol: GithubPullRequestCheckRunUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/githubPullRequestCommentOriginalLine.ts
      symbol: GithubPullRequestCommentOriginalLine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/putCursorDefaultModelRequest.ts
      symbol: PutCursorDefaultModelRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/codexConfigRequest.ts
      symbol: CodexConfigRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/agentApiKeyProvider.ts
      symbol: AgentApiKeyProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/planCatalogEntry.ts
      symbol: PlanCatalogEntry
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getTeamInvitesParams.ts
      symbol: GetTeamInvitesParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/emptyResponse.ts
      symbol: EmptyResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getLegacyUserPermissionsResponseName.ts
      symbol: GetLegacyUserPermissionsResponseName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/profilePictureQueryParams.ts
      symbol: ProfilePictureQueryParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchTeamCrmSettingsResponse.ts
      symbol: PatchTeamCrmSettingsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/teamWithMembersScheduledSeatPlansAnyOf.ts
      symbol: TeamWithMembersScheduledSeatPlansAnyOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLinkStatus.ts
      symbol: GtmInviteLinkStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/patchUserGroupRequest.ts
      symbol: PatchUserGroupRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/enrichedGithubPullRequestStatus.ts
      symbol: EnrichedGithubPullRequestStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditPurchaseSnapshotMonthlyLimitCents.ts
      symbol: CreditPurchaseSnapshotMonthlyLimitCents
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/getUserInfoOrganizationId.ts
      symbol: GetUserInfoOrganizationId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/ssoLoginParams.ts
      symbol: SsoLoginParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userProfilePictureChecksum.ts
      symbol: UserProfilePictureChecksum
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/gtmInviteLink.ts
      symbol: GtmInviteLink
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/creditCheckoutResponse.ts
      symbol: CreditCheckoutResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/systemStatusOneOfFive.ts
      symbol: SystemStatusOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/setGithubPullRequestStateResponse.ts
      symbol: SetGithubPullRequestStateResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/userLinkResponse.ts
      symbol: UserLinkResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/team.ts
      symbol: Team
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/generated/schemas/createInProgressLinkResponse.ts
      symbol: CreateInProgressLinkResponse
  technology: TypeScript
description: Session, link, and billing client for the auth host
---

Starts Google and GitHub consent, reads session state, and opens Stripe checkout through Macro auth routes. It does not call those vendors' APIs itself.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-auth/client.ts](../../../../../../apps/web/src/lib/service-clients/service-auth/client.ts) | [google](../../../../../externals/google.md) | Starts mailbox consent | OAuth |
