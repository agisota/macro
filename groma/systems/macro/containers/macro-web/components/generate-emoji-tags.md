---
type: C4 Component
title: Generate emoji tags
status: stable
groma:
  id: generate-emoji-tags
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-emoji-tags.ts
  technology: SolidJS
  group: Development tooling
description: Emits a slim hexcode-to-tags map for emoji search so the app bundles CLDR keyword annotations without the rest of the emojibase dataset
---

Emits a slim hexcode-to-tags map for emoji search so the app bundles CLDR keyword annotations without the rest of the emojibase dataset. Keys are FE0F insensitive to match the join in src/lib/core/component/Emoji/emojis.ts. Rerun with `bun run gen-emoji-tags` after bumping emojibase-data.
