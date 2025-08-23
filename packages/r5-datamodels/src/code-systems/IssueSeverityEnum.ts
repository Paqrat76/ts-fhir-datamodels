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
 * IssueSeverityEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/issue-severity
 * CodeSystem.name: IssueSeverity
 * CodeSystem.description: How the issue affects the success of the action.
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
 * FHIR CodeSystem: IssueSeverityEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem IssueSeverity](http://hl7.org/fhir/issue-severity)
 */
export class IssueSeverityEnum implements IFhirCodeEnum {
  public static readonly FATAL = new FhirCodeDefinition(
    'FATAL',
    'fatal',
    'http://hl7.org/fhir/issue-severity',
    'Fatal',
    'The issue caused the action to fail and no further checking could be performed.',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/issue-severity',
    'Error',
    'The issue is sufficiently important to cause the action to fail.',
  );
  public static readonly WARNING = new FhirCodeDefinition(
    'WARNING',
    'warning',
    'http://hl7.org/fhir/issue-severity',
    'Warning',
    'The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.',
  );
  public static readonly INFORMATION = new FhirCodeDefinition(
    'INFORMATION',
    'information',
    'http://hl7.org/fhir/issue-severity',
    'Information',
    'The issue has no relation to the degree of success of the action.',
  );
  public static readonly SUCCESS = new FhirCodeDefinition(
    'SUCCESS',
    'success',
    'http://hl7.org/fhir/issue-severity',
    'Operation Successful',
    'The operation completed successfully.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      IssueSeverityEnum.FATAL,
      IssueSeverityEnum.ERROR,
      IssueSeverityEnum.WARNING,
      IssueSeverityEnum.INFORMATION,
      IssueSeverityEnum.SUCCESS,
      IssueSeverityEnum.NULL
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
    } else if (IssueSeverityEnum.FATAL.code === code) {
      return IssueSeverityEnum.FATAL;
    } else if (IssueSeverityEnum.ERROR.code === code) {
      return IssueSeverityEnum.ERROR;
    } else if (IssueSeverityEnum.WARNING.code === code) {
      return IssueSeverityEnum.WARNING;
    } else if (IssueSeverityEnum.INFORMATION.code === code) {
      return IssueSeverityEnum.INFORMATION;
    } else if (IssueSeverityEnum.SUCCESS.code === code) {
      return IssueSeverityEnum.SUCCESS;
    } else if (IssueSeverityEnum.NULL.code === code) {
      return IssueSeverityEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown IssueSeverityEnum 'code' value '${code}'`);
    }
  }
}
