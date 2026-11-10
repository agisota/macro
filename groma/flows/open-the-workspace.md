---
type: Groma Flow
title: Open the workspace
groma:
  id: open-the-workspace
---

A workspace member opens the signed-in client. The shell then lazy-loads the mail pane.

## Steps

| From | To | Action |
| --- | --- | --- |
| [Workspace member](../actors/workspace-member.md) | [Web client entry](../systems/macro/containers/macro-web/components/app-router-view.md) | Open the workspace |
| [Web client entry](../systems/macro/containers/macro-web/components/app-router-view.md) | [Email view](../systems/macro/containers/macro-web/components/email-view.md) | Load the mail pane |
