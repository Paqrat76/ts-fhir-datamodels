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
 * HistoryStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/history-status
 * CodeSystem.name: HistoryStatus
 * CodeSystem.description: A code that identifies the status of the family history record.
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
 * FHIR CodeSystem: HistoryStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem HistoryStatus](http://hl7.org/fhir/history-status)
 */
export class HistoryStatusEnum implements IFhirCodeEnum {
  public static readonly PARTIAL = new FhirCodeDefinition(
    'PARTIAL',
    'partial',
    'http://hl7.org/fhir/history-status',
    'Partial',
    'Some health information is known and captured, but not complete - see notes for details.',
  );
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/history-status',
    'Completed',
    'All available related health information is captured as of the date (and possibly time) when the family member history was taken.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/history-status',
    'Entered in Error',
    'This instance should not have been part of this patient\'s medical record.',
  );
  public static readonly HEALTH_UNKNOWN = new FhirCodeDefinition(
    'HEALTH_UNKNOWN',
    'health-unknown',
    'http://hl7.org/fhir/history-status',
    'Health Unknown',
    'Health information for this family member is unavailable/unknown.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      HistoryStatusEnum.PARTIAL,
      HistoryStatusEnum.COMPLETED,
      HistoryStatusEnum.ENTERED_IN_ERROR,
      HistoryStatusEnum.HEALTH_UNKNOWN,
      HistoryStatusEnum.NULL
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
    } else if (HistoryStatusEnum.PARTIAL.code === code) {
      return HistoryStatusEnum.PARTIAL;
    } else if (HistoryStatusEnum.COMPLETED.code === code) {
      return HistoryStatusEnum.COMPLETED;
    } else if (HistoryStatusEnum.ENTERED_IN_ERROR.code === code) {
      return HistoryStatusEnum.ENTERED_IN_ERROR;
    } else if (HistoryStatusEnum.HEALTH_UNKNOWN.code === code) {
      return HistoryStatusEnum.HEALTH_UNKNOWN;
    } else if (HistoryStatusEnum.NULL.code === code) {
      return HistoryStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown HistoryStatusEnum 'code' value '${code}'`);
    }
  }
}
