use super::*;

#[test]
fn a_reachable_https_base_is_accepted_without_its_trailing_slash() {
    assert_eq!(
        checked("X", "https://dev-gateway.rox.one/dss/", false).unwrap(),
        "https://dev-gateway.rox.one/dss"
    );
    assert_eq!(
        checked("X", "wss://dev-gateway.rox.one/ws", true).unwrap(),
        "wss://dev-gateway.rox.one/ws"
    );
}

#[test]
fn loopback_credentialed_or_wrong_scheme_addresses_are_refused() {
    for (raw, websocket) in [
        ("http://localhost:8080", false),
        ("http://127.0.0.1:8080", false),
        ("https://user:pass@rox.one", false),
        ("https://rox.one/?a=1", false),
        ("wss://rox.one/ws", false),
        ("https://rox.one", true),
    ] {
        assert!(checked("X", raw, websocket).is_err(), "{raw}");
    }
}
