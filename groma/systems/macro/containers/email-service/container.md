---
type: C4 Container
title: Почтовая служба
status: stable
groma:
  id: email-service
  parent: macro
  technology: Rust, Gmail API, Microsoft Graph, SQS
description: Standalone REST API почты и mailbox operations
---

Обрабатывает HTTP-маршруты писем, черновиков, вложений, настроек и синхронизации. Фоновые consumers вынесены в Email Workers; часть email GraphQL-домена исполняется in-process в DSS, а не через HTTP-вызов этой службы.
