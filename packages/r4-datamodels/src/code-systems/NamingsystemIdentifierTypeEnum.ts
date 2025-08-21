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
 * NamingsystemIdentifierTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/namingsystem-identifier-type
 * CodeSystem.name: NamingsystemIdentifierType
 * CodeSystem.description: Identifies the style of unique identifier used to identify a namespace.
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
 * FHIR CodeSystem: NamingsystemIdentifierTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem NamingsystemIdentifierType](http://hl7.org/fhir/namingsystem-identifier-type)
 */
export class NamingsystemIdentifierTypeEnum implements IFhirCodeEnum {
  public static readonly OID = new FhirCodeDefinition(
    'OID',
    'oid',
    'http://hl7.org/fhir/namingsystem-identifier-type',
    'OID',
    'An ISO object identifier; e.g. 1.2.3.4.5.',
  );
  public static readonly UUID = new FhirCodeDefinition(
    'UUID',
    'uuid',
    'http://hl7.org/fhir/namingsystem-identifier-type',
    'UUID',
    'A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.',
  );
  public static readonly URI = new FhirCodeDefinition(
    'URI',
    'uri',
    'http://hl7.org/fhir/namingsystem-identifier-type',
    'URI',
    'A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.',
  );
  public static readonly OTHER = new FhirCodeDefinition(
    'OTHER',
    'other',
    'http://hl7.org/fhir/namingsystem-identifier-type',
    'Other',
    'Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      NamingsystemIdentifierTypeEnum.OID,
      NamingsystemIdentifierTypeEnum.UUID,
      NamingsystemIdentifierTypeEnum.URI,
      NamingsystemIdentifierTypeEnum.OTHER,
      NamingsystemIdentifierTypeEnum.NULL
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
    } else if (NamingsystemIdentifierTypeEnum.OID.code === code) {
      return NamingsystemIdentifierTypeEnum.OID;
    } else if (NamingsystemIdentifierTypeEnum.UUID.code === code) {
      return NamingsystemIdentifierTypeEnum.UUID;
    } else if (NamingsystemIdentifierTypeEnum.URI.code === code) {
      return NamingsystemIdentifierTypeEnum.URI;
    } else if (NamingsystemIdentifierTypeEnum.OTHER.code === code) {
      return NamingsystemIdentifierTypeEnum.OTHER;
    } else if (NamingsystemIdentifierTypeEnum.NULL.code === code) {
      return NamingsystemIdentifierTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown NamingsystemIdentifierTypeEnum 'code' value '${code}'`);
    }
  }
}
