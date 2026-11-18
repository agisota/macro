use axum::{
    Json,
    extract::{self, State},
    http::StatusCode,
    response::{IntoResponse, Response},
};
use base64::{Engine, engine::general_purpose::{STANDARD, URL_SAFE_NO_PAD}};
use rand::RngCore;

use crate::api::context::ApiContext;

#[derive(serde::Deserialize, utoipa::ToSchema)]
struct ChallengeRequest {
    email: String,
}

#[derive(serde::Deserialize, utoipa::ToSchema)]
struct RegisterPasskeyRequest {
    email: String,
    credential_id: String,
    client_data_json: String,
    attestation_object: String,
}

#[derive(serde::Deserialize, utoipa::ToSchema)]
struct AssertPasskeyRequest {
    email: String,
    credential_id: String,
    client_data_json: String,
}

fn text(status: StatusCode, body: &'static str) -> Response {
    (status, body).into_response()
}

/// Reports whether this email already has a stored passkey.
#[utoipa::path(
    post,
    operation_id = "passkey_lookup",
    path = "/login/passwordless/passkey/lookup",
    responses(
        (status = 200, body = String),
        (status = 400, body = String),
        (status = 500, body = String),
    )
)]
#[tracing::instrument(skip(ctx, req), err(Debug))]
pub(in crate::api) async fn lookup(
    State(ctx): State<ApiContext>,
    extract::Json(req): extract::Json<ChallengeRequest>,
) -> Result<Response, Response> {
    if req.email.is_empty() {
        return Err(text(StatusCode::BAD_REQUEST, "email is required"));
    }

    let stored = match ctx.macro_cache_client.get_passkey(&req.email).await {
        Ok(value) => value.is_some(),
        Err(_) => {
            tracing::error!("unable to read passkey");
            return Err(text(
                StatusCode::INTERNAL_SERVER_ERROR,
                "unable to read passkey",
            ));
        }
    };

    Ok((StatusCode::OK, Json(serde_json::json!({ "stored": stored }))).into_response())
}

/// Starts a passkey ceremony by issuing a one-time challenge.
#[utoipa::path(
    post,
    operation_id = "passkey_challenge",
    path = "/login/passwordless/passkey/challenge",
    responses(
        (status = 200, body = String),
        (status = 400, body = String),
        (status = 500, body = String),
    )
)]
#[tracing::instrument(skip(ctx, req), err(Debug))]
pub(in crate::api) async fn challenge(
    State(ctx): State<ApiContext>,
    extract::Json(req): extract::Json<ChallengeRequest>,
) -> Result<Response, Response> {
    if req.email.is_empty() {
        return Err(text(StatusCode::BAD_REQUEST, "email is required"));
    }

    let mut bytes = [0u8; 32];
    rand::rng().fill_bytes(&mut bytes);
    let challenge = URL_SAFE_NO_PAD.encode(bytes);

    if ctx
        .macro_cache_client
        .set_passkey_challenge(&req.email, &challenge)
        .await
        .is_err()
    {
        tracing::error!("unable to store passkey challenge");
        return Err(text(
            StatusCode::INTERNAL_SERVER_ERROR,
            "unable to store challenge",
        ));
    }

    Ok((
        StatusCode::OK,
        Json(serde_json::json!({ "challenge": challenge })),
    )
        .into_response())
}

/// Stores a passkey after the ceremony challenge matches.
#[utoipa::path(
    post,
    operation_id = "passkey_register",
    path = "/login/passwordless/passkey",
    responses(
        (status = 200, body = String),
        (status = 400, body = String),
        (status = 500, body = String),
    )
)]
#[tracing::instrument(skip(ctx, req), err(Debug))]
pub(in crate::api) async fn register_passkey(
    State(ctx): State<ApiContext>,
    extract::Json(req): extract::Json<RegisterPasskeyRequest>,
) -> Result<Response, Response> {
    let expected = match ctx
        .macro_cache_client
        .take_passkey_challenge(&req.email)
        .await
    {
        Ok(Some(challenge)) => challenge,
        Ok(None) => return Err(text(StatusCode::BAD_REQUEST, "challenge expired")),
        Err(_) => {
            tracing::error!("unable to read passkey challenge");
            return Err(text(
                StatusCode::INTERNAL_SERVER_ERROR,
                "unable to read challenge",
            ));
        }
    };

    if let Err(message) = registration_challenge_matches(&req.client_data_json, &expected) {
        return Err(text(StatusCode::BAD_REQUEST, message));
    }

    let stored = serde_json::json!({
        "credential_id": req.credential_id,
        "client_data_json": req.client_data_json,
        "attestation_object": req.attestation_object,
    });
    // attestation signature is not checked.
    if ctx
        .macro_cache_client
        .set_passkey(&req.email, &stored.to_string())
        .await
        .is_err()
    {
        tracing::error!("unable to store passkey");
        return Err(text(
            StatusCode::INTERNAL_SERVER_ERROR,
            "unable to store passkey",
        ));
    }

    Ok((StatusCode::OK, Json(serde_json::json!({ "stored": true }))).into_response())
}

