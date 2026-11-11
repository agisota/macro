---
type: C4 Component
title: Block call constants
status: stable
groma:
  id: block-call-constants
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-call/constants.ts
    - scanner: typescript
      file: apps/web/src/features/block-call/component/transcript-playback.ts
    - scanner: typescript
      file: apps/web/src/features/block-call/views/CallDetailView.tsx
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallRecording/call-recording-utils.ts
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallRecording/CallRecordingVideo.tsx
      symbol: CallRecordingVideo
    - scanner: typescript
      file: apps/web/src/features/block-call/utils.ts
      symbol: formatCallDuration
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallRecording/CallRecordingSummary.tsx
      symbol: CallRecordingSummarySection
    - scanner: typescript
      file: apps/web/src/features/block-call/component/use-call-again.ts
      symbol: useCallAgain
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallTranscript.tsx
      symbol: CallTranscript
    - scanner: typescript
      file: apps/web/src/features/block-call/queries/recording-download.ts
      symbol: callRecordingDownloadSource
    - scanner: typescript
      file: apps/web/src/features/block-call/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-call/sidebar/incoming-calls.ts
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallRecording/CallRecordingBody.tsx
      symbol: CallRecordingBody
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallRecording/CallRecordingSplitHeader.tsx
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallBlockAdapter.tsx
      symbol: CallBlockAdapter
    - scanner: typescript
      file: apps/web/src/features/block-call/component/CallRecording/CallRecordingParticipants.tsx
      symbol: CallRecordingParticipantsSection
    - scanner: typescript
      file: apps/web/src/features/block-call/component/sidepanel/CallSidePanelSections.tsx
      symbol: CallSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-call/call-route.ts
  technology: SolidJS
  group: Calls
description: '`call` block; description string is empty.'
---

Load returns missing when `ENABLE_CALLS` is off or the source is not DSS. It fetches the record through the call service client and primes the record query cache. `CallDetailRouteView` lazy-loads this feature's route views (`lazy-route-views.ts:17-19`). `Root.tsx` mounts `IncomingCallEvents` from `block-call/sidebar/incoming-calls` (`Root.tsx:13`, `Root.tsx:241`).
