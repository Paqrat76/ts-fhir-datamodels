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
 * SubscriptionPayloadContentEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/subscription-payload-content
 * CodeSystem.name: SubscriptionPayloadContent
 * CodeSystem.description: Codes to represent how much resource content to send in the notification payload.
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
 * FHIR CodeSystem: SubscriptionPayloadContentEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SubscriptionPayloadContent](http://hl7.org/fhir/subscription-payload-content)
 */
export class SubscriptionPayloadContentEnum implements IFhirCodeEnum {
  public static readonly EMPTY = new FhirCodeDefinition(
    'EMPTY',
    'empty',
    'http://hl7.org/fhir/subscription-payload-content',
    'Empty',
    'No resource content is transacted in the notification payload.',
  );
  public static readonly ID_ONLY = new FhirCodeDefinition(
    'ID_ONLY',
    'id-only',
    'http://hl7.org/fhir/subscription-payload-content',
    'Id-only',
    'Only the resource id is transacted in the notification payload.',
  );
  public static readonly FULL_RESOURCE = new FhirCodeDefinition(
    'FULL_RESOURCE',
    'full-resource',
    'http://hl7.org/fhir/subscription-payload-content',
    'Full-resource',
    'The entire resource is transacted in the notification payload.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SubscriptionPayloadContentEnum.EMPTY,
      SubscriptionPayloadContentEnum.ID_ONLY,
      SubscriptionPayloadContentEnum.FULL_RESOURCE,
      SubscriptionPayloadContentEnum.NULL
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
    } else if (SubscriptionPayloadContentEnum.EMPTY.code === code) {
      return SubscriptionPayloadContentEnum.EMPTY;
    } else if (SubscriptionPayloadContentEnum.ID_ONLY.code === code) {
      return SubscriptionPayloadContentEnum.ID_ONLY;
    } else if (SubscriptionPayloadContentEnum.FULL_RESOURCE.code === code) {
      return SubscriptionPayloadContentEnum.FULL_RESOURCE;
    } else if (SubscriptionPayloadContentEnum.NULL.code === code) {
      return SubscriptionPayloadContentEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SubscriptionPayloadContentEnum 'code' value '${code}'`);
    }
  }
}
