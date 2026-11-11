---
type: C4 Component
title: Graphql entity
status: stable
groma:
  id: graphql-entity
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/graphql/entity.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/graphql-optimistic.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/graphql/assignment-links.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/options.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/option-deltas.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/entity.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/keys.ts
      symbol: propertiesKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/graphql/mutation-settlements.ts
      symbol: observePropertyMutationSettlements
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/tags.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/definitions.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/graphql/entity-options.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/options-data.ts
      symbol: usablePropertyOptions
    - scanner: typescript
      file: apps/web/src/lib/queries/properties/in-flight-options.ts
  technology: SolidJS
  group: Data queries
description: Builds the input used to load one entity's properties.
---

Builds the input used to load one entity's properties.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/properties/graphql/entity.ts](../../../../../../apps/web/src/lib/queries/properties/graphql/entity.ts) | [apps/web/src/features/projects/queries/project-sources.ts](../../../../../../apps/web/src/features/projects/queries/project-sources.ts) | Invokes supplied callback: onSuccess | typescript |
