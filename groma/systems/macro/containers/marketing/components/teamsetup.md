---
type: C4 Component
title: Components TeamSetup
status: stable
groma:
  id: teamsetup
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/TeamSetup.tsx
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/StorySteps.tsx
    - scanner: typescript
      file: apps/marketing/src/features/setup/core/onboardingIntegrationCatalog.ts
    - scanner: typescript
      file: apps/marketing/src/features/setup/flow/teamInvites.ts
    - scanner: typescript
      file: apps/marketing/src/features/setup/flow/ToolsStep.tsx
      symbol: ToolsStep
    - scanner: typescript
      file: apps/marketing/src/features/setup/views/PublicOnboarding.tsx
      symbol: PublicOnboarding
    - scanner: typescript
      file: apps/marketing/src/features/setup/preview.tsx
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/PlanSelection.tsx
      symbol: PlanSelection
    - scanner: typescript
      file: apps/marketing/src/features/setup/core/planComparison.ts
      symbol: PLAN_COMPARISON
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/IntegrationResults.tsx
      symbol: IntegrationResults
    - scanner: typescript
      file: apps/marketing/src/features/setup/primitives/animateOnboardingStep.ts
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/WorkspaceIntro.tsx
      symbol: WorkspaceIntro
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/PlanComparison.tsx
      symbol: PlanComparison
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/ConnectorIcon.tsx
      symbol: ConnectorIcon
    - scanner: typescript
      file: apps/marketing/src/features/setup/flow/onboardingConnectorConfig.ts
    - scanner: typescript
      file: apps/marketing/src/features/setup/primitives/animateSecurityHandoff.ts
      symbol: animateSecurityHandoff
    - scanner: typescript
      file: apps/marketing/src/features/setup/views/PublicTeamStep.tsx
      symbol: PublicTeamStep
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/PaymentPreview.tsx
      symbol: PaymentPreview
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/StoryStage.tsx
    - scanner: typescript
      file: apps/marketing/src/features/setup/core/onboardingIntegrations.ts
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/OnboardingTrustDetails.tsx
      symbol: OnboardingTrustDetails
    - scanner: typescript
      file: apps/marketing/src/features/setup/core/featuredIntegrations.ts
      symbol: FEATURED_MCP_SERVERS
    - scanner: typescript
      file: apps/marketing/src/features/setup/components/GoogleAccountsStep.tsx
  technology: SolidJS
description: Public signup introduction
---

Connections continue in the authenticated app. This page is the Vite start input, not a package script.
