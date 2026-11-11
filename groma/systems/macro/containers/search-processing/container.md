---
type: C4 Container
title: Search processing
description: Indexes workspace objects
status: draft
groma:
  id: search-processing
  parent: macro
  technology: Rust, ECS
---

Rust service that writes the workspace search index and consumes the search events. The scan did not own these files until this pass.
