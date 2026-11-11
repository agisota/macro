---
type: C4 Component
title: Search bar button
status: stable
groma:
  id: search-bar-button
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/search-bar-button.tsx
      symbol: SearchRailButton
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/sidebar-rail.tsx
      symbol: SidebarRail
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/app-update.ts
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/list-nav.tsx
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/footer-actions.tsx
      symbol: FooterActions
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/update-button.tsx
      symbol: UpdateButton
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/more-menu.tsx
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/customize-sidebar-modal.tsx
      symbol: CustomizeSidebarModal
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/return-to-call-button.tsx
      symbol: ReturnToCallButton
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/queries/use-next-meeting-badge.ts
      symbol: useNextMeetingBadge
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/create-button.tsx
      symbol: SidebarRailCreateButton
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/unread-dot.tsx
      symbol: SidebarUnreadDot
  technology: SolidJS
description: Search bar button inside the signed-in client.
---

Search and command-menu discovery in the compact rail.
