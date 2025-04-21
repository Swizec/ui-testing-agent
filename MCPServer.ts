import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerWeatherTools } from "./tools/weather";

// Create server instance
export const server = new McpServer({
    name: "weather",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});

registerWeatherTools(server);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Weather MCP Server running on stdio");
