---
type: C4 Container
title: Служба уведомлений
status: stable
groma:
  id: notification-service
  parent: macro
  technology: Rust, Postgres, push/email
description: Inbox уведомлений, push и email-дайджесты
---

Обрабатывает пользовательские уведомления, отписки и доставку через поддерживаемые каналы; не заменяет realtime Gateway.
