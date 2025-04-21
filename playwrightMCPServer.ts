import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "@playwright/mcp";

const server = createServer({
    launchOptions: { headless: false },
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Playwright MCP Server running on stdio");
