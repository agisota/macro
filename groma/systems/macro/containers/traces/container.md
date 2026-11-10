---
type: C4 Container
title: AI editing worker
status: stable
groma:
  id: traces
  parent: macro
  technology: Hono, Cloudflare Workers
description: Applies AI edits to open documents
---

Hono worker on Cloudflare. The scanner titled it traces because that package script imported the worker tree. The web client POSTs /edit here.
