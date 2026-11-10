---
type: C4 Component
title: transcription
status: stable
groma:
  id: transcriber
  parent: macro-transcriber
  code:
    - scanner: python
      file: services/transcription/transcriber.py
  technology: TypeScript
description: Scanned helper for transcription
---

`resemblyzer` imports `webrtcvad`, which currently emits a noisy setuptools `pkg_resources` deprecation warning once per worker process. It is not actionable for the agent, so keep production logs focused on runtime issues.
