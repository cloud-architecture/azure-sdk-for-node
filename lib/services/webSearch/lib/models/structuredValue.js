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
 * Class representing a StructuredValue.
 * @extends models['Intangible']
 */
class StructuredValue extends models['Intangible'] {
  /**
   * Create a StructuredValue.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StructuredValue
   *
   * @returns {object} metadata of StructuredValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StructuredValue',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'StructuredValue',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StructuredValue;
