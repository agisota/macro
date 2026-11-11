---
type: C4 Container
title: Authentication service
description: Login, teams, and billing sessions
status: draft
groma:
  id: authentication-service
  parent: macro
  technology: Rust, ECS
---

FusionAuth login, API keys, and Stripe checkout routes. The browser calls this host, not FusionAuth directly. Rust source is not owned.
