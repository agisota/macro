---
type: C4 Component
title: Routines
status: stable
groma:
  id: queries-routines
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/routines/queries/routines.ts
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-new.tsx
      symbol: RoutineNewView
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-template-view.tsx
      symbol: RoutineTemplateView
    - scanner: typescript
      file: apps/web/src/features/routines/queries/keys.ts
      symbol: scheduledActionKeys
    - scanner: typescript
      file: apps/web/src/features/routines/queries/routine-sources.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/routines-list.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/routine-event-property.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-connections.tsx
      symbol: ConnectionRows
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-trigger-menu.tsx
      symbol: TriggerMenu
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-history.tsx
      symbol: RoutineHistory
    - scanner: typescript
      file: apps/web/src/features/routines/queries/run-resource.ts
    - scanner: typescript
      file: apps/web/src/features/routines/context/routine-slots.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-event-condition.tsx
      symbol: RoutineEventCondition
    - scanner: typescript
      file: apps/web/src/features/routines/core/template.ts
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-sections.tsx
      symbol: routineSections
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-template-strip.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/routine-execution-picker.tsx
      symbol: RoutineExecutionPicker
    - scanner: typescript
      file: apps/web/src/features/routines/views/activate-template-dialog.tsx
      symbol: ActivateTemplateDialog
    - scanner: typescript
      file: apps/web/src/features/routines/routine-created-item.tsx
      symbol: RoutineCreatedItem
    - scanner: typescript
      file: apps/web/src/features/routines/queries/templates.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routine-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/routines/core/draft.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-steps.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-trigger-icons.ts
    - scanner: typescript
      file: apps/web/src/features/routines/views/routines-list.tsx
      symbol: RoutinesListView
    - scanner: typescript
      file: apps/web/src/features/routines/core/claim.ts
      symbol: isClaimActive
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-row.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-describe.tsx
      symbol: RoutineDescribe
    - scanner: typescript
      file: apps/web/src/features/routines/core/schedule-language.ts
      symbol: parseRecurringSchedule
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine-templates.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/composing.ts
      symbol: isComposing
    - scanner: typescript
      file: apps/web/src/features/routines/queries/routine-draft.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routines-page.tsx
      symbol: RoutinesPage
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-step-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine-draft.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routine-detail.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-start.tsx
      symbol: RoutineStart
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-code-review.tsx
      symbol: CodeReviewNotice
    - scanner: typescript
      file: apps/web/src/features/routines/draft-storage.ts
    - scanner: typescript
      file: apps/web/src/features/routines/primitives/routine-detail.ts
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-execution-picker.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/queries/github-link.ts
    - scanner: typescript
      file: apps/web/src/features/routines/core/text-diff.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-github-settings.tsx
      symbol: RoutineGithubSettings
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine-target.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/schedules.ts
    - scanner: typescript
      file: apps/web/src/features/routines/views/share-template-dialog.tsx
      symbol: ShareRoutineDialog
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-creator.tsx
      symbol: RoutineCreatorView
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-step-change.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-payload-tests.tsx
      symbol: RoutinePayloadTests
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-search-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/queries/entities.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/template-card.tsx
      symbol: TemplateCard
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-step-knobs.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-description.tsx
      symbol: RoutineDescription
    - scanner: typescript
      file: apps/web/src/features/routines/routine-prompt-mention-users.ts
      symbol: useRoutinePromptMentionUsers
    - scanner: typescript
      file: apps/web/src/features/routines/core/step-history.ts
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-triggers.tsx
      symbol: RoutineTriggers
    - scanner: typescript
      file: apps/web/src/features/routines/definition.ts
    - scanner: typescript
      file: apps/web/src/features/routines/primitives/routine-autosave.ts
      symbol: createRoutineAutosave
    - scanner: typescript
      file: apps/web/src/features/routines/primitives/routine-composer.ts
      symbol: createRoutineComposer
    - scanner: typescript
      file: apps/web/src/features/routines/routine-prompt-editor.tsx
      symbol: RoutinePromptEditor
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine-summary.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/triggers.ts
      symbol: getCronTrigger
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-add-step.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/routine-template.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/routine-settings.tsx
      symbol: RoutineSettings
    - scanner: typescript
      file: apps/web/src/features/routines/routine-triggers.tsx
      symbol: RoutineTriggers
    - scanner: typescript
      file: apps/web/src/features/routines/core/knobs.ts
    - scanner: typescript
      file: apps/web/src/features/routines/context/history.ts
      symbol: HistoryMetadata
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-schedule-settings.tsx
      symbol: RoutineScheduleSettings
    - scanner: typescript
      file: apps/web/src/features/routines/core/step-edits.ts
      symbol: copyStep
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-run-detail.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/queries/sync.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/history-metadata.ts
    - scanner: typescript
      file: apps/web/src/features/routines/core/run-start.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/compose-routine.ts
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine.ts
      symbol: RoutineSnapshot
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-github-connect.tsx
      symbol: RoutineGithubConnect
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-run-button.tsx
      symbol: RoutineRunButton
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine-steps.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/catalog.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routine-event-scope.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/core/code-review.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routine-new.tsx
      symbol: RoutineNew
    - scanner: typescript
      file: apps/web/src/features/routines/components/template-reference.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/core/step-headline.ts
    - scanner: typescript
      file: apps/web/src/features/routines/primitives/template-activation.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/compose-step.ts
    - scanner: typescript
      file: apps/web/src/features/routines/core/types.ts
      symbol: RoutineRow
    - scanner: typescript
      file: apps/web/src/features/routines/context/routine-sources.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routine-ai-composer.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-code-step.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/core/history.ts
    - scanner: typescript
      file: apps/web/src/features/routines/primitives/routines-list.ts
      symbol: createRoutineRows
    - scanner: typescript
      file: apps/web/src/features/routines/components/routine-steps-outline.tsx
      symbol: StepsOutline
    - scanner: typescript
      file: apps/web/src/features/routines/queries/routine-trigger-mapping.ts
    - scanner: typescript
      file: apps/web/src/features/routines/queries/github-repositories.ts
      symbol: createGithubRepositoryOptions
    - scanner: typescript
      file: apps/web/src/features/routines/routine-draft-start.ts
    - scanner: typescript
      file: apps/web/src/features/routines/routine-creator.tsx
      symbol: RoutineCreator
    - scanner: typescript
      file: apps/web/src/features/routines/routine-apps.tsx
    - scanner: typescript
      file: apps/web/src/features/routines/routine-step-author.tsx
      symbol: createRoutineStepAuthor
    - scanner: typescript
      file: apps/web/src/features/routines/views/routine-detail.tsx
      symbol: RoutineDetailView
    - scanner: typescript
      file: apps/web/src/features/routines/routine-mentions.ts
      symbol: useRoutineMentionSource
    - scanner: typescript
      file: apps/web/src/features/routines/core/routine-triggers.ts
  technology: SolidJS
  group: Agents
description: Routine list, detail, and block.
---

The block name is `routine`; load accepts a DSS id and returns a `scheduleId`. `routines-page.tsx` composes the list, detail, and new-routine views and imports discover state from `routine-suggestions` (`routines/routines-page.tsx:15`). `agents-view` lazy-loads `RoutinesPage` (`agents-view/route-views.tsx:26-28`). Routes `routines`, `routines/new`, and `routines/:routineId` render `AgentsRouteView` (`app-router-view.tsx:351-363`).
