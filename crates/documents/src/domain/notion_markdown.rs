//! A Notion page body, in Notion's enhanced markdown, with what its page and
//! people references resolve to in Rox. Converted to document content by
//! lexical-service rather than parsed here.

use std::collections::HashMap;

/// A Notion page body and where its references point.
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct NotionMarkdown {
    /// The page in Notion's enhanced markdown.
    pub markdown: String,
    /// Notion page id (dashless, lowercase) → the Rox document it became.
    pub pages: HashMap<String, NotionPageLink>,
    /// Notion user id (dashless, lowercase) → the Rox user they are.
    pub users: HashMap<String, NotionUserLink>,
}

/// The Rox document a Notion page became.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct NotionPageLink {
    /// The document id.
    pub document_id: uuid::Uuid,
    /// Its name.
    pub name: String,
}

/// The Rox user a Notion person is.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct NotionUserLink {
    /// The Rox user id.
    pub user_id: String,
    /// Their email.
    pub email: String,
}
