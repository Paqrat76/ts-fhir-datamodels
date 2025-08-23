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
 * ConditionalReadStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/conditional-read-status
 * CodeSystem.name: ConditionalReadStatus
 * CodeSystem.description: A code that indicates how the server supports conditional read.
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
 * FHIR CodeSystem: ConditionalReadStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ConditionalReadStatus](http://hl7.org/fhir/conditional-read-status)
 */
export class ConditionalReadStatusEnum implements IFhirCodeEnum {
  public static readonly NOT_SUPPORTED = new FhirCodeDefinition(
    'NOT_SUPPORTED',
    'not-supported',
    'http://hl7.org/fhir/conditional-read-status',
    'Not Supported',
    'No support for conditional reads.',
  );
  public static readonly MODIFIED_SINCE = new FhirCodeDefinition(
    'MODIFIED_SINCE',
    'modified-since',
    'http://hl7.org/fhir/conditional-read-status',
    'If-Modified-Since',
    'Conditional reads are supported, but only with the If-Modified-Since HTTP Header.',
  );
  public static readonly NOT_MATCH = new FhirCodeDefinition(
    'NOT_MATCH',
    'not-match',
    'http://hl7.org/fhir/conditional-read-status',
    'If-None-Match',
    'Conditional reads are supported, but only with the If-None-Match HTTP Header.',
  );
  public static readonly FULL_SUPPORT = new FhirCodeDefinition(
    'FULL_SUPPORT',
    'full-support',
    'http://hl7.org/fhir/conditional-read-status',
    'Full Support',
    'Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ConditionalReadStatusEnum.NOT_SUPPORTED,
      ConditionalReadStatusEnum.MODIFIED_SINCE,
      ConditionalReadStatusEnum.NOT_MATCH,
      ConditionalReadStatusEnum.FULL_SUPPORT,
      ConditionalReadStatusEnum.NULL
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
    } else if (ConditionalReadStatusEnum.NOT_SUPPORTED.code === code) {
      return ConditionalReadStatusEnum.NOT_SUPPORTED;
    } else if (ConditionalReadStatusEnum.MODIFIED_SINCE.code === code) {
      return ConditionalReadStatusEnum.MODIFIED_SINCE;
    } else if (ConditionalReadStatusEnum.NOT_MATCH.code === code) {
      return ConditionalReadStatusEnum.NOT_MATCH;
    } else if (ConditionalReadStatusEnum.FULL_SUPPORT.code === code) {
      return ConditionalReadStatusEnum.FULL_SUPPORT;
    } else if (ConditionalReadStatusEnum.NULL.code === code) {
      return ConditionalReadStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ConditionalReadStatusEnum 'code' value '${code}'`);
    }
  }
}
