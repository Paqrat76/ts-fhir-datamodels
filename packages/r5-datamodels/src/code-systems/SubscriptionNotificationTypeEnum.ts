/*
 * Copyright (c) 2025. Joe Paquette
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

/**
 * This file is generated from a FHIR CodeSystem definition.
 * DO NOT make any modifications!
 *
 * SubscriptionNotificationTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/subscription-notification-type
 * CodeSystem.name: SubscriptionNotificationType
 * CodeSystem.description: The type of notification represented by the status message.
 * CodeSystem.version: 5.0.0
 * CodeSystem.caseSensitive: true
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  fhirCode,
  FhirCodeDefinition,
  IFhirCodeDefinition,
  IFhirCodeEnum,
  InvalidCodeError,
} from '@paq-ts-fhir/fhir-core';

/**
 * FHIR CodeSystem: SubscriptionNotificationTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SubscriptionNotificationType](http://hl7.org/fhir/subscription-notification-type)
 */
export class SubscriptionNotificationTypeEnum implements IFhirCodeEnum {
  public static readonly HANDSHAKE = new FhirCodeDefinition(
    'HANDSHAKE',
    'handshake',
    'http://hl7.org/fhir/subscription-notification-type',
    'Handshake',
    'The status was generated as part of the setup or verification of a communications channel.',
  );
  public static readonly HEARTBEAT = new FhirCodeDefinition(
    'HEARTBEAT',
    'heartbeat',
    'http://hl7.org/fhir/subscription-notification-type',
    'Heartbeat',
    'The status was generated to perform a heartbeat notification to the subscriber.',
  );
  public static readonly EVENT_NOTIFICATION = new FhirCodeDefinition(
    'EVENT_NOTIFICATION',
    'event-notification',
    'http://hl7.org/fhir/subscription-notification-type',
    'Event Notification',
    'The status was generated for an event to the subscriber.',
  );
  public static readonly QUERY_STATUS = new FhirCodeDefinition(
    'QUERY_STATUS',
    'query-status',
    'http://hl7.org/fhir/subscription-notification-type',
    'Query Status',
    'The status was generated in response to a status query/request.',
  );
  public static readonly QUERY_EVENT = new FhirCodeDefinition(
    'QUERY_EVENT',
    'query-event',
    'http://hl7.org/fhir/subscription-notification-type',
    'Query Event',
    'The status was generated in response to an event query/request.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SubscriptionNotificationTypeEnum.HANDSHAKE,
      SubscriptionNotificationTypeEnum.HEARTBEAT,
      SubscriptionNotificationTypeEnum.EVENT_NOTIFICATION,
      SubscriptionNotificationTypeEnum.QUERY_STATUS,
      SubscriptionNotificationTypeEnum.QUERY_EVENT,
      SubscriptionNotificationTypeEnum.NULL
    ];
  }

  /**
   * Converts a given FHIR code into its corresponding FHIR code definition.
   *
   * @param {fhirCode | undefined} code - The FHIR code to be converted. If undefined, an error will be thrown.
   * @returns {IFhirCodeDefinition} The FHIR code definition corresponding to the provided code.
   * @throws {@link InvalidCodeError} for undefined or invalid code value
   */
  fromCode(code: fhirCode | undefined): IFhirCodeDefinition {
    if (code === undefined) {
      throw new InvalidCodeError(`The provided 'code' value is undefined`);
    } else if (SubscriptionNotificationTypeEnum.HANDSHAKE.code === code) {
      return SubscriptionNotificationTypeEnum.HANDSHAKE;
    } else if (SubscriptionNotificationTypeEnum.HEARTBEAT.code === code) {
      return SubscriptionNotificationTypeEnum.HEARTBEAT;
    } else if (SubscriptionNotificationTypeEnum.EVENT_NOTIFICATION.code === code) {
      return SubscriptionNotificationTypeEnum.EVENT_NOTIFICATION;
    } else if (SubscriptionNotificationTypeEnum.QUERY_STATUS.code === code) {
      return SubscriptionNotificationTypeEnum.QUERY_STATUS;
    } else if (SubscriptionNotificationTypeEnum.QUERY_EVENT.code === code) {
      return SubscriptionNotificationTypeEnum.QUERY_EVENT;
    } else if (SubscriptionNotificationTypeEnum.NULL.code === code) {
      return SubscriptionNotificationTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SubscriptionNotificationTypeEnum 'code' value '${code}'`);
    }
  }
}
