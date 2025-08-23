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
 * SpecimenStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/specimen-status
 * CodeSystem.name: SpecimenStatus
 * CodeSystem.description: Codes providing the status/availability of a specimen.
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
 * FHIR CodeSystem: SpecimenStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem SpecimenStatus](http://hl7.org/fhir/specimen-status)
 */
export class SpecimenStatusEnum implements IFhirCodeEnum {
  public static readonly AVAILABLE = new FhirCodeDefinition(
    'AVAILABLE',
    'available',
    'http://hl7.org/fhir/specimen-status',
    'Available',
    'The physical specimen is present and in good condition.',
  );
  public static readonly UNAVAILABLE = new FhirCodeDefinition(
    'UNAVAILABLE',
    'unavailable',
    'http://hl7.org/fhir/specimen-status',
    'Unavailable',
    'There is no physical specimen because it is either lost, destroyed or consumed.',
  );
  public static readonly UNSATISFACTORY = new FhirCodeDefinition(
    'UNSATISFACTORY',
    'unsatisfactory',
    'http://hl7.org/fhir/specimen-status',
    'Unsatisfactory',
    'The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/specimen-status',
    'Entered in Error',
    'The specimen was entered in error and therefore nullified.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      SpecimenStatusEnum.AVAILABLE,
      SpecimenStatusEnum.UNAVAILABLE,
      SpecimenStatusEnum.UNSATISFACTORY,
      SpecimenStatusEnum.ENTERED_IN_ERROR,
      SpecimenStatusEnum.NULL
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
    } else if (SpecimenStatusEnum.AVAILABLE.code === code) {
      return SpecimenStatusEnum.AVAILABLE;
    } else if (SpecimenStatusEnum.UNAVAILABLE.code === code) {
      return SpecimenStatusEnum.UNAVAILABLE;
    } else if (SpecimenStatusEnum.UNSATISFACTORY.code === code) {
      return SpecimenStatusEnum.UNSATISFACTORY;
    } else if (SpecimenStatusEnum.ENTERED_IN_ERROR.code === code) {
      return SpecimenStatusEnum.ENTERED_IN_ERROR;
    } else if (SpecimenStatusEnum.NULL.code === code) {
      return SpecimenStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown SpecimenStatusEnum 'code' value '${code}'`);
    }
  }
}
