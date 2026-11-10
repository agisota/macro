---
type: C4 Component
title: Onboarding
status: stable
groma:
  id: onboarding-onboarding
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/onboarding/onboarding.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/google-accounts-step.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/team-contacts.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/workspace-intro.tsx
      symbol: WorkspaceIntro
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/onboarding-flow-view.tsx
      symbol: OnboardingFlowView
    - scanner: typescript
      file: apps/web/src/features/onboarding/create-app-onboarding-context.ts
      symbol: createAppOnboardingContext
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/flow-finish.ts
      symbol: createFlowFinish
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/team-panels.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/tools.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/team-setup.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/flow-storage.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/plan-comparison.ts
      symbol: PLAN_COMPARISON
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/email-accounts.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/outlook-availability.ts
      symbol: createAppOutlookAvailability
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/routine-suggestion-row.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/signup-journey.ts
      symbol: createSignupJourney
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/workspace-accent.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/onboarding-shell.tsx
      symbol: OnboardingShell
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/macro-mark-icon.tsx
      symbol: MacroMarkIcon
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/email-step.tsx
      symbol: EmailStep
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/tool-catalog.ts
      symbol: createOnboardingToolCatalog
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/onboarding-flow.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/signup-draft.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/workspace-accent.ts
      symbol: createWorkspaceAccent
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/motion/security-handoff.ts
      symbol: animateSecurityHandoff
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/tool-connect.ts
      symbol: createOnboardingToolConnect
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/routines-step.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/story-steps.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/motion/step-change.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/next-target.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/plan-confirmation.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/staff.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/story-stage-view.tsx
      symbol: StoryStageView
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/sign-in-instead.tsx
      symbol: SignInInstead
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/plan-comparison-view.tsx
      symbol: PlanComparisonView
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/routines-step.tsx
      symbol: RoutinesStep
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/keys.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/feature-overview.tsx
      symbol: FeatureOverview
    - scanner: typescript
      file: apps/web/src/features/onboarding/apply-workspace-accent.ts
      symbol: applyWorkspaceAccent
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/bypass-button.tsx
      symbol: BypassButton
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/steps.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/plan-step.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/story-stage.tsx
      symbol: StoryStage
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/tools-step.tsx
      symbol: ToolsStep
    - scanner: typescript
      file: apps/web/src/features/onboarding/core/team.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/step-fallback.tsx
      symbol: StepFallback
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/team-step.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/tool-tile.tsx
      symbol: ToolTile
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/controls.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/onboarding-pending-view.tsx
      symbol: OnboardingPendingView
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/plan-comparison.tsx
      symbol: PlanComparison
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/signup-journey-view.tsx
      symbol: SignupJourneyView
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/trust-details.tsx
      symbol: OnboardingTrustDetails
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/routine-suggestions.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/components/motion/step-transition.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/views/team-step.tsx
      symbol: TeamStep
    - scanner: typescript
      file: apps/web/src/features/onboarding/queries/loadable-query.ts
      symbol: loadableQuery
    - scanner: typescript
      file: apps/web/src/features/onboarding/primitives/tools.ts
      symbol: orderOnboardingTools
  technology: SolidJS
description: Desktop onboarding steps after signup.
---

Agents are redirected to `/` and never onboard, even if they open the link. The requested step is captured once, then removed from the URL so later progress wins on reload. `auth/auth.tsx` imports `Onboarding` from this file. `AppChrome` uses `onboardingRedirectPath` from `onboarding/core/next-target` (`Layout.tsx:26`, `Layout.tsx:251`).
