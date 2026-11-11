---
type: C4 Component
title: Whatsapp passkey
status: stable
groma:
  id: whatsapp-passkey
  parent: macro-web
  code:
    - scanner: rust
      file: apps/web/tauri/src-tauri/src/whatsapp_passkey.rs
      symbol: whatsapp_passkey_authenticate
---
