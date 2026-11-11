---
type: C4 Component
title: Browser colors
status: stable
groma:
  id: browser-colors
  parent: email-renderer
  code:
    - scanner: typescript
      file: packages/email-renderer/src/browser/colors.ts
    - scanner: typescript
      file: packages/email-renderer/src/browser/index.ts
    - scanner: typescript
      file: packages/email-renderer/src/browser/email-body-containment-css.ts
      symbol: EMAIL_BODY_CONTAINMENT_CSS
    - scanner: typescript
      file: packages/email-renderer/src/browser/renderer.ts
  technology: TypeScript
description: Prepares one HTML or plaintext mail body
---

Sanitizes and trims quoted mail, including Gmail signature classes, with parse5 and css-tree. It does not fetch.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/email-renderer/src/browser/renderer.ts](../../../../../../packages/email-renderer/src/browser/renderer.ts) | [apps/web/src/features/email-message/primitives/email-message-body.ts](../../../../../../apps/web/src/features/email-message/primitives/email-message-body.ts) | Invokes supplied callback: resolveImages | typescript |
