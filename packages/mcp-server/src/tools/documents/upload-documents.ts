// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'carbonapi-node-mcp/filtering';
import { Metadata, asTextContentResult } from 'carbonapi-node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import CarbonAPI from 'carbonapi-node';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/documents/batch',
};

export const tool: Tool = {
  name: 'upload_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBatch upload documents\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    batchId: {\n      type: 'string'\n    }\n  }\n}\n```",
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
                    'STATIONARY_COMBUSTION',
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
                  additionalProperties: true,
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
            additionalProperties: true,
          },
        },
        required: ['documents', 'type'],
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
            additionalProperties: true,
          },
        },
        required: ['documents', 'type'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: CarbonAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.documents.upload(body)));
};

export default { metadata, tool, handler };
