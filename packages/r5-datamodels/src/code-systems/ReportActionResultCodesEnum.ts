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
 * ReportActionResultCodesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/report-action-result-codes
 * CodeSystem.name: ReportActionResultCodes
 * CodeSystem.description: The results of executing an action.
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
 * FHIR CodeSystem: ReportActionResultCodesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ReportActionResultCodes](http://hl7.org/fhir/report-action-result-codes)
 */
export class ReportActionResultCodesEnum implements IFhirCodeEnum {
  public static readonly PASS = new FhirCodeDefinition(
    'PASS',
    'pass',
    'http://hl7.org/fhir/report-action-result-codes',
    'Pass',
    'The action was successful.',
  );
  public static readonly SKIP = new FhirCodeDefinition(
    'SKIP',
    'skip',
    'http://hl7.org/fhir/report-action-result-codes',
    'Skip',
    'The action was skipped.',
  );
  public static readonly FAIL = new FhirCodeDefinition(
    'FAIL',
    'fail',
    'http://hl7.org/fhir/report-action-result-codes',
    'Fail',
    'The action failed.',
  );
  public static readonly WARNING = new FhirCodeDefinition(
    'WARNING',
    'warning',
    'http://hl7.org/fhir/report-action-result-codes',
    'Warning',
    'The action passed but with warnings.',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/report-action-result-codes',
    'Error',
    'The action encountered a fatal error and the engine was unable to process.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ReportActionResultCodesEnum.PASS,
      ReportActionResultCodesEnum.SKIP,
      ReportActionResultCodesEnum.FAIL,
      ReportActionResultCodesEnum.WARNING,
      ReportActionResultCodesEnum.ERROR,
      ReportActionResultCodesEnum.NULL
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
    } else if (ReportActionResultCodesEnum.PASS.code === code) {
      return ReportActionResultCodesEnum.PASS;
    } else if (ReportActionResultCodesEnum.SKIP.code === code) {
      return ReportActionResultCodesEnum.SKIP;
    } else if (ReportActionResultCodesEnum.FAIL.code === code) {
      return ReportActionResultCodesEnum.FAIL;
    } else if (ReportActionResultCodesEnum.WARNING.code === code) {
      return ReportActionResultCodesEnum.WARNING;
    } else if (ReportActionResultCodesEnum.ERROR.code === code) {
      return ReportActionResultCodesEnum.ERROR;
    } else if (ReportActionResultCodesEnum.NULL.code === code) {
      return ReportActionResultCodesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ReportActionResultCodesEnum 'code' value '${code}'`);
    }
  }
}
