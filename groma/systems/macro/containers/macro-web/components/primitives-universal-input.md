---
type: C4 Component
title: Universal input
status: stable
groma:
  id: primitives-universal-input
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/universal-input/primitives/universal-input.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/recurrence.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/queries/input-people.ts
      symbol: useInputPeople
    - scanner: typescript
      file: apps/web/src/features/universal-input/inference.ts
      symbol: createInferenceSource
    - scanner: typescript
      file: apps/web/src/features/universal-input/components/draft-editor.tsx
      symbol: DraftEditor
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/local-fields.ts
      symbol: localFields
    - scanner: typescript
      file: apps/web/src/features/universal-input/context/input-session.ts
      symbol: InputSession
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/email-draft.tsx
      symbol: EmailDraft
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/failure.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/queries/extracted-search.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/queries/composer-recipients.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/components/type-icon.tsx
      symbol: TypeIcon
    - scanner: typescript
      file: apps/web/src/features/universal-input/actions.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/people-terms.ts
      symbol: inputPeopleTerms
    - scanner: typescript
      file: apps/web/src/features/universal-input/use-universal-input.ts
      symbol: useUniversalInputEnabled
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/message-draft.tsx
      symbol: MessageDraft
    - scanner: typescript
      file: apps/web/src/features/universal-input/queries/suggested-task-properties.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/search.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/context/telemetry.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/primitives/inference-queue.ts
      symbol: createInferenceQueue
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/universal-composer.tsx
      symbol: UniversalComposer
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/ai-draft.tsx
      symbol: AiDraft
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/input.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/context/capabilities.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/calendar-draft.tsx
      symbol: CalendarDraft
    - scanner: typescript
      file: apps/web/src/features/universal-input/queries/task-field-source.ts
      symbol: createTaskFieldSource
    - scanner: typescript
      file: apps/web/src/features/universal-input/universal-input.tsx
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/note-draft.tsx
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/search-draft.tsx
      symbol: SearchDraft
    - scanner: typescript
      file: apps/web/src/features/universal-input/primitives/recipient-selection.ts
      symbol: createRecipientSelection
    - scanner: typescript
      file: apps/web/src/features/universal-input/task-fields.tsx
      symbol: TaskFields
    - scanner: typescript
      file: apps/web/src/features/universal-input/telemetry.ts
      symbol: createInputTelemetry
    - scanner: typescript
      file: apps/web/src/features/universal-input/core/recipients.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/queries/task-properties.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/views/task-draft.tsx
      symbol: TaskDraft
  technology: SolidJS
  group: Shell
description: Cross-entity composer input.
---

The file builds a chat editor, mention attachments, task fields, and telemetry, and imports `openEntityInSplitFromUnifiedList` from `next-soup`. The primitive imports an inference queue and ranks intents (`universal-input/primitives/universal-input.ts:3-19`). No route mounts this directory in the opened router file.
