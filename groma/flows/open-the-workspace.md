---
type: Groma Flow
title: Открытие рабочего пространства
groma:
  id: open-the-workspace
---

Участник открывает подписанный клиент. Root предзагружает идентичность через query и Authentication API, затем продолжает монтирование рабочего пространства.

## Steps

| From | To | Action |
| --- | --- | --- |
| [Участник](../actors/workspace-member.md) | [Root](../systems/macro/containers/macro-web/components/root.md) | Открыть клиент |
| [Root](../systems/macro/containers/macro-web/components/root.md) | [Query пользователя](../systems/macro/containers/macro-web/components/user-info.md) | Предзагрузить идентичность |
| [Query пользователя](../systems/macro/containers/macro-web/components/user-info.md) | [Auth client](../systems/macro/containers/macro-web/components/service-auth-client.md) | Вызвать getLegacyUserPermissions |
| [Auth client](../systems/macro/containers/macro-web/components/service-auth-client.md) | [User API](../systems/macro/containers/authentication-service/components/user.md) | Получить пользователя и разрешения |
