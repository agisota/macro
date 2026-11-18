use super::*;

#[test]
fn sign_and_verify_round_trip() {
    let signature = sign("secret", "1755188000", b"{\"a\":1}").unwrap();
    assert!(signature.starts_with("v1="));
    assert!(verify("secret", "1755188000", b"{\"a\":1}", &signature));
}

#[test]
fn tampering_fails_verification() {
    let signature = sign("secret", "1755188000", b"{\"a\":1}").unwrap();
    assert!(!verify("secret", "1755188000", b"{\"a\":2}", &signature));
    assert!(!verify("secret", "1755188001", b"{\"a\":1}", &signature));
    assert!(!verify("other", "1755188000", b"{\"a\":1}", &signature));
    assert!(!verify("secret", "1755188000", b"{\"a\":1}", "v1=zz"));
    assert!(!verify("secret", "1755188000", b"{\"a\":1}", "nope"));
}

#[test]
fn an_empty_secret_never_verifies() {
    // A receiver that has not yet learned its real secret holds `""`. HMAC
    // would happily key on an empty slice, so verification must reject it
    // outright - otherwise anyone could forge a delivery it would accept.
    let forged = sign("", "1755188000", b"{\"a\":1}").unwrap();
    assert!(!verify("", "1755188000", b"{\"a\":1}", &forged));
}

/// The delivered header names, pinned so a receiver's constants cannot drift.
#[test]
fn header_names_are_rox_with_legacy_aliases() {
    assert_eq!(SIGNATURE_HEADER, "x-rox-signature");
    assert_eq!(TIMESTAMP_HEADER, "x-rox-timestamp");
    assert_eq!(LEGACY_SIGNATURE_HEADER, "x-macro-signature");
    assert_eq!(LEGACY_TIMESTAMP_HEADER, "x-macro-timestamp");
}

/// Pin the digest so the scheme can never drift from the TS verifier
/// (`packages/sdk/src/events/verify.ts`) without a test moving.
#[test]
fn the_wire_format_is_pinned() {
    assert_eq!(
        sign("secret", "1700000000", b"body").unwrap(),
        format!("v1={}", {
            let mut mac = HmacSha256::new_from_slice(b"secret").unwrap();
            mac.update(b"1700000000.body");
            hex::encode(mac.finalize().into_bytes())
        })
    );
}
