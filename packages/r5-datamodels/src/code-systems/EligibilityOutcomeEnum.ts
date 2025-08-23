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
 * EligibilityOutcomeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/eligibility-outcome
 * CodeSystem.name: EligibilityOutcome
 * CodeSystem.description: This value set includes Claim Processing Outcome codes.
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
 * FHIR CodeSystem: EligibilityOutcomeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem EligibilityOutcome](http://hl7.org/fhir/eligibility-outcome)
 */
export class EligibilityOutcomeEnum implements IFhirCodeEnum {
  public static readonly QUEUED = new FhirCodeDefinition(
    'QUEUED',
    'queued',
    'http://hl7.org/fhir/eligibility-outcome',
    'Queued',
    'The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.',
  );
  public static readonly COMPLETE = new FhirCodeDefinition(
    'COMPLETE',
    'complete',
    'http://hl7.org/fhir/eligibility-outcome',
    'Processing Complete',
    'The processing has completed without errors',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/eligibility-outcome',
    'Error',
    'One or more errors have been detected in the Claim',
  );
  public static readonly PARTIAL = new FhirCodeDefinition(
    'PARTIAL',
    'partial',
    'http://hl7.org/fhir/eligibility-outcome',
    'Partial Processing',
    'No errors have been detected in the Claim and some of the adjudication has been performed.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      EligibilityOutcomeEnum.QUEUED,
      EligibilityOutcomeEnum.COMPLETE,
      EligibilityOutcomeEnum.ERROR,
      EligibilityOutcomeEnum.PARTIAL,
      EligibilityOutcomeEnum.NULL
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
    } else if (EligibilityOutcomeEnum.QUEUED.code === code) {
      return EligibilityOutcomeEnum.QUEUED;
    } else if (EligibilityOutcomeEnum.COMPLETE.code === code) {
      return EligibilityOutcomeEnum.COMPLETE;
    } else if (EligibilityOutcomeEnum.ERROR.code === code) {
      return EligibilityOutcomeEnum.ERROR;
    } else if (EligibilityOutcomeEnum.PARTIAL.code === code) {
      return EligibilityOutcomeEnum.PARTIAL;
    } else if (EligibilityOutcomeEnum.NULL.code === code) {
      return EligibilityOutcomeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown EligibilityOutcomeEnum 'code' value '${code}'`);
    }
  }
}
