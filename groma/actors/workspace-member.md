---
type: C4 Actor
title: Участник рабочего пространства
status: stable
groma:
  id: workspace-member
description: Работает с почтой, сообщениями, задачами, документами и агентами
---

Человек в команде Macro. Открывает подписанный клиент, редактирует документы с другими участниками и управляет своими интеграциями и сессиями агентов.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [workspace-member](workspace-member.md) | [macro-web](../systems/macro/containers/macro-web/container.md) | Открывает рабочее пространство | SolidJS |
| [workspace-member](workspace-member.md) | [marketing](../systems/macro/containers/marketing/container.md) | Читает публичный сайт | HTTPS |
| [workspace-member](workspace-member.md) | [root](../systems/macro/containers/macro-web/components/root.md) | Запускает подписанный клиент | UI |
| [workspace-member](workspace-member.md) | [helpers](../systems/macro/containers/macro-web/components/helpers.md) | Открывает документ | UI |
| [workspace-member](workspace-member.md) | [agentcomposer](../systems/macro/containers/macro-web/components/agentcomposer.md) | Отправляет команду агенту | UI |
