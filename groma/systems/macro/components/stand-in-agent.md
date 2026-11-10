---
type: C4 Component
title: stand_in_agent
status: stable
groma:
  id: stand-in-agent
  parent: macro
  code:
    - scanner: python
      file: crates/coding_agent_worker/e2e/stand_in_agent.py
description: Scanned source
---

Well under the shortest update handoff, so `output-in-gap` always sees frames written while nothing was reading; at 20 ms a fast handoff could fall between two ticks and fail the test.
