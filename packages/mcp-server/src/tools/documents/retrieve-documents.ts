// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import CarbonAPI from 'carbonapi-node';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents/batch/{batchId}',
};

export const tool: Tool = {
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
};

export const handler = (client: CarbonAPI, args: Record<string, unknown> | undefined) => {
  const { batchId, ...body } = args as any;
  return client.documents.retrieve(batchId);
};

export default { metadata, tool, handler };
