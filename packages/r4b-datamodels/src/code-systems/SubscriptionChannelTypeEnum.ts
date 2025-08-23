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
 * SubscriptionChannelTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/subscription-channel-type
 * CodeSystem.name: SubscriptionChannelType
 * CodeSystem.description: The type of method used to execute a subscription.
 * CodeSystem.version: 4.3.0
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
 * FHIR CodeSystem: SubscriptionChannelTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SubscriptionChannelType](http://hl7.org/fhir/subscription-channel-type)
 */
export class SubscriptionChannelTypeEnum implements IFhirCodeEnum {
  public static readonly REST_HOOK = new FhirCodeDefinition(
    'REST_HOOK',
    'rest-hook',
    'http://hl7.org/fhir/subscription-channel-type',
    'Rest Hook',
    'The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.',
  );
  public static readonly WEBSOCKET = new FhirCodeDefinition(
    'WEBSOCKET',
    'websocket',
    'http://hl7.org/fhir/subscription-channel-type',
    'Websocket',
    'The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.',
  );
  public static readonly EMAIL = new FhirCodeDefinition(
    'EMAIL',
    'email',
    'http://hl7.org/fhir/subscription-channel-type',
    'Email',
    'The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).',
  );
  public static readonly SMS = new FhirCodeDefinition(
    'SMS',
    'sms',
    'http://hl7.org/fhir/subscription-channel-type',
    'SMS',
    'The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).',
  );
  public static readonly MESSAGE = new FhirCodeDefinition(
    'MESSAGE',
    'message',
    'http://hl7.org/fhir/subscription-channel-type',
    'Message',
    'The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SubscriptionChannelTypeEnum.REST_HOOK,
      SubscriptionChannelTypeEnum.WEBSOCKET,
      SubscriptionChannelTypeEnum.EMAIL,
      SubscriptionChannelTypeEnum.SMS,
      SubscriptionChannelTypeEnum.MESSAGE,
      SubscriptionChannelTypeEnum.NULL
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
    } else if (SubscriptionChannelTypeEnum.REST_HOOK.code === code) {
      return SubscriptionChannelTypeEnum.REST_HOOK;
    } else if (SubscriptionChannelTypeEnum.WEBSOCKET.code === code) {
      return SubscriptionChannelTypeEnum.WEBSOCKET;
    } else if (SubscriptionChannelTypeEnum.EMAIL.code === code) {
      return SubscriptionChannelTypeEnum.EMAIL;
    } else if (SubscriptionChannelTypeEnum.SMS.code === code) {
      return SubscriptionChannelTypeEnum.SMS;
    } else if (SubscriptionChannelTypeEnum.MESSAGE.code === code) {
      return SubscriptionChannelTypeEnum.MESSAGE;
    } else if (SubscriptionChannelTypeEnum.NULL.code === code) {
      return SubscriptionChannelTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SubscriptionChannelTypeEnum 'code' value '${code}'`);
    }
  }
}
