// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CarbonAPI from 'carbonapi';
import { Response } from 'node-fetch';

const client = new CarbonAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('batchUpload: only required params', async () => {
    const responsePromise = client.documents.batchUpload({
      documents: [
        {
          fileUrl:
            'https://s3.eu-west-2.amazonaws.com/my-bucket/my-object?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20130524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20130524T000000Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b59cfa898d8b4c4e4355b2f9a98fb8c145dda827c92d9ac34897f0554d1e5bf4',
        },
      ],
      type: 'url',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batchUpload: required and optional params', async () => {
    const response = await client.documents.batchUpload({
      documents: [
        {
          fileUrl:
            'https://s3.eu-west-2.amazonaws.com/my-bucket/my-object?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20130524%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20130524T000000Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b59cfa898d8b4c4e4355b2f9a98fb8c145dda827c92d9ac34897f0554d1e5bf4',
          fileId: 'fileId',
        },
      ],
      type: 'url',
      batchId: 'batchId',
    });
  });
});
