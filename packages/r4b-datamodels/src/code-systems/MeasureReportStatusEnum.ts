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
 * MeasureReportStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/measure-report-status
 * CodeSystem.name: MeasureReportStatus
 * CodeSystem.description: The status of the measure report.
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
 * FHIR CodeSystem: MeasureReportStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem MeasureReportStatus](http://hl7.org/fhir/measure-report-status)
 */
export class MeasureReportStatusEnum implements IFhirCodeEnum {
  public static readonly COMPLETE = new FhirCodeDefinition(
    'COMPLETE',
    'complete',
    'http://hl7.org/fhir/measure-report-status',
    'Complete',
    'The report is complete and ready for use.',
  );
  public static readonly PENDING = new FhirCodeDefinition(
    'PENDING',
    'pending',
    'http://hl7.org/fhir/measure-report-status',
    'Pending',
    'The report is currently being generated.',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/measure-report-status',
    'Error',
    'An error occurred attempting to generate the report.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      MeasureReportStatusEnum.COMPLETE,
      MeasureReportStatusEnum.PENDING,
      MeasureReportStatusEnum.ERROR,
      MeasureReportStatusEnum.NULL
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
    } else if (MeasureReportStatusEnum.COMPLETE.code === code) {
      return MeasureReportStatusEnum.COMPLETE;
    } else if (MeasureReportStatusEnum.PENDING.code === code) {
      return MeasureReportStatusEnum.PENDING;
    } else if (MeasureReportStatusEnum.ERROR.code === code) {
      return MeasureReportStatusEnum.ERROR;
    } else if (MeasureReportStatusEnum.NULL.code === code) {
      return MeasureReportStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown MeasureReportStatusEnum 'code' value '${code}'`);
    }
  }
}
