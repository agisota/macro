---
type: C4 Component
title: EmojiUsage
status: stable
groma:
  id: emojiusage
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/emojiUsage.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/EmojiSelector.tsx
      symbol: EmojiSelector
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/emoji-rows.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/emoji-catalog.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/emojis.ts
  technology: SolidJS
  group: Workspace core
description: A length against the row's query container, from `emojiSize` below.
---

A length against the row's query container, from `emojiSize` below.
