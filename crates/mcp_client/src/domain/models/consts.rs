/// Our MCP client publishes this name to servers on-connect
pub const MCP_CLIENT_NAME: &str = "Rox";

/// GitHub's hosted MCP server. A user's Rox GitHub account link authorizes
/// it; see [`crate::domain::service::WithLinkedGithub`].
pub const GITHUB_MCP_SERVER_URL: &str = "https://api.githubcopilot.com/mcp";
