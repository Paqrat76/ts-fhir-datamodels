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
 * AuditEventOutcomeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/audit-event-outcome
 * CodeSystem.name: AuditEventOutcome
 * CodeSystem.description: Indicates whether the event succeeded or failed.
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
 * FHIR CodeSystem: AuditEventOutcomeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem AuditEventOutcome](http://hl7.org/fhir/audit-event-outcome)
 */
export class AuditEventOutcomeEnum implements IFhirCodeEnum {
  public static readonly _0 = new FhirCodeDefinition(
    '_0',
    '0',
    'http://hl7.org/fhir/audit-event-outcome',
    'Success',
    'The operation completed successfully (whether with warnings or not).',
  );
  public static readonly _4 = new FhirCodeDefinition(
    '_4',
    '4',
    'http://hl7.org/fhir/audit-event-outcome',
    'Minor failure',
    'The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).',
  );
  public static readonly _8 = new FhirCodeDefinition(
    '_8',
    '8',
    'http://hl7.org/fhir/audit-event-outcome',
    'Serious failure',
    'The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).',
  );
  public static readonly _12 = new FhirCodeDefinition(
    '_12',
    '12',
    'http://hl7.org/fhir/audit-event-outcome',
    'Major failure',
    'An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      AuditEventOutcomeEnum._0,
      AuditEventOutcomeEnum._4,
      AuditEventOutcomeEnum._8,
      AuditEventOutcomeEnum._12,
      AuditEventOutcomeEnum.NULL
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
    } else if (AuditEventOutcomeEnum._0.code === code) {
      return AuditEventOutcomeEnum._0;
    } else if (AuditEventOutcomeEnum._4.code === code) {
      return AuditEventOutcomeEnum._4;
    } else if (AuditEventOutcomeEnum._8.code === code) {
      return AuditEventOutcomeEnum._8;
    } else if (AuditEventOutcomeEnum._12.code === code) {
      return AuditEventOutcomeEnum._12;
    } else if (AuditEventOutcomeEnum.NULL.code === code) {
      return AuditEventOutcomeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown AuditEventOutcomeEnum 'code' value '${code}'`);
    }
  }
}
