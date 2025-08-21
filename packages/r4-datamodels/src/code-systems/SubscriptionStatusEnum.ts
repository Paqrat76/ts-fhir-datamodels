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
 * SubscriptionStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/subscription-status
 * CodeSystem.name: SubscriptionStatus
 * CodeSystem.description: The status of a subscription.
 * CodeSystem.version: 4.0.1
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
 * FHIR CodeSystem: SubscriptionStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SubscriptionStatus](http://hl7.org/fhir/subscription-status)
 */
export class SubscriptionStatusEnum implements IFhirCodeEnum {
  public static readonly REQUESTED = new FhirCodeDefinition(
    'REQUESTED',
    'requested',
    'http://hl7.org/fhir/subscription-status',
    'Requested',
    'The client has requested the subscription, and the server has not yet set it up.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/subscription-status',
    'Active',
    'The subscription is active.',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/subscription-status',
    'Error',
    'The server has an error executing the notification.',
  );
  public static readonly OFF = new FhirCodeDefinition(
    'OFF',
    'off',
    'http://hl7.org/fhir/subscription-status',
    'Off',
    'Too many errors have occurred or the subscription has expired.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SubscriptionStatusEnum.REQUESTED,
      SubscriptionStatusEnum.ACTIVE,
      SubscriptionStatusEnum.ERROR,
      SubscriptionStatusEnum.OFF,
      SubscriptionStatusEnum.NULL
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
    } else if (SubscriptionStatusEnum.REQUESTED.code === code) {
      return SubscriptionStatusEnum.REQUESTED;
    } else if (SubscriptionStatusEnum.ACTIVE.code === code) {
      return SubscriptionStatusEnum.ACTIVE;
    } else if (SubscriptionStatusEnum.ERROR.code === code) {
      return SubscriptionStatusEnum.ERROR;
    } else if (SubscriptionStatusEnum.OFF.code === code) {
      return SubscriptionStatusEnum.OFF;
    } else if (SubscriptionStatusEnum.NULL.code === code) {
      return SubscriptionStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SubscriptionStatusEnum 'code' value '${code}'`);
    }
  }
}
