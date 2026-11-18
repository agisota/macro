use super::*;

fn resources() -> McpResources {
    McpResources::new(
        "https://mcp-server.rox.one/mcp".to_owned(),
        "https://mcp-chatgpt.rox.one/mcp".to_owned(),
    )
}

#[test]
fn chatgpt_url_is_chatgpt() {
    for resource in [
        "https://mcp-chatgpt.rox.one/mcp",
        "https://mcp-chatgpt.rox.one/mcp/",
    ] {
        assert_eq!(
            resources().resolve(Some(resource)),
            McpResource::Chatgpt,
            "{resource}"
        );
    }
}

#[test]
fn everything_else_is_the_harness() {
    assert_eq!(resources().resolve(None), McpResource::Harness);
    for resource in [
        "https://mcp-server.rox.one/mcp",
        "https://gateway.rox.one/mcp/mcp",
        "https://attacker.example/mcp",
        "https://mcp-chatgpt.rox.one",
        "https://mcp-chatgpt.rox.one/mcp/extra",
        "http://mcp-chatgpt.rox.one/mcp",
        "",
    ] {
        assert_eq!(
            resources().resolve(Some(resource)),
            McpResource::Harness,
            "{resource}"
        );
    }
}
