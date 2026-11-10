---
type: C4 Component
title: Block pdf
status: stable
groma:
  id: freecommentplaceable
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/placeables/FreeCommentPlaceable.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/highlightComments.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/TocUtils.ts
      symbol: TocUtils
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/PdfSplitToolbar.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-outline.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/create-pdf-route-target.ts
      symbol: createPdfRouteTarget
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/selectionUtils.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/definitionPopup.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/commentStore.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/annotations.ts
      symbol: useLoadAnnotations
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/printUtil.ts
      symbol: doPrint
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/Block.tsx
      symbol: BlockPdf
    - scanner: typescript
      file: apps/web/src/features/block-pdf/type/Bookmark.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/highlight.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/InternalPDFViewer.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/constants.ts
      symbol: URL_PARAMS
    - scanner: typescript
      file: apps/web/src/features/block-pdf/queries/export-docx.ts
      symbol: fetchExportedDocx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/pixelsPerInch.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/model/Highlight.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/type/coParse.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/type/placeables.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/PdfDocument.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/viewerThreeColumnLayout.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/FindController.ts
      symbol: FindController
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/hslToString.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/placeables/TextBox.tsx
      symbol: TextBox
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/DefinitionLookup/DefinitionsAccordion.tsx
      symbol: DefinitionsAccordion
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/location.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/pdfViewer.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/model/Section.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/model/Reference.ts
      symbol: Reference
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/Placeable.tsx
      symbol: Placeable
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-viewer-runtime.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/DestArray.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/PageOverlay.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/RightMarginLayout.tsx
      symbol: RightMarginLayout
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/wordSearchUtils.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/XMLUtils.ts
      symbol: XMLUtils
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-persistence.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-definitions.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/EventBus.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-tabs.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/LinkService.ts
      symbol: LinkService
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-markup.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/Tabs.tsx
      symbol: Tabs
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/definitionText.ts
      symbol: decodeDefinitionText
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/DefinitionLookup/index.tsx
      symbol: DefinitionLookup
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/placeables/Signature.tsx
      symbol: Signature
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/pdf-file-actions.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/DefinitionLookup/OpenRefInNewTabIcon.tsx
      symbol: OpenRefInNewTabIcon
    - scanner: typescript
      file: apps/web/src/features/block-pdf/model/Color.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/freeComments.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/errors.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/type/pdfJs.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/context/pdf-comments-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/type/comments.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/DefinitionLookup/shared.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/Document.tsx
      symbol: Document
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/zoom.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/websocket/export.ts
      symbol: exportPdf
    - scanner: typescript
      file: apps/web/src/features/block-pdf/websocket/preprocess.ts
      symbol: preprocess
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/pdfjs-worker.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/hash.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-document-model.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/MarkupToolbar.tsx
      symbol: MarkupToolbar
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/MdOpenInNew.ts
      symbol: MdOpenInNewIcon
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/sidepanel/PdfSidePanelSections.tsx
      symbol: PdfSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/messageCommentsResource.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/PDFPopup.tsx
      symbol: PDFPopup
    - scanner: typescript
      file: apps/web/src/features/block-pdf/primitives/pdf-annotations.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/AbsoluteDefinitionLookups.tsx
      symbol: AbsoluteDefinitionLookups
    - scanner: typescript
      file: apps/web/src/features/block-pdf/context/pdf-viewer-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/save.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/tab.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/pdfjsUtils.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-pdf/context/pdf-document-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/commentEffect.ts
      symbol: usePdfCommentEffects
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/wheelUtils.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/DefinitionLookup/ReferencesAccordion.tsx
      symbol: ReferencesAccordion
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/commentOperations.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/commentLayout.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/queries/annotations.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/pdf-route.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/model/Page.ts
      symbol: PageModel
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/estimateTextWidth.ts
      symbol: estimateTextWidth
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/comments/anchoredThread.ts
      symbol: anchoredThread
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/setting.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/SimpleSearch.tsx
      symbol: SimpleSearch
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/commentsResource.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/index.ts
      symbol: PDFViewer
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/UserHighlight.tsx
    - scanner: typescript
      file: apps/web/src/features/block-pdf/model/Term.ts
      symbol: Term
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/permissions.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/store/placeables.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/component/PageNumberInput.tsx
      symbol: PageNumberInput
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/touchUtils.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/util/buildModificationData.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/signal/search.ts
    - scanner: typescript
      file: apps/web/src/features/block-pdf/PdfViewer/normalize.ts
      symbol: normalize
  technology: SolidJS
  group: Files
description: PDF.js block.
---

Accepted types are `application/pdf` and the DOCX MIME type. Load imports `pdfjs-dist` and starts `PdfJsWorker`. `block-write` says that when the DOCX editor flag is off, `write` resolves to this PDF rendering. The viewer component was not opened.
