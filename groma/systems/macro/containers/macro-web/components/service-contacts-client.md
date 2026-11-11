---
type: C4 Component
title: service contacts
status: stable
groma:
  id: service-contacts-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-contacts/client.ts
      symbol: contactsClient
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-contacts/generated/schemas/getContactsResponse.ts
      symbol: GetContactsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-contacts/generated/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-contacts/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-contacts/generated/schemas/addContactRequest.ts
      symbol: AddContactRequest
  technology: TypeScript
  group: Service clients
description: Client for the service contacts host
---

TypeScript client under service-contacts. Calls a Macro host, not a vendor API, unless a rule above says otherwise.
