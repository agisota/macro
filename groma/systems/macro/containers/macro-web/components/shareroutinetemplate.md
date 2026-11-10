---
type: C4 Component
title: service scheduled action
status: stable
groma:
  id: shareroutinetemplate
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/shareRoutineTemplate.ts
      symbol: ShareRoutineTemplate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/listScheduledActionsParams.ts
      symbol: ListScheduledActionsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOfType.ts
      symbol: DraftRequestOneOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runInfo.ts
      symbol: RunInfo
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggerOneOfFiveType.ts
      symbol: RoutineTriggerOneOfFiveType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTrigger.ts
      symbol: ActionTrigger
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestedPick.ts
      symbol: SuggestedPick
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionKind.ts
      symbol: ActionKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSoFarTriggerAnyOf.ts
      symbol: RoutineSoFarTriggerAnyOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionResponseAllOf.ts
      symbol: ScheduledActionResponseAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSuggestion.ts
      symbol: RoutineSuggestion
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStep.ts
      symbol: RoutineStep
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOf.ts
      symbol: DraftOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionExecutionRecordResourceId.ts
      symbol: ActionExecutionRecordResourceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOfSix.ts
      symbol: RunStartOneOfSix
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/upgradeOutcome.ts
      symbol: UpgradeOutcome
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftedStep.ts
      symbol: DraftedStep
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/propertySelector.ts
      symbol: PropertySelector
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfFiveType.ts
      symbol: ActionTriggerOneOfFiveType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentStepModel.ts
      symbol: AgentStepModel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeStepId.ts
      symbol: CodeStepId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOfSixKind.ts
      symbol: RunStartOneOfSixKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfThreeType.ts
      symbol: RoutineKnobOneOfThreeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentMcpServer.ts
      symbol: AgentMcpServer
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfFourAllOfOutcome.ts
      symbol: DraftOneOfFourAllOfOutcome
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOfKind.ts
      symbol: RunStartOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResultCondition.ts
      symbol: ExecutionResultCondition
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnob.ts
      symbol: RoutineKnob
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOf.ts
      symbol: DraftRequestOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfThree.ts
      symbol: RoutineKnobOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilterProperty.ts
      symbol: EventFilterProperty
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadConditionEquals.ts
      symbol: PayloadConditionEquals
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionConfiguration.ts
      symbol: ActionConfiguration
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariableOneOfThree.ts
      symbol: TemplateVariableOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadConditionExists.ts
      symbol: PayloadConditionExists
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/generationStatus.ts
      symbol: GenerationStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/checkedStepProblems.ts
      symbol: CheckedStepProblems
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/stepProblem.ts
      symbol: StepProblem
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionConfigurationUpdateEnabled.ts
      symbol: ActionConfigurationUpdateEnabled
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSuggestionAllOfKeepProbability.ts
      symbol: RoutineSuggestionAllOfKeepProbability
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSoFarTrigger.ts
      symbol: RoutineSoFarTrigger
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSuggestionAllOfReason.ts
      symbol: RoutineSuggestionAllOfReason
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilterCondition.ts
      symbol: EventFilterCondition
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestOutcomeId.ts
      symbol: SuggestOutcomeId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOf.ts
      symbol: RunStartOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentStepAgent.ts
      symbol: AgentStepAgent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/createScheduledActionParams.ts
      symbol: CreateScheduledActionParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariableOneOfFive.ts
      symbol: TemplateVariableOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOf.ts
      symbol: RoutineKnobOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/inProgressExecutionChatId.ts
      symbol: InProgressExecutionChatId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOfThreeType.ts
      symbol: DraftRequestOneOfThreeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeIdentity.ts
      symbol: CodeIdentity
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/conditionResultOneOfThree.ts
      symbol: ConditionResultOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftCreatedEntityType.ts
      symbol: DraftCreatedEntityType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResult.ts
      symbol: ExecutionResult
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineCheck.ts
      symbol: RoutineCheck
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfFiveChatId.ts
      symbol: ScheduledActionUpdateOneOfFiveChatId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfNineType.ts
      symbol: RoutineKnobOneOfNineType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionClaimed.ts
      symbol: ScheduledActionClaimed
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestedPickOneOfKnobs.ts
      symbol: SuggestedPickOneOfKnobs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionExecutionRecordId.ts
      symbol: ActionExecutionRecordId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/conditionResultOneOfThreeStatus.ts
      symbol: ConditionResultOneOfThreeStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestedPickOneOfFourKind.ts
      symbol: SuggestedPickOneOfFourKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggerOneOfType.ts
      symbol: RoutineTriggerOneOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilterGithub.ts
      symbol: EventFilterGithub
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTemplate.ts
      symbol: RoutineTemplate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionResponseAllOfLastRun.ts
      symbol: ScheduledActionResponseAllOfLastRun
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilters.ts
      symbol: EventFilters
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSuggestionAllOf.ts
      symbol: RoutineSuggestionAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/generateRoutineSuggestionsParams.ts
      symbol: GenerateRoutineSuggestionsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/stepId.ts
      symbol: StepId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/listRoutineSuggestionsParams.ts
      symbol: ListRoutineSuggestionsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariableOneOfKind.ts
      symbol: TemplateVariableOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfType.ts
      symbol: RoutineKnobOneOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOfThreeKind.ts
      symbol: DraftRequestOneOfThreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfOneone.ts
      symbol: RoutineKnobOneOfOneone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequest.ts
      symbol: DraftRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentTaskAgent.ts
      symbol: AgentTaskAgent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfSevenOutcome.ts
      symbol: DraftOneOfSevenOutcome
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOfThree.ts
      symbol: DraftRequestOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfThreeMax.ts
      symbol: RoutineKnobOneOfThreeMax
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResultConfigurationRevision.ts
      symbol: ExecutionResultConfigurationRevision
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfSevenType.ts
      symbol: RoutineKnobOneOfSevenType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggerOneOfFive.ts
      symbol: RoutineTriggerOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfFiveResource.ts
      symbol: ScheduledActionUpdateOneOfFiveResource
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionResponse.ts
      symbol: ScheduledActionResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOfSix.ts
      symbol: DraftRequestOneOfSix
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentTask.ts
      symbol: AgentTask
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runVisibility.ts
      symbol: RunVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfAllOfOutcome.ts
      symbol: DraftOneOfAllOfOutcome
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestionFrom.ts
      symbol: SuggestionFrom
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfFive.ts
      symbol: ActionTriggerOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfType.ts
      symbol: ScheduledActionUpdateOneOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfNine.ts
      symbol: RoutineKnobOneOfNine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/schedule.ts
      symbol: Schedule
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeUpgrade.ts
      symbol: CodeUpgrade
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestOutcomeCheck.ts
      symbol: SuggestOutcomeCheck
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/emptyResponse.ts
      symbol: EmptyResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadScalar.ts
      symbol: PayloadScalar
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariableOneOfFiveKind.ts
      symbol: TemplateVariableOneOfFiveKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftCreated.ts
      symbol: DraftCreated
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestedPickOneOf.ts
      symbol: SuggestedPickOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineCatalogParams.ts
      symbol: RoutineCatalogParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfFive.ts
      symbol: ScheduledActionUpdateOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentTaskModel.ts
      symbol: AgentTaskModel
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfType.ts
      symbol: ActionTriggerOneOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/catalogEntryCode.ts
      symbol: CatalogEntryCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfFiveType.ts
      symbol: ScheduledActionUpdateOneOfFiveType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfThree.ts
      symbol: ActionTriggerOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/conditionResultOneOf.ts
      symbol: ConditionResultOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineProgram.ts
      symbol: RoutineProgram
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadConditionGlob.ts
      symbol: PayloadConditionGlob
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResultStepsItem.ts
      symbol: ExecutionResultStepsItem
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTask.ts
      symbol: RoutineTask
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/inProgressExecutionResource.ts
      symbol: InProgressExecutionResource
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/inProgressExecution.ts
      symbol: InProgressExecution
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/setScheduledActionEnabled.ts
      symbol: SetScheduledActionEnabled
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResultResource.ts
      symbol: ExecutionResultResource
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/surface.ts
      symbol: Surface
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestedPickOneOfKind.ts
      symbol: SuggestedPickOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runInfoPreviousAt.ts
      symbol: RunInfoPreviousAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSuggestions.ts
      symbol: RoutineSuggestions
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStepOneOfFourAllOf.ts
      symbol: RoutineStepOneOfFourAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOf.ts
      symbol: ScheduledActionUpdateOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/stepKind.ts
      symbol: StepKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRequestOneOfSixType.ts
      symbol: DraftRequestOneOfSixType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeUpgradeFromSdk.ts
      symbol: CodeUpgradeFromSdk
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionConfigurationUpdate.ts
      symbol: ActionConfigurationUpdate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestRequestOneOfFour.ts
      symbol: SuggestRequestOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventName.ts
      symbol: EventName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariable.ts
      symbol: TemplateVariable
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeStep.ts
      symbol: CodeStep
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfSeven.ts
      symbol: RoutineKnobOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionEventActivatedAt.ts
      symbol: ScheduledActionEventActivatedAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResourceType.ts
      symbol: ExecutionResourceType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOfThreeEntityId.ts
      symbol: RunStartOneOfThreeEntityId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfSevenType.ts
      symbol: ActionTriggerOneOfSevenType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runInfoTimezone.ts
      symbol: RunInfoTimezone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftContext.ts
      symbol: DraftContext
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStepOneOfFour.ts
      symbol: RoutineStepOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestRequestOneOf.ts
      symbol: SuggestRequestOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfAllOf.ts
      symbol: DraftOneOfAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestRequestOneOfKnobs.ts
      symbol: SuggestRequestOneOfKnobs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftRoutineRequest.ts
      symbol: DraftRoutineRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResultRun.ts
      symbol: ExecutionResultRun
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadCondition.ts
      symbol: PayloadCondition
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfChatId.ts
      symbol: ScheduledActionUpdateOneOfChatId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionNextRunAt.ts
      symbol: ScheduledActionNextRunAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/createdItem.ts
      symbol: CreatedItem
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/variableFill.ts
      symbol: VariableFill
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/knobName.ts
      symbol: KnobName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeStepSentence.ts
      symbol: CodeStepSentence
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentStep.ts
      symbol: AgentStep
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTrigger.ts
      symbol: RoutineTrigger
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionResponseAllOfTimezone.ts
      symbol: ScheduledActionResponseAllOfTimezone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionSuggestionId.ts
      symbol: ScheduledActionSuggestionId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOfThreeKind.ts
      symbol: RunStartOneOfThreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestRequestOneOfFourKind.ts
      symbol: SuggestRequestOneOfFourKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestedPickOneOfFour.ts
      symbol: SuggestedPickOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/sdkFingerprint.ts
      symbol: SdkFingerprint
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOf.ts
      symbol: ActionTriggerOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfSeven.ts
      symbol: DraftOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggerOneOfThree.ts
      symbol: RoutineTriggerOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfThreeMin.ts
      symbol: RoutineKnobOneOfThreeMin
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggerOneOf.ts
      symbol: RoutineTriggerOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/namedItemKind.ts
      symbol: NamedItemKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfThreeType.ts
      symbol: ActionTriggerOneOfThreeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdate.ts
      symbol: ScheduledActionUpdate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftedRoutineTrigger.ts
      symbol: DraftedRoutineTrigger
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runInfoCodeActsAs.ts
      symbol: RunInfoCodeActsAs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/aiAdmissionErrorBody.ts
      symbol: AiAdmissionErrorBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draft.ts
      symbol: Draft
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilterIds.ts
      symbol: EventFilterIds
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionExecutionRecord.ts
      symbol: ActionExecutionRecord
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineProgramSdk.ts
      symbol: RoutineProgramSdk
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStepOneOfFourAllOfType.ts
      symbol: RoutineStepOneOfFourAllOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledAction.ts
      symbol: ScheduledAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionResponseAllOfSchedule.ts
      symbol: ScheduledActionResponseAllOfSchedule
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResultError.ts
      symbol: ExecutionResultError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeUpgradeTask.ts
      symbol: CodeUpgradeTask
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStepOneOfAllOf.ts
      symbol: RoutineStepOneOfAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggers.ts
      symbol: RoutineTriggers
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfFourAllOf.ts
      symbol: DraftOneOfFourAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/catalogEntryNamedKnobs.ts
      symbol: CatalogEntryNamedKnobs
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/conditionResultOneOfStatus.ts
      symbol: ConditionResultOneOfStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilterMatch.ts
      symbol: EventFilterMatch
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestRequest.ts
      symbol: SuggestRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestOutcome.ts
      symbol: SuggestOutcome
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionExecutionRecordResult.ts
      symbol: ActionExecutionRecordResult
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/catalogEntry.ts
      symbol: CatalogEntry
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionConfigurationUpdateRunVisibility.ts
      symbol: ActionConfigurationUpdateRunVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionTemplateId.ts
      symbol: ScheduledActionTemplateId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadConditionNotIn.ts
      symbol: PayloadConditionNotIn
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineTriggerOneOfThreeType.ts
      symbol: RoutineTriggerOneOfThreeType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariableOneOf.ts
      symbol: TemplateVariableOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStartOneOfThree.ts
      symbol: RunStartOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/githubSelector.ts
      symbol: GithubSelector
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftOneOfFour.ts
      symbol: DraftOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/codeUpgradeReason.ts
      symbol: CodeUpgradeReason
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineModelId.ts
      symbol: RoutineModelId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineKnobOneOfOneoneType.ts
      symbol: RoutineKnobOneOfOneoneType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/templateVariableOneOfThreeKind.ts
      symbol: TemplateVariableOneOfThreeKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionConfigurationUpdateDescription.ts
      symbol: ActionConfigurationUpdateDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionId.ts
      symbol: ScheduledActionId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/suggestRequestOneOfKind.ts
      symbol: SuggestRequestOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/draftedRoutine.ts
      symbol: DraftedRoutine
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/runStart.ts
      symbol: RunStart
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/payloadConditionIn.ts
      symbol: PayloadConditionIn
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/scheduledActionUpdateOneOfResource.ts
      symbol: ScheduledActionUpdateOneOfResource
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/eventFilter.ts
      symbol: EventFilter
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineSoFar.ts
      symbol: RoutineSoFar
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/checkRoutineRequest.ts
      symbol: CheckRoutineRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStepOneOfAllOfType.ts
      symbol: RoutineStepOneOfAllOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/agentTaskAgentProperty.ts
      symbol: AgentTaskAgentProperty
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/createdItemEntityType.ts
      symbol: CreatedItemEntityType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/routineStepOneOf.ts
      symbol: RoutineStepOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/conditionResult.ts
      symbol: ConditionResult
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/executionResource.ts
      symbol: ExecutionResource
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-scheduled-action/generated/schemas/actionTriggerOneOfSeven.ts
      symbol: ActionTriggerOneOfSeven
  technology: TypeScript
description: Client for the service scheduled action host
---

Generated by orval v7.21.0 🍺 Do not edit manually. scheduled_action API for managing scheduled actions OpenAPI spec version: 0.1.0
