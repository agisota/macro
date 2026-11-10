---
type: C4 Component
title: Agent reviews
status: stable
groma:
  id: primitives-import-review
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/primitives/import-review.ts
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/components/review-navigation.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/components/import-plan-row.tsx
      symbol: ImportPlanRow
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/components/review-deck.tsx
      symbol: ReviewDeck
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/core/import-plan.ts
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/views/persisted-review.tsx
      symbol: PersistedReview
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/views/review-stack.tsx
      symbol: ReviewStack
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/core/review.ts
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/queries/import-plan.ts
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/queries/reviews.ts
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/components/import-plan-card.tsx
      symbol: ImportPlanCard
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/queries/keys.ts
      symbol: reviewKeys
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/views/import-review.tsx
      symbol: ImportReview
    - scanner: typescript
      file: apps/web/src/features/agent-reviews/primitives/review-controller.ts
      symbol: createReviewController
  technology: SolidJS
  group: Agents
description: Import and persisted review stacks.
---

A `Review` is the serialized review record. `decisionWakesAgent` is false for edits, and also false when an import is submitted, because approving an import only starts its write; the agent answers when the write settles. Views and queries were not opened.
