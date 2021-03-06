/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Reponse body for generating an upload URI.
 *
 */
class GenerateUploadUriResponse {
  /**
   * Create a GenerateUploadUriResponse.
   * @member {string} [uploadUri] The upload URI for the VHD.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GenerateUploadUriResponse
   *
   * @returns {object} metadata of GenerateUploadUriResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GenerateUploadUriResponse',
      type: {
        name: 'Composite',
        className: 'GenerateUploadUriResponse',
        modelProperties: {
          uploadUri: {
            required: false,
            serializedName: 'uploadUri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GenerateUploadUriResponse;
