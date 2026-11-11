---
type: C4 Component
title: Browser test fig chrome.browser.e2e
status: stable
groma:
  id: fig-chrome-browser-e2e
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-chrome.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/web-app/index.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/draft-owner-fixture.tsx
      symbol: DraftOwnerFixture
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/fixture-page.ts
    - scanner: typescript
      file: packages/graphics/tests/helpers/peer-lab.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/fake-coordinator.shared-worker.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/preview-adapters.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/review-regressions.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/linear-import-fixture.tsx
      symbol: LinearImportFixture
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/ai-collaboration.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/schedule-recovery-fixture.tsx
      symbol: ScheduleRecoveryFixture
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/draft-recovery.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/browser-test/routine-mention.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/artifact-sandbox.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/browser-test/call-thread.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/command-input.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/fixture-keys.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/privacy/preview-adapters.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/dynamodb.ts
      symbol: DynamoDBTable
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/task-filter-adapters.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/playwright.mobile.config.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/client.ts
      symbol: client
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/range-move.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/bulk-upload/upload-extractor-lambda-handler.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/agent-review.app.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-media.browser.e2e.ts
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Tests/OverlayHarness/ParticipantStripTests.swift
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/delete_indices.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/table.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileDownload/browser-test/main.tsx
    - scanner: typescript
      file: apps/web/src/lib/i18n/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/redis.ts
    - scanner: typescript
      file: infra/stacks/search-processing-service/service.ts
      symbol: SearchProcessingService
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-design-ui.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/tests/mutation.tsx
      symbol: mountEmailMutation
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/document-upload-finalizer-lambda.ts
    - scanner: typescript
      file: infra/packages/shared/src/kafka_cluster_policy.ts
      symbol: getKafkaClusterPolicy
    - scanner: typescript
      file: infra/stacks/notification-service/retention.ts
      symbol: NotificationRetention
    - scanner: typescript
      file: infra/stacks/contacts-service/index.ts
    - scanner: javascript
      file: tooling/scripts/lexmark_test.mjs
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/account-sources.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/browser-test/playwright.config.ts
    - scanner: javascript
      file: apps/web/scripts/database-profile/measure.mjs
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-ribbon.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/index.ts
    - scanner: typescript
      file: packages/sdk/scripts/bump.ts
    - scanner: javascript
      file: apps/web/scripts/ios-app-store.test.mjs
      symbol: runCli
    - scanner: typescript
      file: infra/stacks/fusionauth-instance/theme-ids.ts
      symbol: FUSIONAUTH_THEME_IDS
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/cloud-storage-service.ts
      symbol: CloudStorageService
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/open-fixture.ts
      symbol: openFixture
    - scanner: typescript
      file: infra/stacks/observability/settings.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/browser-test/call-chat.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/email-service/s3-cloudfront-distribution.ts
    - scanner: typescript
      file: apps/web/src/features/reminders/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/fusionauth-instance/defaultTenant.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/task-filter-people.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/tests/fake-onboarding-context.ts
    - scanner: typescript
      file: infra/packages/lambda/src/worker_trigger_lambda.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Resize/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/database/tests/fake-rows-source.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/editor.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/vite.config.ts
    - scanner: javascript
      file: apps/web/src/features/block-code/scripts/fix-monaco-dups.js
      symbol: optimizeDependencies
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/entity-preview.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-morph-presenter.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/cache-wasm/budgets.ts
      symbol: CACHE_WASM_BUDGETS
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/rapid.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/outlook-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/playwright.production.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/calendar-guests.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/shared/src/service_urls.ts
    - scanner: typescript
      file: infra/stacks/fusionauth-instance/update-theme-message.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/property-user-adapters.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/onboarding-contacts.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/tests/editor.ts
    - scanner: typescript
      file: apps/web/src/features/routines/tests/catalog.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/utils/remove_field.ts
      symbol: removeField
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fixture.tsx
    - scanner: typescript
      file: infra/stacks/link-sharing/s3-cloudfront-distribution.ts
    - scanner: typescript
      file: packages/observability/browser-test/export.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/regressions.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/generate-slack-emoji-map.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/global-search-service-fixture.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/playwright.app.config.ts
    - scanner: typescript
      file: infra/packages/shared/src/index.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/queue_alarms.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/agent.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/creation/creation.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-browser-wire.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-review.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/browser-test/fixture.tsx
    - scanner: typescript
      file: infra/stacks/link-sharing/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/network.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/calendar/graphql/tests/fixtures.ts
    - scanner: typescript
      file: infra/stacks/observability/deploy/image-key.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/contacts.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/tests/connector-icons.ts
      symbol: fixtureConnectorIcon
    - scanner: typescript
      file: infra/packages/shared/src/search_event_queue.ts
      symbol: getSearchEventQueue
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/lists.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/email-sfs-delete-handler/index.ts
    - scanner: javascript
      file: apps/web/scripts/ios-verify-native-bump.mjs
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/task-reference-fixture.tsx
    - scanner: typescript
      file: infra/stacks/fusionauth-instance/index.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/spacing.browser.e2e.ts
    - scanner: javascript
      file: apps/web/scripts/tests/fake-asset-upload.mjs
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/document.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/browser-wire.ts
    - scanner: javascript
      file: infra/stacks/fusionauth-instance/templates/populate_jwt_local.js
      symbol: populate
    - scanner: typescript
      file: packages/collaboration/src/websocket/tests/websocket-test-utils.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/create_entity_id.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/creation/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/calendar-replacement-fixture.tsx
      symbol: CalendarReplacementFixture
    - scanner: typescript
      file: apps/web/src/features/auth/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/pipelines.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/archive.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/artifact.e2e.ts
    - scanner: typescript
      file: infra/stacks/calendar-service/index.ts
    - scanner: typescript
      file: apps/docs/scripts/generate-changelog.ts
    - scanner: typescript
      file: infra/stacks/database-observability/index.ts
    - scanner: typescript
      file: infra/stacks/lexical-service/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/fuzz/fuzz.browser.e2e.ts
    - scanner: python
      file: infra/stacks/observability/assets/refresh-secrets.py
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/render.playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/checkboxes.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/recipient-ranking.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/soup-filters.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/contact-edit.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/macrodb.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/vite.config.ts
    - scanner: javascript
      file: apps/web/src/features/command/browser-test/measure.mjs
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileDownload/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/tauri/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/activity/tests/mock-context.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileDownload/browser-test/download.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/database-query/tests/plain-answer-display.tsx
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/search-extractions-fixture.ts
      symbol: fixtureSearchFields
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/notification-projection.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/ForwardMessageComposer/browser-test/images.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/preview/get-or-create-id.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/feature-flags-fixture.ts
    - scanner: typescript
      file: infra/stacks/static-file-service/static-file-service.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileDownload/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/packages/service/src/dynamodb.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/board.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-shortcuts.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/image_version.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/graphql-soup.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/browser-test/source.ts
    - scanner: typescript
      file: infra/stacks/agent-schedule-service/index.ts
    - scanner: typescript
      file: apps/web/src/features/local-runtime/browser-test/fixture.tsx
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/logs.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/browser-test/access.browser.e2e.ts
    - scanner: typescript
      file: apps/web/tests/native/fixtures/server.ts
    - scanner: typescript
      file: infra/stacks/kafka-cluster/topics.ts
      symbol: getKafkaClusterTopics
    - scanner: javascript
      file: vendor/ironcalc/pkg/wasm.js
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/privacy/fixture.tsx
    - scanner: typescript
      file: infra/stacks/connection-gateway/index.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/browser-test/share.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/sql-people-join-fixture.tsx
      symbol: SqlPeopleJoinFixture
    - scanner: typescript
      file: apps/web/scripts/cache-wasm/cli.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/directive/browser-test/composer-menu.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/remove_field_from_index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/calendar-adapters.tsx
    - scanner: typescript
      file: apps/web/src/features/access-requests/tests/source.ts
      symbol: fakeSharingSource
    - scanner: typescript
      file: packages/observability/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/home/work-feed/tests/wire.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/collaboration.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/lexical-service/lexical-service.ts
      symbol: LexicalService
    - scanner: typescript
      file: apps/web/src/features/notifications/browser-test/message-read.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/regressions.ts
    - scanner: javascript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/ci_telemetry_preflight.js
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/browser-test-wasm-module.ts
      symbol: loadBrowserTestCacheWasm
    - scanner: typescript
      file: infra/stacks/observability/deploy/smoke.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/linear-import-adapters.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/playwright.config.ts
    - scanner: typescript
      file: apps/marketing/scripts/generate-agent-diff.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/input-references.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-cache.engine-worker.ts
    - scanner: typescript
      file: infra/stacks/notification-service/push.ts
      symbol: PushNotificationEventHandler
    - scanner: typescript
      file: infra/stacks/monitoring/goalert.ts
      symbol: goalertWebhooks
    - scanner: typescript
      file: apps/web/src/features/auth/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/team/team.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-shapes-geometry.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/entity/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/calendar-guests-fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/team/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/contact-directory-fixture.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/global-search.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/wasm-build-compatibility.ts
    - scanner: typescript
      file: infra/stacks/unfurl-service/unfurl-service.ts
      symbol: UnfurlService
    - scanner: typescript
      file: infra/packages/resources/src/resources/datadog.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-links.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/send.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/ForwardMessageComposer/browser-test/playwright.config.ts
    - scanner: python
      file: nix/dmg-layout.py
    - scanner: typescript
      file: infra/stacks/fusion-auth/fusionauth-service.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/sender.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/task-list-label-fixture.tsx
      symbol: TaskListLabelFixture
    - scanner: typescript
      file: infra/packages/resources/src/resources/telemetry.ts
      symbol: withTelemetry
    - scanner: typescript
      file: infra/stacks/monitoring/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/sql-people.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/browser-test/stacked-sheets.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/collab-fixture.tsx
    - scanner: typescript
      file: infra/packages/shared/src/doppler_environment.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/task-list-labels.browser.e2e.ts
    - scanner: typescript
      file: apps/web/tests/functional/vite.config.ts
    - scanner: typescript
      file: apps/web/scripts/android-assetlinks.ts
    - scanner: typescript
      file: tooling/seed_cli/seed-crm.ts
    - scanner: c
      file: nix/appimage/test_xkb.c
      symbol: main
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-smartart.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/notifications.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/remove_epoch_millis_date_mappings.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/mention-menu-fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Resize/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/database/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/tests/zip-fixtures.ts
    - scanner: typescript
      file: apps/web/tests/native/filter-matrix.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/code-paste.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/ForwardMessageComposer/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/tests/fake-media.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/ui-shim.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/split-panel-stub.tsx
      symbol: SplitPanel
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/calendar-points.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/command-input-fixture.tsx
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/whatsapp-session.ts
    - scanner: typescript
      file: apps/web/src/features/local-runtime/browser-test/setup.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/helpers.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/reference.vite.config.ts
    - scanner: typescript
      file: apps/web/tests/e2e/email-folders.config.ts
    - scanner: javascript
      file: services/ai-editing-worker/scripts/collect-canvas-benchmark-traces.mjs
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-handoff.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/memory-sync.ts
      symbol: MemorySyncServer
    - scanner: javascript
      file: apps/web/scripts/android-play-status.mjs
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/search-app-fixture.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/stage-requirements.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/mobile-insets.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/shared/src/backfill_queue.ts
      symbol: getBackfillQueue
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/links.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/rds.ts
      symbol: Database
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/contact-removal.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/i18n/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/visibility.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/github-runners/index.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/queue.ts
      symbol: Queue
    - scanner: typescript
      file: infra/stacks/organization-retention/organization-retention-handler.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-viewer.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/cached-people-policy-fixture.tsx
      symbol: CachedPeoplePolicyFixture
    - scanner: typescript
      file: apps/web/src/lib/tauri/browser-test/cover.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/browser-test/emoji-picker.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/browser-test/item-bin.browser.e2e.ts
    - scanner: typescript
      file: apps/web/tests/e2e/helpers/scroll-presentation.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/copy_timestamp_data.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/drawings.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/document-storage/cloud-storage-cache.ts
      symbol: getRedisInstance
    - scanner: typescript
      file: services/coding-agent-worker/scripts/client.tsx
    - scanner: typescript
      file: apps/web/src/components/view-shell/browser-test/playwright.config.ts
    - scanner: typescript
      file: packages/email-renderer/tests/rendering.pw.ts
    - scanner: typescript
      file: apps/web/scripts/services.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/text-layout.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/tests/fake-sources.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/delete_user_entities.ts
    - scanner: python
      file: infra/stacks/observability/nixos/goalert/apply-config.py
      symbol: substitute
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/compute.ts
    - scanner: typescript
      file: infra/stacks/doppler-projects/doppler_project.ts
      symbol: DopplerProject
    - scanner: typescript
      file: infra/stacks/document-cognition-service/index.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/tests/calendar-team/browser.ts
    - scanner: typescript
      file: infra/stacks/doppler-projects/index.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/records.browser.e2e.ts
    - scanner: typescript
      file: .github/scripts/upload-handoff-artifact.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/browser-test/results.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/service/src/index.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/cache-startup.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/load-balancer.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/browser-test/scrollbar.tsx
      symbol: CustomScrollbar
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/onboarding.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/ai-panels.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/shared/src/macro_api_token.ts
      symbol: getMacroApiToken
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/browser-test/playwright.config.ts
    - scanner: javascript
      file: apps/web/scripts/write-bundle-manifest.test.mjs
      symbol: build
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/recipient-hotkeys.app.e2e.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/rum.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/mentions.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/vite.config.ts
    - scanner: typescript
      file: infra/stacks/authentication-service/service.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/oauth.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/schedule-recovery.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/stacks/observability/deploy/publish.ts
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/tests/fake-context.ts
      symbol: fakeConnectorImport
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/collaboration.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/creation/preview-adapters.ts
    - scanner: typescript
      file: packages/observability/browser-test/main.ts
      symbol: ProbeResult
    - scanner: typescript
      file: apps/web/src/features/email-view/browser-test/focus-rows.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/components/view-shell/browser-test/sidebar-title.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/task-references.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-design-system.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/independent-send-recovery.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/outlook-recovery.browser.e2e.ts
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Tests/OverlayHarness/OverlayGestureTests.swift
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/fake-cache.engine-worker.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/frecency.ts
    - scanner: typescript
      file: infra/stacks/document-storage/dynamodb.ts
      symbol: getDocumentMappingTable
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/collab-fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/block-image/browser-test/main.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/email-schedule-layout.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/observability/index.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/recipient-ranking-fixture.tsx
      symbol: RecipientRankingFixture
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/cache-wasm-packaging.browser.e2e.ts
    - scanner: javascript
      file: infra/stacks/web-app/contentEncodingLambda/index.js
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/creation/vite.config.ts
    - scanner: typescript
      file: infra/stacks/observability/deploy/iam-preflight.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/waf-observability.ts
      symbol: WafObservability
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/input-reference-fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/calendar-filters.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/dlp-handler/dlp-handler.ts
    - scanner: typescript
      file: apps/web/scripts/git-check.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-equations.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/browser-test/tiled-splits.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/generate-push-schema.ts
    - scanner: typescript
      file: apps/web/tests/native/fixtures/links-browser.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/memory-comments.tsx
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/browser-test/collab.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/settings/tests/select-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-review.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/email-suppression/email-suppression.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/copy_entity_id.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/main.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/crm-mentions.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/team/fixture.tsx
    - scanner: typescript
      file: infra/packages/service/src/ecr.ts
      symbol: EcrImage
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/memory-libraries.ts
    - scanner: typescript
      file: apps/web/src/features/auth/tests/render.tsx
      symbol: renderWithFakeAuth
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/tests/calendar-team/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/auth/browser-test/fixture-page.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-deck-setup.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/auth/browser-test/fixture-keys.ts
      symbol: FIXTURE_KEYS
    - scanner: typescript
      file: apps/web/src/features/calendar-view/browser-test/preview-adapters.tsx
    - scanner: javascript
      file: apps/web/scripts/publish-docx-server.js
      symbol: getDocxServerBuild
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/soup-filter-fixture.tsx
      symbol: SoupFilterFixture
    - scanner: javascript
      file: apps/web/scripts/ios-app-store.mjs
    - scanner: typescript
      file: infra/stacks/sha-cleanup/sha-cleanup-worker.ts
      symbol: ShaWorker
    - scanner: typescript
      file: services/sync-service/tests/utils.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/calls.ts
      symbol: nativeCallPushFailing
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/bulk-upload/upload-queue.ts
      symbol: BulkUploadQueue
    - scanner: typescript
      file: infra/stacks/monitoring/dashboards/web-performance.ts
      symbol: webPerformanceDashboard
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/loading.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/auth/tests/fake-auth-context.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/tests/reply.ts
      symbol: mountReplyComposer
    - scanner: typescript
      file: apps/web/tests/native/driver.ts
    - scanner: typescript
      file: vendor/ironcalc/bindings/wasm/types.ts
    - scanner: typescript
      file: infra/packages/vpc/src/index.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/tests/invite-offer-stub.tsx
      symbol: renderInviteOfferStub
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/rds.ts
    - scanner: typescript
      file: infra/packages/lambda/src/hash.ts
      symbol: generateContentHash
    - scanner: javascript
      file: apps/web/tests/native/android/smoke-utils.mjs
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/creation/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/utils/add_field.ts
      symbol: addFieldToIndex
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/colors.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/soup-filter-adapters.tsx
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/delete-document-handler.ts
      symbol: DeleteDocumentHandler
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/notes-filter-fixture.tsx
      symbol: CrmNotesFilterFixture
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/query-write-scope.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/tests/fake-solid-router.ts
      symbol: createFakeSolidRouter
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/kafka-cluster/index.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/browser-test/playwright.config.ts
    - scanner: javascript
      file: infra/stacks/fusion-auth/.eslintrc.js
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/test-account.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/spreadsheet.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/search-upload/index.ts
    - scanner: typescript
      file: infra/stacks/email-service/focus_worker.ts
      symbol: EmailFocusWorker
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/search-buckets.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/cluster.ts
      symbol: create_cluster
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/directive/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/service_target_group.ts
      symbol: ServiceTargetGroup
    - scanner: typescript
      file: apps/web/scripts/dev-https.ts
      symbol: devHttps
    - scanner: typescript
      file: apps/web/src/lib/core/natural-time/tests/load-wasm.ts
      symbol: loadNaturalTimeForTest
    - scanner: typescript
      file: apps/web/src/features/reminders/browser-test/reminder-menu.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/webhooks.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/slack-import-worker.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/main.tsx
    - scanner: typescript
      file: packages/sdk/scripts/resolve-release.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/browser-test/vite.config.ts
    - scanner: typescript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/ci_telemetry_collect.ts
    - scanner: javascript
      file: apps/web/scripts/desktop-release.mjs
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/draft-recovery-fixture.tsx
      symbol: DraftRecoveryFixture
    - scanner: typescript
      file: apps/web/scripts/android-release.ts
    - scanner: typescript
      file: infra/stacks/email-service/scheduled_lambda.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/editor-interactions.browser.e2e.ts
    - scanner: typescript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/ci_gate.ts
    - scanner: typescript
      file: infra/stacks/gateway/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/list-filter-adapters.tsx
    - scanner: typescript
      file: apps/web/src/features/changes/tests/mock-context.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/reference.playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/messages/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/scripts/generate-jwt-from-secrets.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/list-filter-fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-shapes.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/pivots.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/privacy/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/preview-gateway/index.ts
    - scanner: javascript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/ios_native_check_comment.test.cjs
      symbol: run
    - scanner: typescript
      file: infra/stacks/authentication-service/user-link-cleanup-lambda.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/people.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/role.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-text-direction-guides.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/bucket.ts
    - scanner: typescript
      file: apps/web/tests/native/vite.config.ts
    - scanner: javascript
      file: apps/web/src/features/entity/browser-test/measure.mjs
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/board-refusal.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/ai-editor.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/notification-service/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/channel-recipient-fixture.tsx
      symbol: ChannelRecipientFixture
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/frame-labels.browser.e2e.ts
    - scanner: javascript
      file: apps/web/tests/native/android/smoke.mjs
    - scanner: typescript
      file: infra/stacks/organization-retention/organization-retention-trigger.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/ses.ts
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/signature.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/browser-test/inline-focus.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/scripts/preview/deploy.ts
    - scanner: typescript
      file: infra/stacks/unfurl-service/index.ts
    - scanner: typescript
      file: apps/web/tests/native/fixtures/filter-oracle.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/sql-people-fixture.tsx
      symbol: SqlPeopleFixture
    - scanner: typescript
      file: apps/web/src/features/onboarding/tests/render.tsx
    - scanner: typescript
      file: services/ai-editing-worker/scripts/active-editors.ts
    - scanner: typescript
      file: apps/web/src/features/entity/browser-test/participants.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/email-suppression/index.ts
    - scanner: typescript
      file: infra/stacks/fusionauth-instance/origins.ts
      symbol: ALLOWED_ORIGINS
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/date-chips.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/recipient-directory-fixture.tsx
      symbol: RecipientDirectoryFixture
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/formatting.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/shared/src/gateway_priorities.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/tests/wire.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/cache-artifact-compatibility.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tests/task-board-fixture.ts
    - scanner: typescript
      file: infra/stacks/monitoring/adopted.ts
      symbol: adopted
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/queues.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/collaboration.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/browser-test/property-optimism.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/formatting.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/android-back-fixture.tsx
      symbol: AndroidBackFixture
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/calendar-fixture.tsx
      symbol: CalendarFilterFixture
    - scanner: typescript
      file: infra/stacks/link-sharing/file-storage-bucket.ts
    - scanner: typescript
      file: apps/web/src/lib/tauri/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/document-preview.tsx
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/delete-chat-handler.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/mail-projection.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/collaboration.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/document-text-extractor/document-text-extractor.ts
    - scanner: typescript
      file: infra/stacks/observability/render.ts
      symbol: renderUserData
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/local-runtime/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/psd-tools.browser.e2e.ts
    - scanner: typescript
      file: apps/web/tests/native/fixtures/bootstrap.ts
      symbol: bootstrapResponses
    - scanner: typescript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/ci_telemetry_send.ts
    - scanner: typescript
      file: infra/stacks/mcp-server/index.ts
      symbol: mcpServerUrl
    - scanner: typescript
      file: apps/web/src/features/property/editors/inline/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/load_balancer.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/ai-editing.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/cache-lifecycle.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/api.browser.e2e.ts
    - scanner: typescript
      file: apps/marketing/scripts/standaloneDev.ts
      symbol: standaloneDev
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/search-text-extractor-queue/index.ts
    - scanner: typescript
      file: apps/web/scripts/keep-import-meta-dev.ts
      symbol: keepImportMetaDev
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/packages/shared/src/grafana_telemetry.ts
    - scanner: typescript
      file: apps/web/scripts/wasm-cache-key.ts
    - scanner: javascript
      file: infra/stacks/fusionauth-instance/templates/populate_jwt.js
      symbol: populate
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/cached-people-policy.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/property/browser-test/enter.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/cors.ts
      symbol: ALLOWED_ORIGINS
    - scanner: typescript
      file: apps/marketing/scripts/standaloneBoundary.ts
      symbol: standaloneBoundary
    - scanner: typescript
      file: packages/observability/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/composer.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/fusionauth-instance/constants.ts
    - scanner: typescript
      file: apps/web/scripts/dev-sourcemaps.ts
      symbol: devExternalSourcemaps
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-animations.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/browser-test/task-status.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/name-cache-fixture.tsx
      symbol: NameCacheFixture
    - scanner: typescript
      file: apps/web/src/features/email-message/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/document-text-extractor/index.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/harness-runtimes.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/opensearch.ts
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/parking.browser.e2e.ts
    - scanner: javascript
      file: infra/stacks/fusionauth-instance/templates/reconcile_secondary_idp_link.js
      symbol: reconcile
    - scanner: typescript
      file: apps/web/scripts/local-dev-server.ts
      symbol: localDevServer
    - scanner: typescript
      file: infra/stacks/fusion-auth/database.ts
      symbol: Database
    - scanner: typescript
      file: infra/stacks/search-upload/search-upload-lambda.ts
      symbol: SearchUploadHandler
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/reminder-dispatch-queue.ts
      symbol: ReminderDispatchQueue
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/references.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/messages/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/fusion-auth/resources/vpc.ts
    - scanner: typescript
      file: infra/stacks/email-service/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/recipient-directory.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/outbox.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/rename.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/graphql-cache-only-projection-codegen.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/bulk-upload/index.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/image.ts
      symbol: createImage
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/linear-import.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/browser-test/unavailable-mention.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/privacy/privacy.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/host-preview.tsx
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/docx-unzip-bucket.ts
      symbol: attachPolicyToDocxUnzipBucket
    - scanner: typescript
      file: apps/web/src/features/block-image/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/outbox-fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/channel/Call/chat/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/email-service/attachments-bucket.ts
      symbol: EmailAttachmentsBucket
    - scanner: python
      file: .github/readme/star-history.py
    - scanner: typescript
      file: apps/web/scripts/hosted-dev-proxy.ts
      symbol: hostedDevProxy
    - scanner: typescript
      file: apps/web/tests/native/links-runner.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/menu/MentionsMenu/browser-test/playwright.config.ts
    - scanner: typescript
      file: services/ai-editing-worker/scripts/to-xml.ts
    - scanner: typescript
      file: tooling/scripts/grab-snapshot.ts
    - scanner: typescript
      file: infra/stacks/monitoring/prod-monitor.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/contact-removal-fixture.tsx
      symbol: ContactRemovalFixture
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/browser-test/mail-flicker.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/set_refresh_interval.ts
    - scanner: typescript
      file: infra/stacks/agent-harness-service/agent_harness_service.ts
      symbol: AgentHarnessService
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/fixture.tsx
      symbol: UniversalInputFixture
    - scanner: typescript
      file: apps/web/src/features/activity/tests/mock-graphql.ts
    - scanner: javascript
      file: services/ai-editing-worker/scripts/benchmark-canvas.mjs
    - scanner: typescript
      file: infra/packages/lambda/src/index.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/coordinator.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/ui-shim.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/routines.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/kill_async_job.ts
    - scanner: typescript
      file: apps/web/scripts/generate-access-token.ts
    - scanner: javascript
      file: apps/web/scripts/ios-signing.mjs
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/channel-recipients.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/email-service/pubsub_workers.ts
      symbol: EmailPubSubWorkers
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/drag-composite.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/review.tsx
      symbol: PersistedReview
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/list-filters.browser.e2e.ts
    - scanner: typescript
      file: vendor/ironcalc/scripts/package.ts
    - scanner: javascript
      file: apps/web/scripts/android-native.mjs
    - scanner: typescript
      file: packages/sdk/scripts/release.ts
    - scanner: typescript
      file: infra/stacks/deleted-item-poller/lambda.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/rename-data.ts
      symbol: RENAME_DETAIL
    - scanner: typescript
      file: infra/packages/shared/src/link_manager_queue.ts
      symbol: getLinkManagerQueue
    - scanner: typescript
      file: infra/stacks/fusion-auth/index.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/sender-adapters.tsx
    - scanner: typescript
      file: apps/web/tests/e2e/helpers/graphql-stub.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/attachments.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/docx-unzip-handler-lambda.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/mail-reconciliation.browser.e2e.ts
    - scanner: typescript
      file: apps/web/tests/native/runner.ts
    - scanner: typescript
      file: infra/stacks/github-runners/runner.ts
      symbol: SmokeTestRunner
    - scanner: typescript
      file: infra/stacks/observability/scripts/ci-report.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/harness-presence.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/tests/message-read-visibility.tsx
    - scanner: typescript
      file: infra/packages/shared/src/gateway.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/text-editing.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/smoke-bundle-updater-server.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/browser-test/import.browser.e2e.ts
    - scanner: typescript
      file: services/ai-editing-worker/scripts/edit.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/name-cache-services.ts
      symbol: SERVER_HOSTS
    - scanner: typescript
      file: apps/web/tests/native/notifications-runner.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/performance.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/utils/src/index.ts
      symbol: hasItems
    - scanner: javascript
      file: apps/web/scripts/createBackend.js
    - scanner: typescript
      file: apps/web/tests/e2e/helpers/local-app.ts
    - scanner: typescript
      file: infra/stacks/observability/deploy/release.ts
    - scanner: typescript
      file: apps/web/src/features/next-soup/actions/tests/done-write-fixture.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/routine-suggestions.ts
    - scanner: typescript
      file: infra/stacks/deleted-item-poller/index.ts
    - scanner: typescript
      file: .github/scripts/check-service-deployment-results.ts
      symbol: checkDeploymentResults
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/instrumented-cache.engine-worker.ts
    - scanner: javascript
      file: apps/web/scripts/android-version-check.mjs
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/sync-server.ts
    - scanner: typescript
      file: infra/stacks/contacts-service/service.ts
      symbol: ContactsService
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-cache.storage-control-worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/browser-test/large-undo.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/observability/deploy/plan.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/browser-test/poll-card.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/onboarding-contact-cache.ts
    - scanner: typescript
      file: infra/stacks/web-app-preview/index.ts
    - scanner: c
      file: nix/appimage/test_settings.c
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/import-contact-network.ts
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/index.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/entity-preview.ts
      symbol: getCompanyOwnerId
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/draft-owner.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/drawing-editing.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/sync-server.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/attachments.tsx
    - scanner: typescript
      file: infra/stacks/email-service/service.ts
      symbol: EmailService
    - scanner: typescript
      file: apps/web/src/features/database/tests/grid-resize-observer.ts
      symbol: GridResizeObserver
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/task-filter-fixture.tsx
      symbol: TaskFilterFixture
    - scanner: typescript
      file: infra/packages/resources/src/resources/ecs_deployment_failure_alarm.ts
    - scanner: typescript
      file: infra/stacks/monitoring/notify.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/outlook-recovery-fixture.tsx
      symbol: OutlookRecoveryFixture
    - scanner: typescript
      file: infra/stacks/calendar-service/service.ts
      symbol: CalendarService
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/name-policy.browser.e2e.ts
    - scanner: javascript
      file: apps/web/src/features/entity/browser-test/row-cost.mjs
    - scanner: typescript
      file: apps/web/src/lib/queries/attention-feed/tests/fake-client.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/collaboration.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/messages/browser-test/comment-navigation.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/database/browser-test/keyboard-range.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/tests/fixtures.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/update_updated_at_seconds_for_email.ts
    - scanner: typescript
      file: apps/web/src/lib/i18n/browser-test/menus.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/service/src/macrodb.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/email-participants.browser.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/benchmark-grouped-soup.ts
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/browser-test/drafts.browser.e2e.ts
    - scanner: javascript
      file: apps/web/scripts/android-play-promote.mjs
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/tables.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/browser-test/drawer-focus.browser.e2e.ts
    - scanner: typescript
      file: services/coding-agent-worker/scripts/tmp/list-webhooks.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/frame-drop.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/team/preview-adapters.ts
    - scanner: typescript
      file: infra/scripts/tsconfig-paths.ts
    - scanner: typescript
      file: infra/stacks/call-recording/call-recording-preview-lambda.ts
    - scanner: typescript
      file: infra/stacks/sha-cleanup/index.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/archive/picker-preview.tsx
    - scanner: javascript
      file: apps/web/scripts/cache-wasm/precompressed-preview-server.mjs
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/reference.e2e.ts
    - scanner: typescript
      file: apps/web/scripts/android-bundle.ts
      symbol: verifyAndroidBundle
    - scanner: typescript
      file: apps/web/src/features/email-compose/tests/capabilities.ts
      symbol: createComposeContext
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/attachments.vite.config.ts
    - scanner: typescript
      file: infra/stacks/observability/migration/export-datadog.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/scripts/generate-local-e2e-token.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/session.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Resize/browser-test/resize.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/utils/copy_field.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/stacks/doppler-projects/consts.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/collab-fixture.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/user-mentions.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/date-picker.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/fig-libraries.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/Emoji/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/tests/transcript.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/utils/migrate_field.ts
    - scanner: typescript
      file: infra/stacks/whatsapp-session-service/service.ts
      symbol: WhatsappSessionService
    - scanner: typescript
      file: apps/web/tests/native/fixtures/notifications-browser.ts
    - scanner: typescript
      file: infra/stacks/static-file-service/distribution.ts
      symbol: StaticFileCloudFront
    - scanner: typescript
      file: infra/stacks/bulk-upload/upload-extractor-lambda-trigger.ts
    - scanner: typescript
      file: apps/web/src/features/auth/browser-test/auth.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/chart-types.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-pictures.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/convert-service/service.ts
      symbol: ConvertService
    - scanner: typescript
      file: infra/stacks/whatsapp-session-service/index.ts
    - scanner: typescript
      file: apps/web/scripts/android-firebase.ts
    - scanner: typescript
      file: infra/stacks/document-storage/replication-bucket.ts
      symbol: setupReplicationBucket
    - scanner: typescript
      file: infra/stacks/observability/deploy/aws.ts
    - scanner: typescript
      file: apps/web/scripts/preview/post-comment.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/grafana.ts
    - scanner: typescript
      file: infra/stacks/document-storage-bucket-integrations/index.ts
      symbol: setupS3EventBridgeTriggers
    - scanner: javascript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/ios_native_check_comment.js
    - scanner: typescript
      file: apps/web/src/features/tasks-view/browser-test/project-grouping.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/property/tags/browser-test/tags.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/shared/src/ai_tools.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/redis.ts
      symbol: Redis
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/remove_legacy_id.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/office-2016-charts.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/task-filters.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/mail-projection-capsules.ts
      symbol: mailProjectionCapsules
    - scanner: typescript
      file: apps/web/src/features/settings/browser-test/signatures/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/tests/fixtures.ts
    - scanner: typescript
      file: infra/stacks/image-proxy-service/index.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-slide-master.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/privacy/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/graphql-preview.ts
    - scanner: typescript
      file: infra/stacks/organization-retention/index.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/tests/fixtures.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/tests/fake-capabilities.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/sql-people-joins.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/configure_slow_logs.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/browser-test/vite.config.ts
    - scanner: javascript
      file: apps/web/scripts/ios-bump-version.mjs
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/spreadsheet.mobile.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/tests/catalog-fixture.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/notification-retention.ts
      symbol: notificationRetentionDashboard
    - scanner: typescript
      file: apps/web/src/features/email-view/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/tests/functional/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/agent-harness-service/index.ts
    - scanner: c
      file: nix/appimage/test_tls.c
    - scanner: javascript
      file: vendor/ironcalc/pkg/snippets/ironcalc_base-aa721fe913c88060/inline0.js
    - scanner: typescript
      file: packages/email-renderer/tests/snapshots.pw.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/calendar-reminder-dispatch-queue.ts
      symbol: CalendarReminderDispatchQueue
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/calendar-replacement.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/sample-document.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/attach.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/dynamodb.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/browser-test/preview-adapters.tsx
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/font-source.ts
    - scanner: typescript
      file: apps/web/src/features/database/browser-test/vite.config.ts
    - scanner: typescript
      file: packages/sdk/tests/backlog-contracts.types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/onboarding-contacts-fixture.tsx
      symbol: OnboardingContactsFixture
    - scanner: typescript
      file: apps/web/src/lib/core/component/Toast/tests/fake-toast.tsx
    - scanner: javascript
      file: tooling/xtask/crates/xtask_workflows/src/workflows/scripts/android_play_publish_comment.js
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/dropdowns.browser.e2e.ts
    - scanner: javascript
      file: infra/stacks/fusionauth-instance/templates/reconcile_microsoft_signin.js
      symbol: reconcile
    - scanner: typescript
      file: infra/stacks/cloud-storage-cache/index.ts
      symbol: cloudStorageCacheEcrRepositoryUrl
    - scanner: swift
      file: apps/web/tauri/ios_push_plugin/store/Tests/PendingPushStoreTests/PendingPushStoreTests.swift
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/utils/check_index_exists.ts
      symbol: checkIndexExists
    - scanner: typescript
      file: infra/stacks/email-service/refresh_lambda.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/team/entity-preview.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/crm-owner.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-ai/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/auth/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/collaboration.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-database/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/tests/fake-capabilities.ts
      symbol: createFakeWhatsApp
    - scanner: typescript
      file: apps/web/src/features/database/browser-test/presence.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/soup/graphql/browser-test/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/observability/ci.ts
      symbol: createCiTelemetryRole
    - scanner: javascript
      file: apps/web/scripts/prepare-tauri-ios-api.mjs
    - scanner: typescript
      file: infra/stacks/observability/network.ts
      symbol: createNetwork
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/recipient-directory.app.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/attachment-blocks.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/ecs_deployment_defaults.ts
    - scanner: javascript
      file: services/sync-service/scripts/check-deploy-secrets.mjs
    - scanner: typescript
      file: infra/stacks/bulk-upload/upload-bucket.ts
      symbol: BulkUploadBucket
    - scanner: typescript
      file: apps/web/src/features/block-image/browser-test/pinch-zoom.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/collab-fixture.tsx
      symbol: CollabFixture
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/filter-entity-adapters.ts
    - scanner: typescript
      file: apps/web/scripts/generate-canvas-seed.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/upload.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-pptx/browser-test/pptx-editor.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/mail-tabs.browser.e2e.ts
    - scanner: typescript
      file: infra/packages/resources/src/resources/kafka-cluster.ts
    - scanner: typescript
      file: infra/stacks/connection-gateway/connection_table.ts
      symbol: getConnectionGatewayTable
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/initial-focus.browser.e2e.ts
    - scanner: javascript
      file: apps/web/src/features/block-agent/browser-test/session-open.mjs
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/people-references.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/health.ts
    - scanner: typescript
      file: apps/marketing/scripts/generate-github-diff.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/quotes.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/sender-fixture.tsx
      symbol: SenderFixture
    - scanner: typescript
      file: services/ai-editing-worker/src/spreadsheet/integration.e2e.ts
    - scanner: typescript
      file: infra/stacks/website/index.ts
    - scanner: typescript
      file: infra/stacks/monitoring/synthetics.ts
      symbol: appWelcomeHealthCheck
    - scanner: typescript
      file: infra/stacks/image-proxy-service/image-proxy-service.ts
      symbol: ImageProxyService
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/fixture.tsx
    - scanner: typescript
      file: apps/web/scripts/dev-compression.ts
      symbol: devCompression
    - scanner: typescript
      file: infra/packages/lambda/src/lambda.ts
      symbol: Lambda
    - scanner: typescript
      file: infra/packages/lambda/src/source_code_hash.ts
      symbol: SourceCodeHash
    - scanner: typescript
      file: infra/stacks/document-storage/index.ts
    - scanner: typescript
      file: apps/web/src/features/block-image/browser-test/vite.config.ts
    - scanner: typescript
      file: infra/stacks/convert-service/index.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/tests/composer.ts
      symbol: mountEmailComposer
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/team/playwright.config.ts
    - scanner: typescript
      file: infra/stacks/static-file-service/index.ts
    - scanner: typescript
      file: services/ai-editing-worker/scripts/typer.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/collaboration/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/activity/tests/wire.ts
    - scanner: typescript
      file: infra/stacks/cloud-storage-service/slack-import-queue.ts
      symbol: SlackImportQueue
    - scanner: typescript
      file: apps/web/tests/e2e/fixtures/local-e2e-seed.ts
    - scanner: typescript
      file: infra/packages/service/src/cluster.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/draft.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/fusion-auth/resources/shared.ts
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/browser-test/promotions.browser.e2e.ts
    - scanner: typescript
      file: apps/web/tests/e2e/access-requests.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/sheet-rules.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/browser-test/vite.config.ts
    - scanner: javascript
      file: infra/stacks/website/wwwRedirect/handler.js
      symbol: handler
    - scanner: typescript
      file: infra/stacks/connection-gateway/connection_gateway.ts
      symbol: ConnectionGateway
    - scanner: typescript
      file: infra/stacks/email-sfs-delete-handler/sfs_delete_lambda.ts
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/browser-test/notification-sounds.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/monitoring/monitors/cache.ts
    - scanner: typescript
      file: apps/web/src/features/database/tests/board-layout.ts
      symbol: boardLane
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/attachments.playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/android-back.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/macrodb/index.ts
    - scanner: typescript
      file: apps/web/src/features/block-write/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/property/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/preview.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/call-recording/index.ts
    - scanner: typescript
      file: apps/web/src/features/onboarding/browser-test/tools-layout.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/search-processing-service/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/list-images.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/notification-service/service.ts
      symbol: NotificationService
    - scanner: typescript
      file: infra/packages/shared/src/macro_notify.ts
      symbol: getMacroNotify
    - scanner: typescript
      file: apps/web/src/features/block-fig/browser-test/layer-lock.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/fusion-auth/resources/load_balancer.ts
      symbol: serviceLoadBalancer
    - scanner: typescript
      file: .github/scripts/wait-crm-email-consumers.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/vite.config.ts
    - scanner: typescript
      file: apps/web/src/features/block-psd/browser-test/psd-editor.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/dlp-handler/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/internal/browser-test/name-cache.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/feature-gate.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/core/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/browser-test/invitation.browser.e2e.ts
    - scanner: javascript
      file: apps/web/scripts/sync-ios-bundle-metadata.mjs
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/mobile-input.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/mutation-retry.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/lib/urql-solid/browser-test/documents.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/constants.ts
    - scanner: javascript
      file: infra/stacks/web-app/appRouteLambda/index.mjs
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/create_timestamp_seconds_fields.ts
    - scanner: typescript
      file: apps/web/src/features/channel/Input/browser-test/mention-ranking.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/add_reply_to_field.ts
    - scanner: typescript
      file: apps/web/src/components/view-shell/browser-test/creation-and-toasts.browser.e2e.ts
    - scanner: typescript
      file: apps/web/src/features/block-spreadsheet/browser-test/shapes.browser.e2e.ts
    - scanner: typescript
      file: infra/stacks/search-event-queue/index.ts
    - scanner: typescript
      file: apps/web/src/features/crm/browser-test/people/vite.config.ts
    - scanner: typescript
      file: infra/stacks/authentication-service/index.ts
    - scanner: typescript
      file: apps/web/src/features/local-runtime/browser-test/playwright.config.ts
    - scanner: typescript
      file: apps/web/src/features/universal-input/browser-test/mobile-search-app-fixture.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/browser-test/event-details.browser.e2e.ts
  technology: SolidJS
description: '`.fig` viewer block.'
---

The comment says it is wired to the worker engine and document storage. `block-ai` imports `createFontSource` from this feature's font-source query (`block-ai/ai-block.tsx:8`). Share and file-menu chrome match the other design blocks.
