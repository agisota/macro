use super::*;

#[test]
fn it_should_create_local_url() {
    assert_eq!(
        get_login_url(Environment::Local).as_str(),
        "http://localhost:3000/app/login"
    );
}
#[test]
fn it_should_create_dev_url() {
    assert_eq!(
        get_login_url(Environment::Develop).as_str(),
        "https://dev.rox.one/app/login"
    );
}
#[test]
fn it_should_create_prod_url() {
    assert_eq!(
        get_login_url(Environment::Production).as_str(),
        "https://rox.one/app/login"
    );
}
