---
type: C4 Component
title: Адаптер Gmail API
status: stable
groma:
  id: gmail-client-src-lib
  parent: email-service
  code:
    - scanner: rust
      file: crates/gmail_client/src/lib.rs
description: Выполняет авторизованные операции с Gmail
---

Инкапсулирует provider-specific запросы и типы, позволяя домену почты работать через порты.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [crates/gmail_client/src/lib.rs](../../../../../../crates/gmail_client/src/lib.rs) | [google](../../../../../externals/google.md) | Синхронизирует и отправляет почту | Gmail API |
