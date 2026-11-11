---
type: C4 Component
title: Dictation
status: stable
groma:
  id: composer-dictation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/dictation/composer-dictation.ts
      symbol: createComposerDictation
    - scanner: typescript
      file: apps/web/src/features/dictation/core/recording.ts
    - scanner: typescript
      file: apps/web/src/features/dictation/availability.ts
      symbol: isDictationAvailable
    - scanner: typescript
      file: apps/web/src/features/dictation/core/volume.ts
    - scanner: typescript
      file: apps/web/src/features/dictation/core/types.ts
    - scanner: typescript
      file: apps/web/src/features/dictation/components/volume-timeline.tsx
      symbol: VolumeTimeline
    - scanner: typescript
      file: apps/web/src/features/dictation/components/dictation-controls.tsx
    - scanner: typescript
      file: apps/web/src/features/dictation/primitives/create-recorded-dictation.ts
      symbol: createRecordedDictation
    - scanner: typescript
      file: apps/web/src/features/dictation/browser/audio-recorder.ts
  technology: SolidJS
  group: Shell
description: Dictation availability gate.
---

`isDictationAvailable` is true only when `enableDictation` is on and the device is not touch. Off means no button and no recorder; the controller reports `unavailable`. The recorder implementation was not opened.
