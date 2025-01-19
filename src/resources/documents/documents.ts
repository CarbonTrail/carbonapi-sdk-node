// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BatchAPI from './batch';
import { Batch, BatchRetrieveResponse } from './batch';

export class Documents extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Batch upload documents
   */
  batchUpload(
    body: DocumentBatchUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentBatchUploadResponse> {
    return this._client.post('/documents/batch', { body, ...options });
  }
}

export interface DocumentBatchUploadResponse {
  batchId: string;
}

export type DocumentBatchUploadParams =
  | DocumentBatchUploadParams.Variant0
  | DocumentBatchUploadParams.Variant1;

export declare namespace DocumentBatchUploadParams {
  export interface Variant0 {
    documents: Array<DocumentBatchUploadParams.Variant0.Document>;

    type: 'url';

    /**
     * The ID of the batch. If not provided, we will generate one.
     */
    batchId?: string;
  }

  export namespace Variant0 {
    export interface Document {
      /**
       * A link to the file to be processed, for example a presigned S3 bucket object
       * URL.
       */
      fileUrl: string;

      /**
       * The ID of the file to be processed. This can be used to help you keep track of
       * requests. If supplied, we will also emit a webhook of progress on a per-file
       * basis.
       */
      fileId?: string;
    }
  }

  export interface Variant1 {
    documents: Array<DocumentBatchUploadParams.Variant1.Document>;

    type: 's3';

    /**
     * The ID of the batch. If not provided, we will generate one.
     */
    batchId?: string;
  }

  export namespace Variant1 {
    export interface Document {
      bucket: string;

      roleArn: string;
    }
  }
}

Documents.Batch = Batch;

export declare namespace Documents {
  export {
    type DocumentBatchUploadResponse as DocumentBatchUploadResponse,
    type DocumentBatchUploadParams as DocumentBatchUploadParams,
  };

  export { Batch as Batch, type BatchRetrieveResponse as BatchRetrieveResponse };
}
