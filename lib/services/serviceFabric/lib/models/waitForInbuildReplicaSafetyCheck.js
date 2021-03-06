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
 * Safety check that waits for the replica build operation to finish. This
 * indiciates that there is a replica that is going through the copy or is
 * providing data for building another replica. Bring the node down will abort
 * this copy operation which are typoically expensive involving data movements.
 *
 * @extends models['PartitionSafetyCheck']
 */
class WaitForInbuildReplicaSafetyCheck extends models['PartitionSafetyCheck'] {
  /**
   * Create a WaitForInbuildReplicaSafetyCheck.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WaitForInbuildReplicaSafetyCheck
   *
   * @returns {object} metadata of WaitForInbuildReplicaSafetyCheck
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WaitForInbuildReplica',
      type: {
        name: 'Composite',
        className: 'WaitForInbuildReplicaSafetyCheck',
        modelProperties: {
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          },
          partitionId: {
            required: false,
            serializedName: 'PartitionId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WaitForInbuildReplicaSafetyCheck;
