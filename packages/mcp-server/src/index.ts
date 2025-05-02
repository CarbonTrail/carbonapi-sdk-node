// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import CarbonAPI from 'carbonapi-node';

// Instantiate client
const client = new CarbonAPI();

// Create server instance
const server = new Server(
  {
    name: 'carbon_api_api',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

const tools: Tool[] = [];
const handlers: Record<string, Function> = {};

registerApiMethod({
  name: 'retrieve_documents',
  description: 'Retrieve a batch by ID',
  inputSchema: {
    type: 'object',
    properties: {
      batchId: {
        type: 'string',
        description: 'The ID of the batch to retrieve.',
      },
    },
  },
  handler: (args: any) => {
    const { batchId } = args;
    return client.documents.retrieve(batchId);
  },
});

registerApiMethod({
  name: 'upload_documents',
  description: 'Batch upload documents',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                fileUrl: {
                  type: 'string',
                  description:
                    'A link to the file to be processed, for example a presigned S3 bucket object URL.',
                },
                categoryHint: {
                  type: 'string',
                  description:
                    'Provide a suggested document category. If set, then CarbonAPI will use this category to categorise the documents in the batch.',
                  enum: [
                    'FUEL',
                    'ELECTRICITY',
                    'WASTE',
                    'FREIGHT_AIR',
                    'FREIGHT_ROAD',
                    'FREIGHT_SEAR',
                    'FREIGHT_RAIL',
                    'TRAVEL_AIR_TICKET',
                    'TRAVEL_AIR_REMITTANCE',
                    'TRAVEL_ROAD_CAR',
                    'TRAVEL_ROAD_BUS',
                    'TRAVEL_ROAD_TAXI_OR_RIDESHARE',
                    'TRAVEL_SEA',
                    'TRAVEL_RAIL',
                    'ACCOMMODATION',
                    'ACCOMODATION',
                    'SUPPLY_CHAIN',
                    'UNKNOWN',
                  ],
                },
                fileId: {
                  type: 'string',
                  description:
                    'The ID of the file to be processed. This can be used to help you keep track of requests. If supplied, we will also emit a webhook of progress on a per-file basis.',
                },
                meta: {
                  type: 'object',
                  description:
                    'Metadata to be associated with the document. This will be returned in the webhook, with all batch items as well as batch documents, and can be used to store additional information about the document.',
                },
              },
              required: ['fileUrl'],
            },
          },
          type: {
            type: 'string',
            enum: ['url'],
          },
          batchId: {
            type: 'string',
            description: 'The ID of the batch. If not provided, we will generate one.',
          },
          meta: {
            type: 'object',
            description:
              'Metadata to be associated with the batch. This will be returned in the webhook, with all batch items as well as batch documents, and can be used to store additional information about the batch.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          documents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                bucket: {
                  type: 'string',
                },
                roleArn: {
                  type: 'string',
                },
              },
              required: ['bucket', 'roleArn'],
            },
          },
          type: {
            type: 'string',
            enum: ['s3'],
          },
          batchId: {
            type: 'string',
            description: 'The ID of the batch. If not provided, we will generate one.',
          },
          meta: {
            type: 'object',
            description:
              'Metadata to be associated with the batch. This will be returned in the webhook, with all batch items as well as batch documents, and can be used to store additional information about the batch.',
          },
        },
      },
    ],
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.documents.upload(body);
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools,
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  const handler = handlers[name];
  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  const result = await handler(args);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

function registerApiMethod({
  name,
  description,
  inputSchema,
  handler,
}: {
  name: string;
  description: string;
  inputSchema: Tool['inputSchema'];
  handler: Function;
}) {
  tools.push({ name, description, inputSchema });
  handlers[name] = handler;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

console.error('running main');
main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
