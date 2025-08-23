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
 * AssertManualCompletionCodesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/assert-manual-completion-codes
 * CodeSystem.name: AssertManualCompletionCodes
 * CodeSystem.description: The type of manual completion to use for assertion.
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
 * FHIR CodeSystem: AssertManualCompletionCodesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AssertManualCompletionCodes](http://hl7.org/fhir/assert-manual-completion-codes)
 */
export class AssertManualCompletionCodesEnum implements IFhirCodeEnum {
  public static readonly FAIL = new FhirCodeDefinition(
    'FAIL',
    'fail',
    'http://hl7.org/fhir/assert-manual-completion-codes',
    'Fail',
    'Mark the currently waiting test failed and proceed with the next assert if the stopTestOnFail is false or the next test in the TestScript if the stopTestOnFail is true.',
  );
  public static readonly PASS = new FhirCodeDefinition(
    'PASS',
    'pass',
    'http://hl7.org/fhir/assert-manual-completion-codes',
    'Pass',
    'Mark the currently waiting test passed (if the test is not failed already) and proceed with the next action in the TestScript.',
  );
  public static readonly SKIP = new FhirCodeDefinition(
    'SKIP',
    'skip',
    'http://hl7.org/fhir/assert-manual-completion-codes',
    'Skip',
    'Mark this assert as skipped and proceed with the next action in the TestScript.',
  );
  public static readonly STOP = new FhirCodeDefinition(
    'STOP',
    'stop',
    'http://hl7.org/fhir/assert-manual-completion-codes',
    'Stop',
    'Stop execution of this TestScript. The overall status of this TestScript is evaluated based on the status of the completed tests.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AssertManualCompletionCodesEnum.FAIL,
      AssertManualCompletionCodesEnum.PASS,
      AssertManualCompletionCodesEnum.SKIP,
      AssertManualCompletionCodesEnum.STOP,
      AssertManualCompletionCodesEnum.NULL
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
    } else if (AssertManualCompletionCodesEnum.FAIL.code === code) {
      return AssertManualCompletionCodesEnum.FAIL;
    } else if (AssertManualCompletionCodesEnum.PASS.code === code) {
      return AssertManualCompletionCodesEnum.PASS;
    } else if (AssertManualCompletionCodesEnum.SKIP.code === code) {
      return AssertManualCompletionCodesEnum.SKIP;
    } else if (AssertManualCompletionCodesEnum.STOP.code === code) {
      return AssertManualCompletionCodesEnum.STOP;
    } else if (AssertManualCompletionCodesEnum.NULL.code === code) {
      return AssertManualCompletionCodesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AssertManualCompletionCodesEnum 'code' value '${code}'`);
    }
  }
}
