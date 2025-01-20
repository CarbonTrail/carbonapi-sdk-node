// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Retrieve a batch
   */
  retrieve(batchId: string, options?: Core.RequestOptions): Core.APIPromise<DocumentRetrieveResponse> {
    return this._client.get(`/documents/batch/${batchId}`, options);
  }

  /**
   * Batch upload documents
   */
  upload(body: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<DocumentUploadResponse> {
    return this._client.post('/documents/batch', { body, ...options });
  }
}

export interface DocumentRetrieveResponse {
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

  /**
   * The number of documents that were processed and billed, or 0 if the batch is
   * still processing.
   */
  billedDocuments?: number;

  /**
   * The documents that were processed, or empty if the batch is still processing.
   */
  documents?: Array<DocumentRetrieveResponse.Document>;
}

export namespace DocumentRetrieveResponse {
  export interface Document {
    /**
     * The country of the organisation receiving the document. Used to select emission
     * factors.
     */
    country: 'NZ' | 'AU' | 'GB';

    /**
     * The emission category of the document.
     */
    emissionCategory:
      | 'FUEL'
      | 'ELECTRICITY'
      | 'WASTE'
      | 'FREIGHT_AIR'
      | 'FREIGHT_ROAD'
      | 'FREIGHT_SEAR'
      | 'FREIGHT_RAIL'
      | 'TRAVEL_AIR_TICKET'
      | 'TRAVEL_AIR_REMITTANCE'
      | 'TRAVEL_ROAD_CAR'
      | 'TRAVEL_ROAD_BUS'
      | 'TRAVEL_ROAD_TAXI_OR_RIDESHARE'
      | 'TRAVEL_SEA'
      | 'TRAVEL_RAIL'
      | 'ACCOMMODATION'
      | 'ACCOMODATION'
      | 'SUPPLY_CHAIN'
      | 'UNKNOWN';

    financial: Document.Financial;

    items: Array<Document.Item>;

    /**
     * The status of the document.
     */
    status:
      | 'DOWNLOADING'
      | 'PENDING'
      | 'PROCESSING_DISCOVERING_TYPE'
      | 'PROCESSING_RAG'
      | 'PROCESSING_ANALYZING'
      | 'COMPLETED'
      | 'ERROR';

    /**
     * The error that occurred while processing the document, if any.
     */
    error?:
      | 'UNSUPPORTED_CONTENT_TYPE'
      | 'UNPROCESSABLE_DOCUMENT'
      | 'UNKNOWN'
      | 'FILE_TOO_LARGE'
      | 'PDF_PROCESSING_ERROR'
      | 'PARSE_ERROR'
      | 'S3_ERROR'
      | 'EMPTY_DOCUMENT'
      | 'TOO_MANY_PAGES'
      | 'DOCUMENT_NOT_FOUND'
      | 'ORGANISATION_NOT_FOUND'
      | 'INVALID_REQUEST_BODY'
      | 'DOWNLOAD_ERROR';

    /**
     * The invoice number, reference, or other identifying code of the document. You
     * can search any part of the document to find this.
     */
    reference?: string;
  }

  export namespace Document {
    export interface Financial {
      /**
       * The subtotal amount of the document in the currency of the document.
       */
      subtotal: number;

      /**
       * The tax amount of the document in the currency of the document.
       */
      tax: number;

      /**
       * The total amount of the document in the currency of the document.
       */
      total: number;

      /**
       * The 3-letter currency code which the document is billed in.
       */
      currency?: string;

      /**
       * The customer of the document.
       */
      customer?: string;

      /**
       * The supplier of the document. Try to align to well-known company names if
       * possible.
       */
      supplier?: string;
    }

    export interface Item {
      emissionFactor: Item.EmissionFactor;

      /**
       * The code of the emission factor used to calculate the emissions for the line
       * item from the list of emission factors.
       */
      emissionFactorId: string;

      emissions: Item.Emissions;

      /**
       * 0=EXPLICIT|1=DERIVED|2=MISSING|3=OTHER|4=UNKNOWN|5=UNSUPPORTED
       */
      inference: number;

      /**
       * The start date of the line item, in UTC.
       */
      periodFrom: string;

      /**
       * The end date of the line item, in UTC.
       */
      periodTo: string;

      /**
       * The quantity of the line item.
       */
      quantity: number;

      /**
       * A reference for the line item, such as a docket number, card number, or other
       * meaningful identifier
       */
      reference: string;

      /**
       * The unit associated with the quantity and emission factor
       */
      unit: string;

      /**
       * Whether the item has occured due to another activity, for example T&D losses.
       */
      isSideEffect?: boolean;

      meta?: unknown;

      /**
       * The steps that were taken to calculate the emissions for the item.
       */
      steps?: Array<string>;
    }

    export namespace Item {
      export interface EmissionFactor {
        /**
         * The code of the emission factor.
         */
        code: string;

        /**
         * The name of the emission factor.
         */
        name: string;

        /**
         * The source name of the emission factor.
         */
        sourceName: string;

        /**
         * The source URL of the emission factor.
         */
        sourceUrl: string;

        /**
         * The year of the emission factor.
         */
        yearOrDefault: string;
      }

      export interface Emissions {
        /**
         * The amount of CH4 in kg. This is the CH4 emissions from the item itself.
         */
        ch4: number;

        /**
         * The amount of CO2 in kg. This is the CO2 emissions from the item itself.
         */
        co2: number;

        /**
         * The amount of CO2e in kg. This is the emissions from the item itself.
         */
        co2e: number;

        /**
         * The amount of N2O in kg. This is the N2O emissions from the item itself.
         */
        n2o: number;
      }
    }
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
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
