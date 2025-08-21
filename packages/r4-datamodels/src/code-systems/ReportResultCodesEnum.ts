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
 * ReportResultCodesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/report-result-codes
 * CodeSystem.name: ReportResultCodes
 * CodeSystem.description: The reported execution result.
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
 * FHIR CodeSystem: ReportResultCodesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ReportResultCodes](http://hl7.org/fhir/report-result-codes)
 */
export class ReportResultCodesEnum implements IFhirCodeEnum {
  public static readonly PASS = new FhirCodeDefinition(
    'PASS',
    'pass',
    'http://hl7.org/fhir/report-result-codes',
    'Pass',
    'All test operations successfully passed all asserts.',
  );
  public static readonly FAIL = new FhirCodeDefinition(
    'FAIL',
    'fail',
    'http://hl7.org/fhir/report-result-codes',
    'Fail',
    'One or more test operations failed one or more asserts.',
  );
  public static readonly PENDING = new FhirCodeDefinition(
    'PENDING',
    'pending',
    'http://hl7.org/fhir/report-result-codes',
    'Pending',
    'One or more test operations is pending execution completion.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ReportResultCodesEnum.PASS,
      ReportResultCodesEnum.FAIL,
      ReportResultCodesEnum.PENDING,
      ReportResultCodesEnum.NULL
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
    } else if (ReportResultCodesEnum.PASS.code === code) {
      return ReportResultCodesEnum.PASS;
    } else if (ReportResultCodesEnum.FAIL.code === code) {
      return ReportResultCodesEnum.FAIL;
    } else if (ReportResultCodesEnum.PENDING.code === code) {
      return ReportResultCodesEnum.PENDING;
    } else if (ReportResultCodesEnum.NULL.code === code) {
      return ReportResultCodesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ReportResultCodesEnum 'code' value '${code}'`);
    }
  }
}