/// Checks a passkey assertion against the stored credential id and challenge.
#[utoipa::path(
    post,
    operation_id = "passkey_assert",
    path = "/login/passwordless/passkey/assert",
    responses(
        (status = 200, body = String),
        (status = 400, body = String),
        (status = 404, body = String),
        (status = 500, body = String),
    )
)]
#[tracing::instrument(skip(ctx, req), err(Debug))]
pub(in crate::api) async fn assert_passkey(
    State(ctx): State<ApiContext>,
    extract::Json(req): extract::Json<AssertPasskeyRequest>,
) -> Result<Response, Response> {
    let expected = match ctx
        .macro_cache_client
        .take_passkey_challenge(&req.email)
        .await
    {
        Ok(Some(challenge)) => challenge,
        Ok(None) => return Err(text(StatusCode::BAD_REQUEST, "challenge expired")),
        Err(_) => {
            tracing::error!("unable to read passkey challenge");
            return Err(text(
                StatusCode::INTERNAL_SERVER_ERROR,
                "unable to read challenge",
            ));
        }
    };

    let stored = match ctx.macro_cache_client.get_passkey(&req.email).await {
        Ok(Some(value)) => value,
        Ok(None) => return Err(text(StatusCode::NOT_FOUND, "no passkey")),
        Err(_) => {
            tracing::error!("unable to read passkey");
            return Err(text(
                StatusCode::INTERNAL_SERVER_ERROR,
                "unable to read passkey",
            ));
        }
    };

    if let Err(message) = assertion_challenge_matches(&req.client_data_json, &expected) {
        return Err(text(StatusCode::BAD_REQUEST, message));
    }

    let stored_id = serde_json::from_str::<serde_json::Value>(&stored)
        .ok()
        .and_then(|value| {
            value
                .get("credential_id")
                .and_then(|id| id.as_str())
                .map(str::to_owned)
        });
    if stored_id.as_deref() != Some(req.credential_id.as_str()) {
        return Err(text(StatusCode::BAD_REQUEST, "credential mismatch"));
    }

    Ok((StatusCode::OK, Json(serde_json::json!({ "ok": true }))).into_response())
}

pub fn registration_challenge_matches(
    client_data_json: &str,
    expected_challenge: &str,
) -> Result<(), &'static str> {
    ceremony_matches(client_data_json, expected_challenge, "webauthn.create", "not a registration")
}

pub fn assertion_challenge_matches(
    client_data_json: &str,
    expected_challenge: &str,
) -> Result<(), &'static str> {
    ceremony_matches(client_data_json, expected_challenge, "webauthn.get", "not an assertion")
}

fn ceremony_matches(
    client_data_json: &str,
    expected_challenge: &str,
    expected_type: &str,
    wrong_type: &'static str,
) -> Result<(), &'static str> {
    let value = client_data_value(client_data_json).ok_or("challenge mismatch")?;
    let object = value.as_object().ok_or("challenge mismatch")?;
    let parsed_type = object
        .get("type")
        .and_then(|field| field.as_str())
        .ok_or("challenge mismatch")?;
    let challenge = object
        .get("challenge")
        .and_then(|field| field.as_str())
        .ok_or("challenge mismatch")?;
    if parsed_type != expected_type {
        return Err(wrong_type);
    }
    if challenge != expected_challenge {
        return Err("challenge mismatch");
    }
    Ok(())
}

fn client_data_value(raw: &str) -> Option<serde_json::Value> {
    if let Ok(value) = serde_json::from_str::<serde_json::Value>(raw) {
        return Some(value);
    }
    if let Some(value) = json_from_base64(raw, &URL_SAFE_NO_PAD) {
        return Some(value);
    }
    json_from_base64(raw, &STANDARD)
}

fn json_from_base64(raw: &str, engine: &impl Engine) -> Option<serde_json::Value> {
    let bytes = engine.decode(raw).ok()?;
    serde_json::from_slice(&bytes).ok()
}

#[cfg(test)]
mod tests {
    use super::{URL_SAFE_NO_PAD, assertion_challenge_matches, registration_challenge_matches};
    use base64::Engine;

    fn client_data(kind: &str, challenge: &str) -> String {
        serde_json::json!({
            "type": kind,
            "challenge": challenge,
            "origin": "https://example.test",
        })
        .to_string()
    }

    #[test]
    fn registration_raw_json_matching_challenge_is_ok() {
        let challenge = "challenge-value";
        let raw = client_data("webauthn.create", challenge);
        assert!(registration_challenge_matches(&raw, challenge).is_ok());
    }

    #[test]
    fn registration_base64url_of_that_json_is_ok() {
        let challenge = "challenge-value";
        let raw = client_data("webauthn.create", challenge);
        let encoded = URL_SAFE_NO_PAD.encode(raw.as_bytes());
        assert!(registration_challenge_matches(&encoded, challenge).is_ok());
    }

    #[test]
    fn registration_type_webauthn_get_is_err() {
        let challenge = "challenge-value";
        let raw = client_data("webauthn.get", challenge);
        assert_eq!(
            registration_challenge_matches(&raw, challenge),
            Err("not a registration")
        );
    }

    #[test]
    fn registration_wrong_challenge_is_err() {
        let raw = client_data("webauthn.create", "expected");
        assert_eq!(
            registration_challenge_matches(&raw, "other"),
            Err("challenge mismatch")
        );
    }

    #[test]
    fn assertion_accepts_webauthn_get_and_rejects_webauthn_create() {
        let challenge = "challenge-value";
        let assertion = client_data("webauthn.get", challenge);
        let registration = client_data("webauthn.create", challenge);
        assert!(assertion_challenge_matches(&assertion, challenge).is_ok());
        assert_eq!(
            assertion_challenge_matches(&registration, challenge),
            Err("not an assertion")
        );
    }
}
