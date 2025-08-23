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
 * LinkageTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/linkage-type
 * CodeSystem.name: LinkageType
 * CodeSystem.description: Used to distinguish different roles a resource can play within a set of linked resources.
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
 * FHIR CodeSystem: LinkageTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem LinkageType](http://hl7.org/fhir/linkage-type)
 */
export class LinkageTypeEnum implements IFhirCodeEnum {
  public static readonly SOURCE = new FhirCodeDefinition(
    'SOURCE',
    'source',
    'http://hl7.org/fhir/linkage-type',
    'Source of Truth',
    'The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.',
  );
  public static readonly ALTERNATE = new FhirCodeDefinition(
    'ALTERNATE',
    'alternate',
    'http://hl7.org/fhir/linkage-type',
    'Alternate Record',
    'The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.',
  );
  public static readonly HISTORICAL = new FhirCodeDefinition(
    'HISTORICAL',
    'historical',
    'http://hl7.org/fhir/linkage-type',
    'Historical/Obsolete Record',
    'The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      LinkageTypeEnum.SOURCE,
      LinkageTypeEnum.ALTERNATE,
      LinkageTypeEnum.HISTORICAL,
      LinkageTypeEnum.NULL
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
    } else if (LinkageTypeEnum.SOURCE.code === code) {
      return LinkageTypeEnum.SOURCE;
    } else if (LinkageTypeEnum.ALTERNATE.code === code) {
      return LinkageTypeEnum.ALTERNATE;
    } else if (LinkageTypeEnum.HISTORICAL.code === code) {
      return LinkageTypeEnum.HISTORICAL;
    } else if (LinkageTypeEnum.NULL.code === code) {
      return LinkageTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown LinkageTypeEnum 'code' value '${code}'`);
    }
  }
}
