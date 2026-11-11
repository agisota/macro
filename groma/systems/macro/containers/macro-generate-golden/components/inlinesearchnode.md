---
type: C4 Component
title: InlineSearchNode
status: stable
groma:
  id: inlinesearchnode
  parent: macro-generate-golden
  code:
    - scanner: typescript
      file: packages/lexical-core/nodes/InlineSearchNode.ts
  technology: Lexical
description: Shared editor nodes and Markdown conversion
---

Mention, image, and database-query nodes plus Markdown import/export. A GitHub pull-request chip checks a URL string and does not call GitHub.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/actionsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/actions/actionsPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/agent-commands/agentCommandsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/agent-commands/agentCommandsPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/emojis/emojisPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/emojis/emojisPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/mentions/mentionsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/mentions/mentionsPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/skills/skillsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/skills/skillsPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/snippets/snippetsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/snippets/snippetsPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
| [packages/lexical-core/nodes/InlineSearchNode.ts](../../../../../../packages/lexical-core/nodes/InlineSearchNode.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/plugins/tags/tagsPlugin.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/plugins/tags/tagsPlugin.ts) | Invokes supplied callbacks: onCreate, onDestroy, onUpdate | typescript |
