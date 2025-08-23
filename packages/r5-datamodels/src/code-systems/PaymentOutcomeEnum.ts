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
 * PaymentOutcomeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/payment-outcome
 * CodeSystem.name: PaymentOutcome
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
 * FHIR CodeSystem: PaymentOutcomeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem PaymentOutcome](http://hl7.org/fhir/payment-outcome)
 */
export class PaymentOutcomeEnum implements IFhirCodeEnum {
  public static readonly QUEUED = new FhirCodeDefinition(
    'QUEUED',
    'queued',
    'http://hl7.org/fhir/payment-outcome',
    'Queued',
    'The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.',
  );
  public static readonly COMPLETE = new FhirCodeDefinition(
    'COMPLETE',
    'complete',
    'http://hl7.org/fhir/payment-outcome',
    'Processing Complete',
    'The processing has completed without errors',
  );
  public static readonly ERROR = new FhirCodeDefinition(
    'ERROR',
    'error',
    'http://hl7.org/fhir/payment-outcome',
    'Error',
    'One or more errors have been detected in the Claim',
  );
  public static readonly PARTIAL = new FhirCodeDefinition(
    'PARTIAL',
    'partial',
    'http://hl7.org/fhir/payment-outcome',
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
      PaymentOutcomeEnum.QUEUED,
      PaymentOutcomeEnum.COMPLETE,
      PaymentOutcomeEnum.ERROR,
      PaymentOutcomeEnum.PARTIAL,
      PaymentOutcomeEnum.NULL
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
    } else if (PaymentOutcomeEnum.QUEUED.code === code) {
      return PaymentOutcomeEnum.QUEUED;
    } else if (PaymentOutcomeEnum.COMPLETE.code === code) {
      return PaymentOutcomeEnum.COMPLETE;
    } else if (PaymentOutcomeEnum.ERROR.code === code) {
      return PaymentOutcomeEnum.ERROR;
    } else if (PaymentOutcomeEnum.PARTIAL.code === code) {
      return PaymentOutcomeEnum.PARTIAL;
    } else if (PaymentOutcomeEnum.NULL.code === code) {
      return PaymentOutcomeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown PaymentOutcomeEnum 'code' value '${code}'`);
    }
  }
}
