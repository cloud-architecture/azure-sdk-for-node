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
 * Class representing a JobAction.
 */
class JobAction {
  /**
   * Create a JobAction.
   * @member {string} [type] Gets or sets the job action type. Possible values
   * include: 'Http', 'Https', 'StorageQueue', 'ServiceBusQueue',
   * 'ServiceBusTopic'
   * @member {object} [request] Gets or sets the http requests.
   * @member {object} [request.authentication] Gets or sets the authentication
   * method of the request.
   * @member {string} [request.authentication.type] Polymorphic Discriminator
   * @member {string} [request.uri] Gets or sets the URI of the request.
   * @member {string} [request.method] Gets or sets the method of the request.
   * @member {string} [request.body] Gets or sets the request body.
   * @member {object} [request.headers] Gets or sets the headers.
   * @member {object} [queueMessage] Gets or sets the storage queue message.
   * @member {string} [queueMessage.storageAccount] Gets or sets the storage
   * account name.
   * @member {string} [queueMessage.queueName] Gets or sets the queue name.
   * @member {string} [queueMessage.sasToken] Gets or sets the SAS key.
   * @member {string} [queueMessage.message] Gets or sets the message.
   * @member {object} [serviceBusQueueMessage] Gets or sets the service bus
   * queue message.
   * @member {string} [serviceBusQueueMessage.queueName] Gets or sets the queue
   * name.
   * @member {object} [serviceBusTopicMessage] Gets or sets the service bus
   * topic message.
   * @member {string} [serviceBusTopicMessage.topicPath] Gets or sets the topic
   * path.
   * @member {object} [retryPolicy] Gets or sets the retry policy.
   * @member {string} [retryPolicy.retryType] Gets or sets the retry strategy
   * to be used. Possible values include: 'None', 'Fixed'
   * @member {moment.duration} [retryPolicy.retryInterval] Gets or sets the
   * retry interval between retries, specify duration in ISO 8601 format.
   * @member {number} [retryPolicy.retryCount] Gets or sets the number of times
   * a retry should be attempted.
   * @member {object} [errorAction] Gets or sets the error action.
   * @member {string} [errorAction.type] Gets or sets the job error action
   * type. Possible values include: 'Http', 'Https', 'StorageQueue',
   * 'ServiceBusQueue', 'ServiceBusTopic'
   * @member {object} [errorAction.request] Gets or sets the http requests.
   * @member {object} [errorAction.request.authentication] Gets or sets the
   * authentication method of the request.
   * @member {string} [errorAction.request.authentication.type] Polymorphic
   * Discriminator
   * @member {string} [errorAction.request.uri] Gets or sets the URI of the
   * request.
   * @member {string} [errorAction.request.method] Gets or sets the method of
   * the request.
   * @member {string} [errorAction.request.body] Gets or sets the request body.
   * @member {object} [errorAction.request.headers] Gets or sets the headers.
   * @member {object} [errorAction.queueMessage] Gets or sets the storage queue
   * message.
   * @member {string} [errorAction.queueMessage.storageAccount] Gets or sets
   * the storage account name.
   * @member {string} [errorAction.queueMessage.queueName] Gets or sets the
   * queue name.
   * @member {string} [errorAction.queueMessage.sasToken] Gets or sets the SAS
   * key.
   * @member {string} [errorAction.queueMessage.message] Gets or sets the
   * message.
   * @member {object} [errorAction.serviceBusQueueMessage] Gets or sets the
   * service bus queue message.
   * @member {string} [errorAction.serviceBusQueueMessage.queueName] Gets or
   * sets the queue name.
   * @member {object} [errorAction.serviceBusTopicMessage] Gets or sets the
   * service bus topic message.
   * @member {string} [errorAction.serviceBusTopicMessage.topicPath] Gets or
   * sets the topic path.
   * @member {object} [errorAction.retryPolicy] Gets or sets the retry policy.
   * @member {string} [errorAction.retryPolicy.retryType] Gets or sets the
   * retry strategy to be used. Possible values include: 'None', 'Fixed'
   * @member {moment.duration} [errorAction.retryPolicy.retryInterval] Gets or
   * sets the retry interval between retries, specify duration in ISO 8601
   * format.
   * @member {number} [errorAction.retryPolicy.retryCount] Gets or sets the
   * number of times a retry should be attempted.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobAction
   *
   * @returns {object} metadata of JobAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobAction',
      type: {
        name: 'Composite',
        className: 'JobAction',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'Http', 'Https', 'StorageQueue', 'ServiceBusQueue', 'ServiceBusTopic' ]
            }
          },
          request: {
            required: false,
            serializedName: 'request',
            type: {
              name: 'Composite',
              className: 'HttpRequest'
            }
          },
          queueMessage: {
            required: false,
            serializedName: 'queueMessage',
            type: {
              name: 'Composite',
              className: 'StorageQueueMessage'
            }
          },
          serviceBusQueueMessage: {
            required: false,
            serializedName: 'serviceBusQueueMessage',
            type: {
              name: 'Composite',
              className: 'ServiceBusQueueMessage'
            }
          },
          serviceBusTopicMessage: {
            required: false,
            serializedName: 'serviceBusTopicMessage',
            type: {
              name: 'Composite',
              className: 'ServiceBusTopicMessage'
            }
          },
          retryPolicy: {
            required: false,
            serializedName: 'retryPolicy',
            type: {
              name: 'Composite',
              className: 'RetryPolicy'
            }
          },
          errorAction: {
            required: false,
            serializedName: 'errorAction',
            type: {
              name: 'Composite',
              className: 'JobErrorAction'
            }
          }
        }
      }
    };
  }
}

module.exports = JobAction;
