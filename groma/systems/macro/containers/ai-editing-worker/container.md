---
type: C4 Container
title: AI editing worker
description: Browser-facing document edits
status: draft
groma:
  id: ai-editing-worker
  parent: macro
  technology: Hono, Cloudflare Workers
---

Cloudflare Worker. The web client POSTs /edit with a document permission token. This draft is the service boundary; the scanned worker files sit on the traces container.
