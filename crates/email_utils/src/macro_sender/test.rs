use super::is_macro_notification_sender;

#[test]
fn matches_every_environment_prefix() {
    assert!(is_macro_notification_sender(
        "no-reply@notification.rox.one"
    ));
    assert!(is_macro_notification_sender(
        "no-reply-dev@notification.rox.one"
    ));
    assert!(is_macro_notification_sender(
        "no-reply-local@notification.rox.one"
    ));
}

#[test]
fn is_case_and_whitespace_insensitive() {
    assert!(is_macro_notification_sender(
        "No-Reply@Notification.ROX.ONE"
    ));
    assert!(is_macro_notification_sender(
        "  no-reply@notification.rox.one\n"
    ));
}

#[test]
fn rejects_other_macro_and_lookalike_domains() {
    assert!(!is_macro_notification_sender("teo@rox.one"));
    assert!(!is_macro_notification_sender("no-reply@rox.one"));
    assert!(!is_macro_notification_sender(
        "no-reply@sub.notification.rox.one"
    ));
    assert!(!is_macro_notification_sender(
        "no-reply@notification.rox.one.evil.example"
    ));
    assert!(!is_macro_notification_sender(
        "no-reply@notification-rox.one"
    ));
    assert!(!is_macro_notification_sender("notification.rox.one"));
    assert!(!is_macro_notification_sender(""));
}
