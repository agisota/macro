---
type: C4 Component
title: UserGroup
status: stable
groma:
  id: component-usergroup
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/UserGroup.tsx
      symbol: UserGroup
  technology: SolidJS
  group: Workspace core
description: Displays a group of user avatars in an overlapping style with an overflow indicator
---

Displays a group of user avatars in an overlapping style with an overflow indicator.  Uses --avatar-group-separator CSS variable for ring color (defaults to --color-surface). Parent containers can override to match hover backgrounds:  @example <div class="hover:bg-hover hover:[--avatar-group-separator:var(--color-hover)]"> <UserGroup userIds={ids} /> </div>
