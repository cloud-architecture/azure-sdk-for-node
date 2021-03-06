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

const models = require('./index');

/**
 * The azure async operation response.
 *
 */
class OperationResource {
  /**
   * Create a OperationResource.
   * @member {string} [status] The async operation state. Possible values
   * include: 'InProgress', 'Succeeded', 'Failed'
   * @member {object} [error] The operation error information.
   * @member {string} [error.code] The error code.
   * @member {string} [error.message] The error message.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationResource
   *
   * @returns {object} metadata of OperationResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationResource',
      type: {
        name: 'Composite',
        className: 'OperationResource',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'InProgress', 'Succeeded', 'Failed' ]
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'Errors'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationResource;
