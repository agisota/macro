use super::*;

#[test]
fn keeps_resolved_database_url_when_shell_has_local_default() {
    assert!(!should_overlay_process_env(
        "DATABASE_URL",
        "postgres://user:password@localhost:5432/macrodb"
    ));
    assert!(!should_overlay_process_env(
        "DATABASE_URL",
        "postgres://user:password@postgres:5432/macrodb"
    ));
    // The published port a host-side `sqlx`/`prepare_db` run exports reaches
    // this container's own loopback, so it must not displace the in-network URL.
    assert!(!should_overlay_process_env(
        "DATABASE_URL",
        "postgresql://user:password@127.0.0.1:24200/macrodb"
    ));
    assert!(!should_overlay_process_env(
        "DATABASE_URL",
        "postgres://user:password@[::1]:24200/macrodb"
    ));
}

#[test]
fn still_allows_non_local_database_overrides() {
    assert!(should_overlay_process_env(
        "DATABASE_URL",
        "postgres://user:password@dev.example.com:5432/macrodb"
    ));
}

#[test]
fn sync_exporter_follows_run_tracing_policy_after_overlays() {
    for (tracing, collector, expected) in [
        (false, false, ""),
        (false, true, ""),
        (true, false, ""),
        (true, true, "http://otel-collector:4318"),
    ] {
        let mut env = BTreeMap::from([(
            "SYNC_SERVICE_OTEL_EXPORTER_OTLP_ENDPOINT".into(),
            "http://inherited.invalid:4318".into(),
        )]);
        configure_sync_service_telemetry(&mut env, tracing, collector);
        assert_eq!(env["SYNC_SERVICE_OTEL_EXPORTER_OTLP_ENDPOINT"], expected);
    }
}
