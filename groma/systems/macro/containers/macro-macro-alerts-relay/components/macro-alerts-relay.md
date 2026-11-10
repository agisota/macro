---
type: C4 Component
title: macro-alerts-relay
status: stable
groma:
  id: macro-alerts-relay
  parent: macro-macro-alerts-relay
  code:
    - scanner: python
      file: infra/stacks/observability/nixos/goalert/macro-alerts-relay.py
description: Scanned source
---

GoAlert abandons a webhook after three seconds.
