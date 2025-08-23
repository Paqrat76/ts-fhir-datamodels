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
 * ListStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/list-status
 * CodeSystem.name: ListStatus
 * CodeSystem.description: The current state of the list.
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
 * FHIR CodeSystem: ListStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ListStatus](http://hl7.org/fhir/list-status)
 */
export class ListStatusEnum implements IFhirCodeEnum {
  public static readonly CURRENT = new FhirCodeDefinition(
    'CURRENT',
    'current',
    'http://hl7.org/fhir/list-status',
    'Current',
    'The list is considered to be an active part of the patient\'s record.',
  );
  public static readonly RETIRED = new FhirCodeDefinition(
    'RETIRED',
    'retired',
    'http://hl7.org/fhir/list-status',
    'Retired',
    'The list is "old" and should no longer be considered accurate or relevant.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/list-status',
    'Entered In Error',
    'The list was never accurate.  It is retained for medico-legal purposes only.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ListStatusEnum.CURRENT,
      ListStatusEnum.RETIRED,
      ListStatusEnum.ENTERED_IN_ERROR,
      ListStatusEnum.NULL
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
    } else if (ListStatusEnum.CURRENT.code === code) {
      return ListStatusEnum.CURRENT;
    } else if (ListStatusEnum.RETIRED.code === code) {
      return ListStatusEnum.RETIRED;
    } else if (ListStatusEnum.ENTERED_IN_ERROR.code === code) {
      return ListStatusEnum.ENTERED_IN_ERROR;
    } else if (ListStatusEnum.NULL.code === code) {
      return ListStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ListStatusEnum 'code' value '${code}'`);
    }
  }
}
