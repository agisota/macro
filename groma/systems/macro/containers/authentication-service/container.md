---
type: C4 Container
title: Служба аутентификации
status: stable
groma:
  id: authentication-service
  parent: macro
  technology: Rust, FusionAuth, OAuth, Stripe
description: Вход, идентичность, связывание аккаунтов и checkout
---

Отвечает за FusionAuth-backed login, JWT, signup policy, OAuth-подключения, ключи агентов и Stripe checkout; авторизация сущностей остаётся в других модулях.
