---
type: C4 Component
title: bootstrap
status: stable
groma:
  id: deno-bootstrap
  parent: macro
  code:
    - scanner: javascript
      file: crates/code_execution/src/outbound/deno/bootstrap.mjs
    - scanner: javascript
      file: crates/code_execution/src/outbound/deno/timers.mjs
  group: Unscanned Rust helpers
description: Scanned source
---

Trusted bootstrap: credentials arrive once on stdin, then user code is imported dynamically so module reads are checked against the scratch-only read grant.
