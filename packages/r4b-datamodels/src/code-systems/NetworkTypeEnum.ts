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
 * NetworkTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/network-type
 * CodeSystem.name: NetworkType
 * CodeSystem.description: The type of network access point of this agent in the audit event.
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
 * FHIR CodeSystem: NetworkTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem NetworkType](http://hl7.org/fhir/network-type)
 */
export class NetworkTypeEnum implements IFhirCodeEnum {
  public static readonly _1 = new FhirCodeDefinition(
    '_1',
    '1',
    'http://hl7.org/fhir/network-type',
    'Machine Name',
    'The machine name, including DNS name.',
  );
  public static readonly _2 = new FhirCodeDefinition(
    '_2',
    '2',
    'http://hl7.org/fhir/network-type',
    'IP Address',
    'The assigned Internet Protocol (IP) address.',
  );
  public static readonly _3 = new FhirCodeDefinition(
    '_3',
    '3',
    'http://hl7.org/fhir/network-type',
    'Telephone Number',
    'The assigned telephone number.',
  );
  public static readonly _4 = new FhirCodeDefinition(
    '_4',
    '4',
    'http://hl7.org/fhir/network-type',
    'Email address',
    'The assigned email address.',
  );
  public static readonly _5 = new FhirCodeDefinition(
    '_5',
    '5',
    'http://hl7.org/fhir/network-type',
    'URI',
    'URI (User directory, HTTP-PUT, ftp, etc.).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      NetworkTypeEnum._1,
      NetworkTypeEnum._2,
      NetworkTypeEnum._3,
      NetworkTypeEnum._4,
      NetworkTypeEnum._5,
      NetworkTypeEnum.NULL
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
    } else if (NetworkTypeEnum._1.code === code) {
      return NetworkTypeEnum._1;
    } else if (NetworkTypeEnum._2.code === code) {
      return NetworkTypeEnum._2;
    } else if (NetworkTypeEnum._3.code === code) {
      return NetworkTypeEnum._3;
    } else if (NetworkTypeEnum._4.code === code) {
      return NetworkTypeEnum._4;
    } else if (NetworkTypeEnum._5.code === code) {
      return NetworkTypeEnum._5;
    } else if (NetworkTypeEnum.NULL.code === code) {
      return NetworkTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown NetworkTypeEnum 'code' value '${code}'`);
    }
  }
}
