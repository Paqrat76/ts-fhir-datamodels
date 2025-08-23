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
 * ReportStatusCodesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/report-status-codes
 * CodeSystem.name: ReportStatusCodes
 * CodeSystem.description: The current status of the test report.
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
 * FHIR CodeSystem: ReportStatusCodesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ReportStatusCodes](http://hl7.org/fhir/report-status-codes)
 */
export class ReportStatusCodesEnum implements IFhirCodeEnum {
  public static readonly COMPLETED = new FhirCodeDefinition(
    'COMPLETED',
    'completed',
    'http://hl7.org/fhir/report-status-codes',
    'Completed',
    'All test operations have completed.',
  );
  public static readonly IN_PROGRESS = new FhirCodeDefinition(
    'IN_PROGRESS',
    'in-progress',
    'http://hl7.org/fhir/report-status-codes',
    'In Progress',
    'A test operations is currently executing.',
  );
  public static readonly WAITING = new FhirCodeDefinition(
    'WAITING',
    'waiting',
    'http://hl7.org/fhir/report-status-codes',
    'Waiting',
    'A test operation is waiting for an external client request.',
  );
  public static readonly STOPPED = new FhirCodeDefinition(
    'STOPPED',
    'stopped',
    'http://hl7.org/fhir/report-status-codes',
    'Stopped',
    'The test script execution was manually stopped.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/report-status-codes',
    'Entered In Error',
    'This test report was entered or created in error.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ReportStatusCodesEnum.COMPLETED,
      ReportStatusCodesEnum.IN_PROGRESS,
      ReportStatusCodesEnum.WAITING,
      ReportStatusCodesEnum.STOPPED,
      ReportStatusCodesEnum.ENTERED_IN_ERROR,
      ReportStatusCodesEnum.NULL
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
    } else if (ReportStatusCodesEnum.COMPLETED.code === code) {
      return ReportStatusCodesEnum.COMPLETED;
    } else if (ReportStatusCodesEnum.IN_PROGRESS.code === code) {
      return ReportStatusCodesEnum.IN_PROGRESS;
    } else if (ReportStatusCodesEnum.WAITING.code === code) {
      return ReportStatusCodesEnum.WAITING;
    } else if (ReportStatusCodesEnum.STOPPED.code === code) {
      return ReportStatusCodesEnum.STOPPED;
    } else if (ReportStatusCodesEnum.ENTERED_IN_ERROR.code === code) {
      return ReportStatusCodesEnum.ENTERED_IN_ERROR;
    } else if (ReportStatusCodesEnum.NULL.code === code) {
      return ReportStatusCodesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ReportStatusCodesEnum 'code' value '${code}'`);
    }
  }
}
