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
 * PublicationStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/publication-status
 * CodeSystem.name: PublicationStatus
 * CodeSystem.description: The lifecycle status of an artifact.
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
 * FHIR CodeSystem: PublicationStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem PublicationStatus](http://hl7.org/fhir/publication-status)
 */
export class PublicationStatusEnum implements IFhirCodeEnum {
  public static readonly DRAFT = new FhirCodeDefinition(
    'DRAFT',
    'draft',
    'http://hl7.org/fhir/publication-status',
    'Draft',
    'This resource is still under development and is not yet considered to be ready for normal use.',
  );
  public static readonly ACTIVE = new FhirCodeDefinition(
    'ACTIVE',
    'active',
    'http://hl7.org/fhir/publication-status',
    'Active',
    'This resource is ready for normal use.',
  );
  public static readonly RETIRED = new FhirCodeDefinition(
    'RETIRED',
    'retired',
    'http://hl7.org/fhir/publication-status',
    'Retired',
    'This resource has been withdrawn or superseded and should no longer be used.',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/publication-status',
    'Unknown',
    'The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it\'s just not known which one.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      PublicationStatusEnum.DRAFT,
      PublicationStatusEnum.ACTIVE,
      PublicationStatusEnum.RETIRED,
      PublicationStatusEnum.UNKNOWN,
      PublicationStatusEnum.NULL
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
    } else if (PublicationStatusEnum.DRAFT.code === code) {
      return PublicationStatusEnum.DRAFT;
    } else if (PublicationStatusEnum.ACTIVE.code === code) {
      return PublicationStatusEnum.ACTIVE;
    } else if (PublicationStatusEnum.RETIRED.code === code) {
      return PublicationStatusEnum.RETIRED;
    } else if (PublicationStatusEnum.UNKNOWN.code === code) {
      return PublicationStatusEnum.UNKNOWN;
    } else if (PublicationStatusEnum.NULL.code === code) {
      return PublicationStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown PublicationStatusEnum 'code' value '${code}'`);
    }
  }
}
