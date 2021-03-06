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
 * Class representing a CampaignPushParameters.
 */
class CampaignPushParameters {
  /**
   * Create a CampaignPushParameters.
   * @member {array} deviceIds Device identifiers to push as a JSON array of
   * strings. Note that if you want to push the same campaign several times to
   * the same device, you need to make several API calls.
   * @member {object} [data] Alternative campaign's content to use instead of
   * the referenced campaign. All campaign's properties can be overridden
   * except for the following: `name`, `manualPush`, `audience`, `startTime`
   * and `timezone`. `endTime` can be overridden while keeping original
   * `timezone` parameter. The effect is to change the client side expiration
   * of the received campaign for the specific devices. If your campaign is a
   * *poll*, the provided data should contain the same number of questions and
   * choices that the one you created with the create command. Please note that
   * all the push messages created using this parameter will expire after 4
   * weeks at maximum (`endTime` property of the campaign will be used if lower
   * than 4 weeks in the future).
   * @member {string} [data.name] Unique name of the campaign.
   * @member {object} [data.audience] Specify which users will be targeted by
   * this campaign. By default, all users will be targeted. If you set
   * `pushMode` property to `manual`, the only thing you can specify in the
   * audience is the push quota filter. An audience is a boolean expression
   * made of criteria (variables) operators (`not`, `and` or `or`) and
   * parenthesis. Additionally, a set of filters can be added to an audience.
   * 65535 bytes max as per JSON encoding.
   * @member {string} [data.audience.expression] Boolean expression made of
   * criteria (variables) operators (`not`, `and` or `or`) and parenthesis.
   * Criterion names in the audience expression must start with a capital
   * letter and can only contain alphanumeric (A-Z,a-z,0-9) and underscore (_)
   * characters.
   * @member {object} [data.audience.criteria] Criteria by name.
   * @member {array} [data.audience.filters] Global filters applied to all
   * devices.
   * @member {string} [data.category] Category of the campaign. Categories can
   * be used on the application side to customize campaigns.
   * @member {string} [data.pushMode] Announcements/polls only. Defines how the
   * campaign is pushed. Valid values are: * `real-time`: Never ending
   * campaign, the campaign will be delivered  to your existing users and also
   * to your new users. * `one-shot`: In this mode, the campaign will be
   * delivered only to your existing users (campaign will stop after that). *
   * `manual`: In this mode, the campaign will not be pushed automatically to
   * devices. You will have to use the Push campaign command to push the
   * campaign to your end-users. Campaigns can be pushed multiple times to the
   * same device.
   * . Possible values include: 'real-time', 'one-shot', 'manual'
   * @member {string} [data.type] Applicable only to announcements and data
   * pushes. Type of announcement. Valid values are: * `text/plain`: Text-only
   * announcement: `body` property should only contain plain text. *
   * `text/html`: HTML announcement: `body` attribute can contain HTML code. *
   * `only_notif`: Notification-only announcement. With this kind of
   * announcements, the `body`, `title`, `actionButtonText` and
   * `exitButtonText` are ignored. Type of data push. Valid values are: *
   * `text/plain`: Text only data push: `body` property must be plain text. *
   * `text/base64`: Base 64 data push: `body` property must be encoded in base
   * 64.
   * . Possible values include: 'text/plain', 'text/html', 'only_notif',
   * 'text/base64'
   * @member {string} [data.deliveryTime] Announcements/polls only. Defines
   * when the campaign should be delivered. Valid values are: * `any`: Campaign
   * will be delivered as soon as possible. * `background`: iOS only. Campaign
   * will be only delivered when the application is in background (out of app).
   * * `session`: Campaign will be delivered when the application is running.
   * . Possible values include: 'any', 'background', 'session'
   * @member {array} [data.deliveryActivities] Announcements/polls only. Array
   * containing the list of activities in which the campaign can be delivered.
   * deliveryTime must be set to session. If the platform is iOS, this option
   * can also be set if deliveryTime is set to any. In that case, if the
   * campaign is received when the application is launched, it will be
   * delivered only in the specified list of activities.
   * @member {string} [data.startTime] The date at which the campaign should be
   * started. The date shall conform to the following format:
   * `yyyy-MM-ddTHH:mm:ssZ`. * If you set pushMode property to manual, this
   * attribute will be ignored. * If you set pushMode property to one-shot,
   * then the timezone attribute must be specified. Example: `2011-11-21
   * 15:23Z`
   * @member {string} [data.endTime] The date at which the campaign should be
   * finished. The date shall conform to the following format:
   * `yyyy-MM-ddTHH:mm:ssZ`. Example: `2011-11-21 15:23Z`
   * @member {string} [data.timezone] The id of the time zone to use for the
   * startTime and endTime dates. If not provided, the two date attributes will
   * be expressed using the device timezone. Example: America/Los_Angeles
   * @member {string} [data.notificationType] Android only. Defines how the
   * notification should be displayed. Valid values are: * `system`: Display
   * the notification using a standard system notification. * `popup`: Display
   * the notification using a in-app banner notification.
   * . Possible values include: 'system', 'popup'
   * @member {boolean} [data.notificationIcon] A flag indicating whether or not
   * you want to display the resource icon in notification content.
   * @member {boolean} [data.notificationCloseable] A flag indicating whether
   * or not you want the notification to be closeable.
   * @member {boolean} [data.notificationVibrate] Android only. A flag
   * indicating whether or not you want the system notification to make a
   * vibration. The notificationType property must be set to system.
   * @member {boolean} [data.notificationSound] * `Android`: A flag indicating
   * whether or not you want the system notification to make a sound. The
   * `notificationType` property must be set to `system`. * `iOS`: A flag
   * indicating whether or not you want the native Apple Push notification to
   * make a sound. The `deliveryTime` property must be set to `any` or
   * `background`. This will play the 'default' sound. If you want to play a
   * custom sound, see the `notificationOptions` property. * `Windows`: A flag
   * indicating whether or not you want the native Windows Notification Service
   * to make a sound. The `deliveryTime` property must be set to `any`.
   * @member {boolean} [data.notificationBadge] A flag indicating whether or
   * not you want the native Apple Push notification to update the badge icon
   * to the number of unread messages. The `deliveryTime` property must be set
   * to `any` or `background`.
   * @member {object} [data.localization] Push campaigns can be localized using
   * an optional JSON object. The JSON key is a two-character language code as
   * specified by the ISO 639-1 standard. The corresponding value is an object
   * containing the localizable properties.
   * @member {array} [data.questions] Poll questions.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CampaignPushParameters
   *
   * @returns {object} metadata of CampaignPushParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CampaignPushParameters',
      type: {
        name: 'Composite',
        className: 'CampaignPushParameters',
        modelProperties: {
          deviceIds: {
            required: true,
            serializedName: 'deviceIds',
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
          data: {
            required: false,
            serializedName: 'data',
            type: {
              name: 'Composite',
              className: 'Campaign'
            }
          }
        }
      }
    };
  }
}

module.exports = CampaignPushParameters;
