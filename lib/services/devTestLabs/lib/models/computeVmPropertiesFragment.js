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
 * Properties of a virtual machine returned by the Microsoft.Compute API.
 *
 */
class ComputeVmPropertiesFragment {
  /**
   * Create a ComputeVmPropertiesFragment.
   * @member {array} [statuses] Gets the statuses of the virtual machine.
   * @member {string} [osType] Gets the OS type of the virtual machine.
   * @member {string} [vmSize] Gets the size of the virtual machine.
   * @member {string} [networkInterfaceId] Gets the network interface ID of the
   * virtual machine.
   * @member {string} [osDiskId] Gets OS disk blob uri for the virtual machine.
   * @member {array} [dataDiskIds] Gets data disks blob uri for the virtual
   * machine.
   * @member {array} [dataDisks] Gets all data disks attached to the virtual
   * machine.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputeVmPropertiesFragment
   *
   * @returns {object} metadata of ComputeVmPropertiesFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeVmPropertiesFragment',
      type: {
        name: 'Composite',
        className: 'ComputeVmPropertiesFragment',
        modelProperties: {
          statuses: {
            required: false,
            serializedName: 'statuses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ComputeVmInstanceViewStatusFragmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'ComputeVmInstanceViewStatusFragment'
                  }
              }
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          },
          vmSize: {
            required: false,
            serializedName: 'vmSize',
            type: {
              name: 'String'
            }
          },
          networkInterfaceId: {
            required: false,
            serializedName: 'networkInterfaceId',
            type: {
              name: 'String'
            }
          },
          osDiskId: {
            required: false,
            serializedName: 'osDiskId',
            type: {
              name: 'String'
            }
          },
          dataDiskIds: {
            required: false,
            serializedName: 'dataDiskIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          dataDisks: {
            required: false,
            serializedName: 'dataDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ComputeDataDiskFragmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'ComputeDataDiskFragment'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeVmPropertiesFragment;