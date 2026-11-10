---
type: Groma Project
title: Macro
groma:
  profile: architecture
description: One workspace for mail, chat, docs, tasks, agents, and CRM
---

Macro is the product in this repository. A workspace member uses one SolidJS client. Rust services on ECS and Cloudflare Workers hold the mailbox, the workspace graph, sync rooms, and agents. This map was curated from a TypeScript-first scan. Rust source has no owner because the Rust scanner's 120s worker limit cannot finish the workspace, so those services are ghost containers with no file edges.
