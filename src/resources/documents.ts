// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Batch upload documents
   */
  upload(body: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<DocumentUploadResponse> {
    return this._client.post('/documents/batch', { body, ...options });
  }
}

export interface DocumentUploadResponse {
  batchId?: string;
}

export type DocumentUploadParams = DocumentUploadParams.Variant0 | DocumentUploadParams.Variant1;

export declare namespace DocumentUploadParams {
  export interface Variant0 {
    documents: Array<DocumentUploadParams.Variant0.Document>;

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
    documents: Array<DocumentUploadParams.Variant1.Document>;

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

export declare namespace Documents {
  export {
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
