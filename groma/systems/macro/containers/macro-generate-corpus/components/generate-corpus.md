---
type: C4 Component
title: Development tooling
status: stable
groma:
  id: generate-corpus
  parent: macro-generate-corpus
  code:
    - scanner: python
      file: crates/pptx_engine/scripts/generate_corpus.py
    - scanner: python
      file: crates/pptx_engine/scripts/corpus_xml.py
    - scanner: python
      file: crates/pptx_engine/scripts/corpus_media.py
description: Not a product runtime
---

Test, script, or generator. Excluded from future scans. Kept only because a scan had already stored it.
