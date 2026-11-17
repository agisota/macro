//! The outside event behind a property change.

use serde::{Deserialize, Serialize};

/// What outside Rox caused a property change.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "snake_case")]
pub enum PropertyChangeSource {
    /// A GitHub pull request event.
    GithubPullRequest {
        /// The pull request's URL.
        url: String,
        /// The GitHub account behind the change, linked to Rox or not.
        account: GithubAccount,
    },
}

/// A GitHub account, which may have no Rox user.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct GithubAccount {
    /// GitHub's numeric user id.
    pub id: String,
    /// The account's login.
    pub login: String,
}
