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
 * DiagnosticReportStatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/diagnostic-report-status
 * CodeSystem.name: DiagnosticReportStatus
 * CodeSystem.description: The status of the diagnostic report.
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
 * FHIR CodeSystem: DiagnosticReportStatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem DiagnosticReportStatus](http://hl7.org/fhir/diagnostic-report-status)
 */
export class DiagnosticReportStatusEnum implements IFhirCodeEnum {
  public static readonly REGISTERED = new FhirCodeDefinition(
    'REGISTERED',
    'registered',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Registered',
    'The existence of the report is registered, but there is nothing yet available.',
  );
  public static readonly PARTIAL = new FhirCodeDefinition(
    'PARTIAL',
    'partial',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Partial',
    'This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.',
  );
  public static readonly PRELIMINARY = new FhirCodeDefinition(
    'PRELIMINARY',
    'preliminary',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Preliminary',
    'Verified early results are available, but not all results are final.',
  );
  public static readonly MODIFIED = new FhirCodeDefinition(
    'MODIFIED',
    'modified',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Modified',
    'Prior to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a non-finalized (e.g., preliminary) report that has been issued.',
  );
  public static readonly FINAL = new FhirCodeDefinition(
    'FINAL',
    'final',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Final',
    'The report is complete and verified by an authorized person.',
  );
  public static readonly AMENDED = new FhirCodeDefinition(
    'AMENDED',
    'amended',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Amended',
    'Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.',
  );
  public static readonly CORRECTED = new FhirCodeDefinition(
    'CORRECTED',
    'corrected',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Corrected',
    'Subsequent to being final, the report has been modified to correct an error in the report or referenced results.',
  );
  public static readonly APPENDED = new FhirCodeDefinition(
    'APPENDED',
    'appended',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Appended',
    'Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Cancelled',
    'The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Entered in Error',
    'The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).',
  );
  public static readonly UNKNOWN = new FhirCodeDefinition(
    'UNKNOWN',
    'unknown',
    'http://hl7.org/fhir/diagnostic-report-status',
    'Unknown',
    'The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      DiagnosticReportStatusEnum.REGISTERED,
      DiagnosticReportStatusEnum.PARTIAL,
      DiagnosticReportStatusEnum.PRELIMINARY,
      DiagnosticReportStatusEnum.MODIFIED,
      DiagnosticReportStatusEnum.FINAL,
      DiagnosticReportStatusEnum.AMENDED,
      DiagnosticReportStatusEnum.CORRECTED,
      DiagnosticReportStatusEnum.APPENDED,
      DiagnosticReportStatusEnum.CANCELLED,
      DiagnosticReportStatusEnum.ENTERED_IN_ERROR,
      DiagnosticReportStatusEnum.UNKNOWN,
      DiagnosticReportStatusEnum.NULL
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
    } else if (DiagnosticReportStatusEnum.REGISTERED.code === code) {
      return DiagnosticReportStatusEnum.REGISTERED;
    } else if (DiagnosticReportStatusEnum.PARTIAL.code === code) {
      return DiagnosticReportStatusEnum.PARTIAL;
    } else if (DiagnosticReportStatusEnum.PRELIMINARY.code === code) {
      return DiagnosticReportStatusEnum.PRELIMINARY;
    } else if (DiagnosticReportStatusEnum.MODIFIED.code === code) {
      return DiagnosticReportStatusEnum.MODIFIED;
    } else if (DiagnosticReportStatusEnum.FINAL.code === code) {
      return DiagnosticReportStatusEnum.FINAL;
    } else if (DiagnosticReportStatusEnum.AMENDED.code === code) {
      return DiagnosticReportStatusEnum.AMENDED;
    } else if (DiagnosticReportStatusEnum.CORRECTED.code === code) {
      return DiagnosticReportStatusEnum.CORRECTED;
    } else if (DiagnosticReportStatusEnum.APPENDED.code === code) {
      return DiagnosticReportStatusEnum.APPENDED;
    } else if (DiagnosticReportStatusEnum.CANCELLED.code === code) {
      return DiagnosticReportStatusEnum.CANCELLED;
    } else if (DiagnosticReportStatusEnum.ENTERED_IN_ERROR.code === code) {
      return DiagnosticReportStatusEnum.ENTERED_IN_ERROR;
    } else if (DiagnosticReportStatusEnum.UNKNOWN.code === code) {
      return DiagnosticReportStatusEnum.UNKNOWN;
    } else if (DiagnosticReportStatusEnum.NULL.code === code) {
      return DiagnosticReportStatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown DiagnosticReportStatusEnum 'code' value '${code}'`);
    }
  }
}
