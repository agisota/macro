---
type: C4 Component
title: Agent session
status: stable
groma:
  id: kafka-consumer-agent-session
  parent: search-processing
  code:
    - scanner: rust
      file: services/search_processing_service/src/inbound/kafka_consumer/agent_session.rs
      symbol: process_agent_session_event
---
