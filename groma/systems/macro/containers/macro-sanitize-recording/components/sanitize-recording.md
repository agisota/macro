---
type: C4 Component
title: Development tooling
status: stable
groma:
  id: sanitize-recording
  parent: macro-sanitize-recording
  code:
    - scanner: python
      file: crates/folds/agent_fold/scripts/sanitize_recording.py
description: Not a product runtime
---

Test, script, or generator. Excluded from future scans. Kept only because a scan had already stored it.
