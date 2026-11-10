---
type: C4 Component
title: Block video
status: stable
groma:
  id: block-video-definition
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-video/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-video/core/video.ts
    - scanner: typescript
      file: apps/web/src/features/block-video/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-video/component/Block.tsx
      symbol: BlockVideo
    - scanner: typescript
      file: apps/web/src/features/block-video/component/VideoContent.tsx
      symbol: VideoContent
    - scanner: typescript
      file: apps/web/src/features/block-video/signal/blockData.ts
  technology: SolidJS
  group: Files
description: Video playback block.
---

Accepted MIME types come from `VIDEO_MIMES` in `./core/video`. Load uses the storage service client and a presigned URL helper. Live tracking is off. Playback eligibility is `isVideoPlaybackEnabled`. The player component was not opened.
